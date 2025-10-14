"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen pattern-bg">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">More than software</p>
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="" width={50} height={50} className="w-50 h-12" />
        </div>
        <div className="w-32" /> {/* Spacer for centering */}
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 lg:py-20 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-lg lg:text-xl font-semibold text-primary uppercase tracking-wide">FREELIVE WORKSHOP</p>
              <h1 className="text-3xl lg:text-4xl xl:text-5xl text-foreground leading-tight text-balance">
                Innovation strategies for nonprofits & education.
              </h1>
            </div>

            {/* Video Thumbnail */}
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute inset-0">
                  <Image src="/card-image-temporal.png" alt="Workshop presenter" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              onClick={() => document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full max-w-xl mx-auto bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-8 text-lg font-semibold rounded-full shadow-lg"
            >
              Reserve Your Spot Today - free registration
            </Button>
          </div>

          {/* Right Column */}
          <div className="relative">
            {/* 3D Star Decoration */}
            <div className="absolute -top-7/12 -right-12 w-110 h-110 hidden xl:block z-10">
              <Image src="/star.png" alt="" width={200} height={200} className="w-full h-full" />
            </div>

            <div className="bg-card-background backdrop-blur-sm rounded-3xl p-8 shadow-lg h-[535px] flex flex-col justify-center relative">
              <h2 className="text-4xl font-bold text-primary mb-6">Why this sector needs innovation now.</h2>
              <div className="space-y-4 text-foreground/80">
                <p className="text-base leading-relaxed">
                  Digital transformation is no longer optional for nonprofits and education. It's the key to:
                </p>
                <ol className="space-y-4 text-base">
                  <li className="flex gap-3">
                    <span className="font-semibold text-primary shrink-0">1.</span>
                    <span>Scaling your programs with fewer resources.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-primary shrink-0">2.</span>
                    <span>Engaging students, donors, and communities.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-primary shrink-0">3.</span>
                    <span>Delivering seamless, modern experiences.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-primary shrink-0">4.</span>
                    <span>
                      Innovation is not just adopting tools. It's aligning people, processes, and technology to amplify
                      your purpose.
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Background Pattern */}
      <div className="min-h-60 relative -mt-60 -mb-10" style={{ backgroundImage: 'url(/background-pattern.png)' }}></div>

      {/* The 3 Core Components */}
      <section className="container mx-auto my-25 px-4 py-24 lg:py-24">
        <div className="grid md:grid-cols-4 gap-4">
          <div className="my-8">
            <h2 className="text-5xl lg:text-7xl font-bold text-foreground">
              The 3
            </h2>
            <p className="text-2xl lg:text-3xl font-bold text-foreground mt-2">Core Components:</p>
          </div>

          <Card className="bg-card-gradient-start text-white p-8 rounded-2xl border-0 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">People:</h3>
            <p className="text-white leading-relaxed">
              Build a digital mindset and align your team with purpose.
            </p>
          </Card>

          <Card className="bg-card-gradient-mid text-white p-8 rounded-2xl border-0 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Process:</h3>
            <p className="text-white leading-relaxed">Standardize workflows and scale what works.</p>
          </Card>

          <Card className="bg-card-gradient-end text-white p-8 rounded-2xl border-0 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Technology:</h3>
            <p className="text-white leading-relaxed">
              Adopt tools that serve your community and protect trust.
            </p>
          </Card>
        </div>
      </section>

      {/* Dark Section - What You'll Discover */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="relative bg-card-ring rounded-[3rem] p-6 lg:p-16 min-h-[400px] lg:min-h-[535px] max-w-[1050px] mx-auto">
          {/* 3D Hexagon Decoration */}
          <div className="absolute -left-50 top-2 -translate-y-1/2 w-115 h-115 hidden lg:block z-20">
            <Image src="/ring.png" alt="" width={300} height={300} className="w-full h-full" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-24 items-start lg:items-center">
            <div className="mb-6 lg:mb-0">
              <h2 className="text-3xl lg:text-5xl text-white mb-8 lg:mt-30">In this free class you will discover:</h2>
            </div>

            <div className="space-y-6 text-gray-300 lg:mt-10">
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-accent shrink-0">•</span>
                  <span>Why innovation goes beyond software — and how to apply it to your mission.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent shrink-0">•</span>
                  <span>How to foster innovation with the People, Process, Technology framework.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent shrink-0">•</span>
                  <span>Success cases of organizations scaling their impact.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent shrink-0">•</span>
                  <span>Practical steps to start your own digital transformation journey.</span>
                </li>
              </ul>

              <p className="text-accent font-semibold italic pt-4">
                Bonus: Downloadable template kit to organize your innovation roadmap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16 lg:py-40 flex w-[1050px] z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image and Text */}
          <div className="space-y-4">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl h-[535px]">
              <Image src="/helmet.png" alt="Innovation technology" fill className="object-cover" />
            </div>
            {/* Separate text box below image */}
            <div className="bg-card-purple rounded-2xl p-4 text-center text-sm font-semibold text-card-purple-text uppercase tracking-wide w-[400px]">
              At Myneflow, we don't just build tech — <span className="font-black">we deliver results.</span>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">About</p>
              <div className="flex items-center mb-6">
                <Image src="/logo.png" alt="" width={50} height={50} className="w-50 h-12 -ml-4" />
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg font-semibold text-foreground">
                We've helped education programs, nonprofits, and community-driven organizations:
              </p>

              <ul className="space-y-3 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-primary shrink-0">•</span>
                  <span>Improve decision-making with real-time data.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary shrink-0">•</span>
                  <span>Enhance beneficiary and donor experiences.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary shrink-0">•</span>
                  <span>Optimize operations while staying human-centered.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary shrink-0">•</span>
                  <span>
                    Trusted by innovators across sectors, our team combines strategy, design, and technology to make
                    transformation real.
                  </span>
                </li>
              </ul>

              <div className="pt-4">
                <p className="text-primary font-semibold italic mb-6">
                  Secure your spot today and take the first step towards innovation. Seats are limited — only 10
                  available.
                </p>
                <Button
                  size="lg"
                  onClick={() => document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold rounded-full shadow-lg"
                >
                  Reserve Your Spot Today - free registration
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Background Pattern */}
      <div className="min-h-60 relative -mt-60 -mb-10" style={{ backgroundImage: 'url(/background-pattern.png)' }}></div>

      {/* Purple Banner Section */}
      <section className="bg-secondary-background py-16 lg:py-20 mt-10">
        <div className="container mx-auto px-4">
          <div className="relative bg-primary rounded-3xl p-8 lg:p-16 min-h-[400px] lg:min-h-[500px] mt-20">
            {/* 3D Star Decoration */}
            <div className="absolute -top-30 -right-12 w-110 h-110 hidden lg:block z-20">
              <Image src="/star.png" alt="" width={320} height={320} className="w-full h-full" />
            </div>

            {/* Content */}
            <div className="relative z-20 grid lg:grid-cols-2 gap-8 items-center min-h-[300px] lg:min-h-[400px]">
              {/* Left Side - Text */}
              <div className="space-y-6">
                <p className="text-lg lg:text-xl font-semibold text-white uppercase tracking-wide -mt-40">FREELIVE WORKSHOP</p>
                <h2 className="text-2xl lg:text-4xl xl:text-5xl text-white leading-tight">
                  Innovation strategies for nonprofits & education.
                </h2>
              </div>

              {/* Right Side - Spacer for 3D element */}
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </div>
        {/* Registration Form Section */}
        <section id="registration-form" className="container mx-auto px-4 py-16 lg:py-20 -mt-70 z-10 relative">
          <div className="bg-white rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto shadow-lg">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
              Reserve Your Spot Today
            </h2>

            <form className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Example: Maria Gonzalez"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="We'll send your confirmation and event materials here."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Organization / Company */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Organization / Company</label>
                <input
                  type="text"
                  placeholder="Myneflow"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Sector */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Sector</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
                  <option value="">Select the option that best describes you:</option>
                  <option value="nonprofit">Nonprofit</option>
                  <option value="education">Education</option>
                  <option value="government">Government</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Separator */}
              <div className="border-t border-gray-200 my-6"></div>

              {/* Country / Region */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Country / Region or state</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
                  <option value="">So we can connect you with the right Myneflow team.</option>
                  <option value="us">United States</option>
                  <option value="canada">Canada</option>
                  <option value="mexico">Mexico</option>
                  <option value="uk">United Kingdom</option>
                  <option value="spain">Spain</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Role / Position */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Role / Position</label>
                <input
                  type="text"
                  placeholder="Director / Founder / Manager / Specialist / Other"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* What solution are you interested in? */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">What solution are you interested in?</label>
                <p className="text-sm text-muted-foreground mb-3">You can select one or more:</p>
                <div className="space-y-3">
                  {[
                    'Lead-to-cash',
                    'Procure-to-pay',
                    'Data-to-insights',
                    'Sale-to-fulfillment',
                    'People-to-performance'
                  ].map((solution, index) => (
                    <label key={index} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2"
                      />
                      <span className="text-foreground">{solution}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message or Project Goal */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message or Project Goal (optional)</label>
                <textarea
                  placeholder="Tell us what you'd like to achieve or learn."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 text-lg font-semibold rounded-full shadow-lg"
                >
                  Reserve Your Spot Today - free registration
                </Button>
              </div>
            </form>
          </div>
        </section>
      </section>
    </main >
  )
}
