'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/core/avatar'
import { Button } from '@/components/ui/core/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/core/card'
import { BodyTwo, SubtitleTwo, subtitleOneClassName } from '@/components/ui/core/text'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Rating from '../../rating'
import EcommerceBookIcon from '/public/images/icons/ecommerce-book.svg'
import ECommerceDummyCard from '/public/images/shared/dummy/ecommerce-dummy-card.jpg'

interface IECommerceCardProps {
  containerClassName?: string
}

const EcommerceCard = ({ containerClassName }: IECommerceCardProps) => {
  return (
    <Card
      className={cn(
        'overflow-hidden rounded-2xl shadow-[0px_3.7px_46px_0px_rgba(79,115,141,0.06)]',
        containerClassName,
      )}
    >
      <CardHeader className="relative mb-[18px] h-48 p-0">
        <Image src={ECommerceDummyCard} alt="ECommerce Dummy" fill />
      </CardHeader>
      <CardContent className="px-5 pb-5">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="grid h-6 w-6 place-items-center rounded-full bg-brand-two">
              <Image src={EcommerceBookIcon} alt="Ecommerce Book" sizes="" />
            </div>
            <BodyTwo>26 Lessons</BodyTwo>
          </div>
          <div>
            <Rating value={3} readOnly className="mr-2 h-4 w-4" />
          </div>
        </div>
        <CardTitle className={cn(subtitleOneClassName, 'text-brand-two')}>
          Graphic Design & Color Painting Essential Skills
        </CardTitle>
      </CardContent>
      <hr className="mx-5 border-text-two/50" />
      <CardFooter className="mt-4 flex items-center justify-between px-5">
        <div className="flex gap-[10px]">
          <Avatar>
            <AvatarImage src={ECommerceDummyCard.src} alt="AYUSH MAINALI" />
            <AvatarFallback>AM</AvatarFallback>
          </Avatar>

          <div className="flex flex-col gap-[2px]">
            <SubtitleTwo className="text-[hsl(222_29%_12%)]">David Novan</SubtitleTwo>
            <BodyTwo className="text-text-one">Teacher</BodyTwo>
          </div>
        </div>

        <Button className="shadow-[0px_9.2px_23px_0px_rgba(234,128,56,0.20)]">Learn more</Button>
      </CardFooter>
    </Card>
  )
}

export default EcommerceCard
