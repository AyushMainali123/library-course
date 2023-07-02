import { BodyTwo, HeadingTwo } from '@/components/ui/core/text'
import EcommerceCard from '@/components/ui/shared/cards/ecommerce'

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
      <div className="flex gap-6 flex-col">
      <EcommerceCard />
      <EcommerceCard />
      </div>
    </section>
  )
}

export default PopularCourses
