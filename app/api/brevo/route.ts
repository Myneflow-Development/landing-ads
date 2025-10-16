import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        console.log('Received data from frontend:', body);

        // Extract form data
        const {
            NOMBRE_COMPLETO,
            email,
            full_name,
            ORGANIZACION,
            SECTOR,
            PAIS,
            ROLE,
            SOLUCIONES,
            MENSAJE
        } = body;

        // Validate required fields
        const nameToUse = NOMBRE_COMPLETO || full_name;
        if (!email || !nameToUse) {
            return NextResponse.json(
                { error: 'Email and full name are required' },
                { status: 400 }
            );
        }

        // Prepare data for Brevo API - solo incluir campos que no estén vacíos
        const attributes: Record<string, string> = {};

        // Campos básicos de Brevo (siempre funcionan)
        if (nameToUse) {
            attributes.FIRSTNAME = nameToUse.split(' ')[0] || '';
            if (nameToUse.split(' ').length > 1) {
                attributes.LASTNAME = nameToUse.split(' ').slice(1).join(' ') || '';
            }
        }

        // Campos personalizados - solo agregar si tienen valor
        if (nameToUse) attributes.NOMBRE_COMPLETO = nameToUse;
        if (ORGANIZACION) attributes.ORGANIZACION = ORGANIZACION;
        if (SECTOR) attributes.SECTOR = SECTOR;
        if (PAIS) attributes.PAIS = PAIS;
        if (ROLE) attributes.ROLE = ROLE;
        if (MENSAJE) attributes.MENSAJE = MENSAJE;
        if (SOLUCIONES) {
            attributes.SOLUCIONES = Array.isArray(SOLUCIONES) ? SOLUCIONES.join(', ') : SOLUCIONES;
        }

        const brevoData = {
            email,
            attributes,
            listIds: [parseInt(process.env.BREVO_LIST_ID || '1')], // Default to list ID 1
            updateEnabled: true, // Allow updating existing contacts
        };

        console.log('Brevo data:', brevoData);

        // console.log('Sending data to Brevo:', JSON.stringify(brevoData, null, 2));

        // Call Brevo API
        const response = await fetch('https://api.brevo.com/v3/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-key': process.env.BREVO_API_KEY!,
            },
            body: JSON.stringify(brevoData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Brevo API error:', errorData);
            console.error('Response status:', response.status);

            // If contact already exists, try to update it
            if (response.status === 400 && errorData.code === 'duplicate_parameter') {
                const updateResponse = await fetch(`https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'api-key': process.env.BREVO_API_KEY!,
                    },
                    body: JSON.stringify({
                        attributes: brevoData.attributes,
                        listIds: brevoData.listIds,
                    }),
                });

                if (!updateResponse.ok) {
                    const updateError = await updateResponse.json();
                    console.error('Brevo update error:', updateError);
                    return NextResponse.json(
                        { error: 'Failed to update contact' },
                        { status: 500 }
                    );
                }

                return NextResponse.json({ success: true, message: 'Contact updated successfully' });
            }

            return NextResponse.json(
                { error: 'Failed to create contact' },
                { status: 500 }
            );
        }

        const result = await response.json();
        console.log('Brevo API success response:', result);
        return NextResponse.json({ success: true, message: 'Contact created successfully', data: result });

    } catch (error) {
        console.error('Server error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
