import { Button } from '@/components/ui/core/button'
import { BodyTwo, HeadingTwo, subtitleTwoClassName } from '@/components/ui/core/text'
import EcommerceCard from '@/components/ui/shared/cards/ecommerce'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const PopularCourses = () => {
  return (
    <section className="container bg-grey-background py-12">
      <div className="mb-10">
        <HeadingTwo className="mb-2 text-center">Most Popular Courses</HeadingTwo>
        <BodyTwo className="text-center">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
          dolore magna aliquam erat volutpat.
        </BodyTwo>
      </div>
      <div className="flex flex-col gap-6">
        <EcommerceCard />
        <EcommerceCard />
      </div>
      <Button
        variant={'link'}
        className={cn(subtitleTwoClassName, 'mx-auto mt-3 block max-w-fit text-center text-brand-one')}
        asChild
      >
        <Link href={'/'}>View More</Link>
      </Button>
    </section>
  )
}

export default PopularCourses
