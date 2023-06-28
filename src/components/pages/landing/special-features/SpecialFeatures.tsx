import { BodyTwo, Caption, HeadingTwo, SubtitleTwo } from '@/components/ui/core/text'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { specialFeaturesData } from './SpecialFeatures.data'
import BookImage from '/public/images/icons/book.svg'
const SpecialFeatures = () => {
  return (
    <section className="bg-grey-background pb-[70px]">
      <div className="container">
        <HeadingTwo className="mb-2 text-center">Our Special Features For You</HeadingTwo>
        <BodyTwo className="mb-8 text-center text-text-one">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
          dolore magna aliquam erat volutpat.
        </BodyTwo>

        <div className="grid grid-cols-2 gap-4">
          {specialFeaturesData.map((data) => (
            <div
              className={cn('rounded-[10px] bg-white px-2 py-4 text-center')}
              style={{ boxShadow: '0px 2.4px 30px 0px rgba(79, 115, 141, 0.06)' }}
              key={data.id}
            >
              <div
                className={cn(
                  'mx-auto mb-3 flex h-12 w-12  items-center justify-center rounded-md',
                  data.backgroundColor,
                )}
              >
                <Image src={BookImage} alt="Book" />
              </div>
              <SubtitleTwo className="mb-1">{data.title}</SubtitleTwo>
              <Caption>{data.description}</Caption>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SpecialFeatures
