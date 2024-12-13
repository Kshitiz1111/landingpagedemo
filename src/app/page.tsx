import AchievementsSection from '@/components/achivements-section'
import Footer from '@/components/footer'
import { ImpactStoriesSection } from '@/components/impact-stories-section'
import NewsSection from '@/components/news-section'
import ServicesSection from '@/components/service-section'
import TeamSection from '@/components/team-section'
import { TeamSlider } from '@/components/team-slider'
import VideoSection from '@/components/video-section'
import CTASection from '@/components/call-to-action'
// import Image from 'next/image'
// import Link from 'next/link'
// import { Plus } from 'lucide-react'
import HeroSection from '@/components/hero-section'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D1117] text-white relative overflow-hidden">
      <div className="">
        <HeroSection />
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

