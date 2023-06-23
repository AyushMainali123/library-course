import { BodyTwo, HeadingOne } from '@/components/ui/core/text'
import SearchCourse from '@/components/ui/features/form/search-course'
import Image from 'next/image'
import BannerImage from '/public/images/landing/banner.png'
import PatternImage from '/public/images/landing/pattern.png'
const Banner = () => {
  return (
    <section role="banner" className="bg-grey-background">
      <div className="bg-brand-two">
        <section className="container pt-8">
          <HeadingOne className="mb-5  text-white">Find your course Change your life</HeadingOne>
          <BodyTwo className="text-white">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
            dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer.
          </BodyTwo>
          <SearchCourse containerClassName="mt-9 mb-11" />
          <Image src={BannerImage} alt="Banner" />
        </section>
      </div>
      <div className="relative bottom-8 h-9 w-full bg-transparent">
        <Image src={PatternImage} alt="Pattern" fill style={{ objectFit: 'fill' }} />
      </div>
    </section>
  )
}

export default Banner
