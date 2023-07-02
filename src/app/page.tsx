import Banner from '@/components/pages/landing/banner'
import LearningSteps from '@/components/pages/landing/learning-steps'
import PopularCourses from '@/components/pages/landing/popular-courses'
import SpecialFeatures from '@/components/pages/landing/special-features'
import Partners from '@/components/ui/features/partners'
import Navbar from '@/components/ui/shared/navbar/Navbar'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner />
      <div className="bg-grey-background">
        <div className="mb-12">
          <Partners />
        </div>
        <SpecialFeatures />
        <LearningSteps />
        <PopularCourses />
      </div>
    </main>
  )
}
