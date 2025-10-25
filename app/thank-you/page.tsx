"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function ThankYou() {
    return (
        <main className="min-h-screen pattern-bg">
            {/* Header */}
            <header className="container mx-auto px-4 py-4 sm:py-6 flex items-center justify-between">
                <p className="text-xs sm:text-sm text-muted-foreground">More than software</p>
                <div className="flex items-center gap-2">
                    <Image src="/logo.png" alt="" width={200} height={43} className="w-42 h-auto sm:w-60 sm:h-auto" />
                </div>
                <div className="w-20 sm:w-32" /> {/* Spacer for centering */}
            </header>

            {/* Thank You Hero Section */}
            <section className="container mx-auto px-4 py-8 sm:py-12 lg:py-20 z-10 relative">
                <div className="grid lg:grid-cols-1 gap-8 lg:gap-12 items-start">
                    {/* Left Column */}
                    <div className="space-y-6 sm:space-y-8">
                        <div className="space-y-3 sm:space-y-4">
                            <p className="text-base sm:text-lg lg:text-xl font-semibold text-primary uppercase tracking-wide">REGISTRATION CONFIRMED</p>
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-foreground leading-tight text-balance">
                                Thank you for your registration!
                            </h1>
                        </div>

                        {/* Success Message Card */}
                        <div className="bg-green-50 border border-green-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-green-800">Registration Successful</h3>
                            </div>
                            <p className="text-green-700 text-sm sm:text-base">
                                You'll receive a confirmation email.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="space-y-4">
                            <Button
                                size="lg"
                                asChild
                                className="w-full max-w-xl mx-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-12 py-6 sm:py-8 text-base sm:text-lg font-semibold rounded-full shadow-lg"
                            >
                                <Link href="/">
                                    Return to Homepage
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Decorative Background Pattern */}
            <div className="min-h-60 relative -mt-60 -mb-10" style={{ backgroundImage: 'url(/background-pattern.png)' }}></div>
        </main>
    )
}
