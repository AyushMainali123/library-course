import { BodyTwo, HeadingSix, HeadingTwo } from '@/components/ui/core/text'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import ExcitedMan from 'public/images/landing/excited-man.png'
import { stepDatas } from './Steps.data'
const LearningSteps = () => {
  return (
    <section className="container bg-white pb-[56px] pt-[50px]">
      <HeadingTwo className="mb-2 text-center">Learning Steps For You</HeadingTwo>
      <BodyTwo className="text-center">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
        dolore magna aliquam erat volutpat.
      </BodyTwo>
      <div>
        <Image src={ExcitedMan} alt="Excited Man" />
      </div>
      <div className="gap mt-7 flex flex-col gap-7">
        {stepDatas.map((step) => (
          <div className="flex items-center gap-8" key={step.id}>
            <div
              className={cn('grid min-h-[60px] min-w-[60px] place-content-center rounded-full', step.bgColor)}
              aria-hidden="true"
            >
              <Image src={step.icon} alt={`${step.title}`} />
            </div>
            <div>
              <HeadingSix className="mb-1">{step.title}</HeadingSix>
              <BodyTwo>{step.description}</BodyTwo>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default LearningSteps
