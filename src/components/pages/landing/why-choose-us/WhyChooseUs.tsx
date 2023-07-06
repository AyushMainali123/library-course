import { BodyTwo, HeadingTwo, SubtitleTwo } from '@/components/ui/core/text'
import Image from 'next/image'
import { whyChooseUsData } from './WhyChooseUs.data'
import SpecialFeaturesMobile from '/public/images/landing/special-features-mobile.png'
const WhyChooseUs = () => {
  return (
    <section className="container bg-white py-6">
      <div className="mb-7 text-center">
        <HeadingTwo className="mb-2">Our Special Features For You</HeadingTwo>
        <BodyTwo className="opacity-70">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
          dolore magna aliquam erat volutpat.
        </BodyTwo>
      </div>
      <div className="mb-10 flex flex-col gap-5">
        {whyChooseUsData.map((data) => (
          <div className="flex items-center gap-3" key={data.id}>
            <Image src={data.icon} alt={data.title} />
            <SubtitleTwo>{data.title}</SubtitleTwo>
          </div>
        ))}
      </div>
      <div>
        <Image src={SpecialFeaturesMobile} alt="Special Features Mobile" quality={100} />
      </div>
    </section>
  )
}

export default WhyChooseUs
