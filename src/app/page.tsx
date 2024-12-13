import AchievementsSection from '@/components/achivements-section'
import Footer from '@/components/footer'
import { ImpactStoriesSection } from '@/components/impact-stories-section'
import NewsSection from '@/components/news-section'
import ServicesSection from '@/components/service-section'
import TeamSection from '@/components/team-section'
import { TeamSlider } from '@/components/team-slider'
import VideoSection from '@/components/video-section'
import CTASection from '@/components/call-to-action'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D1117] text-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6">
        <section className="relative min-h-[100vh] pt-20 grid lg:grid-cols-2 items-center gap-8">
          {/* Left Content */}
          <div className="relative z-10 py-20 lg:py-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Unlock your
              <br />
              business&apos;s
              <br />
              full{' '}
              <span className="text-[#CCFF00]">
                potential.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-8">
              We&apos;re a global consultancy that helps the world&apos;s most ambitious change makers define the future.
            </p>
            <Link
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-[#CCFF00] px-8 text-base font-medium text-black hover:bg-[#CCFF00]/90 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Right Image */}
          <div className="absolute lg:relative inset-0 lg:inset-auto">
            <div className="absolute inset-0 bg-black/60 lg:hidden" />
            <Image
              src="/image/heroimg.jpg"
              alt="Team collaboration"
              width={800}
              height={600}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Diagonal Divider */}
          <div
            className="absolute bottom-0 left-0 right-0 h-32 lg:h-48"
            style={{
              background: 'linear-gradient(135deg, transparent 50%, #CCFF00 50%)',
            }}
          />
        </section>
        <ServicesSection />
        <VideoSection />
        <TeamSection />
        <TeamSlider />
        <AchievementsSection />
        <NewsSection />
        <ImpactStoriesSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  )
}

