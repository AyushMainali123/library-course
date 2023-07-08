import { BodyTwo, HeadingTwo, SubtitleOne, SubtitleTwo } from '@/components/ui/core/text'
import Image from 'next/image'
import { whyChooseUsData } from './WhyChooseUs.data'
import EcommerceBookIcon from '/public/images/icons/ecommerce-book.svg'
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
      <div className="relative">
        <Image src={SpecialFeaturesMobile} alt="Special Features Mobile" />

        {/* Consists everything */}
        <div className="absolute top-[80%] flex flex-col gap-5">
          {/* First */}
          <div className="ml-5 flex max-w-max items-center gap-3 rounded-full bg-white p-[10px] pr-5 shadow-[-20px_20px_30px_0px_rgba(106,106,106,0.10)]">
            <div className="grid h-[38px] w-[38px] place-items-center rounded-full bg-accent-green">
              <Image src={EcommerceBookIcon} alt="ECommerce Book" width={16} height={16} />
            </div>
            <SubtitleOne>60K Student joined</SubtitleOne>
          </div>

          {/* Second */}
          <div className="ml-12 flex max-w-max items-center gap-3 rounded-full bg-white p-[10px] pr-5 shadow-[-20px_20px_30px_0px_rgba(106,106,106,0.10)]">
            <div className="grid h-[38px] w-[38px] place-items-center rounded-full bg-accent-violet">
              <Image src={EcommerceBookIcon} alt="ECommerce Book" width={16} height={16} />
            </div>
            <SubtitleOne>120+ Best Online Course</SubtitleOne>
          </div>

          {/* Third */}
          <div className="ml-12 flex max-w-max items-center gap-3 rounded-full bg-white p-[10px] pr-5 shadow-[-20px_20px_30px_0px_rgba(106,106,106,0.10)]">
            <div className="grid h-[38px] w-[38px] place-items-center rounded-full bg-brand-one">
              <Image src={EcommerceBookIcon} alt="ECommerce Book" width={16} height={16} />
            </div>
            <SubtitleOne>60+ Brands Companions</SubtitleOne>
          </div>

          {/* Fourth */}
          <div className="ml-5 flex max-w-max items-center gap-3 rounded-full bg-white p-[10px] pr-5 shadow-[-20px_20px_30px_0px_rgba(106,106,106,0.10)]">
            <div className="grid h-[38px] w-[38px] place-items-center rounded-full bg-accent-yellow">
              <Image src={EcommerceBookIcon} alt="ECommerce Book" width={16} height={16} />
            </div>
            <SubtitleOne>102+ Experienced Teachers</SubtitleOne>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
