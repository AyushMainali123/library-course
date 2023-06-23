import Banner from '@/components/pages/landing/banner'
import Partners from '@/components/pages/landing/partners'
import Navbar from '@/components/ui/shared/navbar/Navbar'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner />
      <Partners />
    </main>
  )
}
