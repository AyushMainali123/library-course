import { BodyTwo, HeadingOne } from '@/components/ui/core/text'
import Image from 'next/image'
import BannerImage from '/public/images/landing/banner.png'
import PatternImage from '/public/images/landing/pattern.png'
import SearchCourse from '@/components/ui/shared/search-course'
const Banner = () => {
  return (
    <div className="bg-background-secondary">
      <section className="container bg-brand-two pt-8">
        <HeadingOne className="mb-5  text-white">Find your course Change your life</HeadingOne>
        <BodyTwo className="text-white">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
          dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer.
        </BodyTwo>
        <SearchCourse />
        <Image src={BannerImage} alt="Banner" />
      </section>
      <div className="relative bottom-8 h-9 w-full bg-transparent">
        <Image src={PatternImage} alt="Pattern" fill style={{ objectFit: 'fill' }} />
      </div>
    </div>
  )
}

export default Banner
