import { cn } from '@/lib/utils'
import { forwardRef, HTMLAttributes } from 'react'

export const headingOneClassName =
  'font-sfPro text-[44px] font-semibold leading-[52px] text-text-one lg:text-7xl lg:leading-[88px]'

export const HeadingOne = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ children, className, ...rest }, ref) => {
    return (
      <h1 className={cn(headingOneClassName, className)} {...rest} ref={ref}>
        {children}
      </h1>
    )
  },
)

HeadingOne.displayName = 'Heading One'

export const headingTwoClassName =
  'font-sfPro text-[32px] font-heavy leading-[42px] text-text-one lg:text-5xl lg:leading-[58px]'

export const HeadingTwo = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ children, className, ...rest }, ref) => {
    return (
      <h2 className={cn(headingTwoClassName, className)} {...rest} ref={ref}>
        {children}
      </h2>
    )
  },
)

HeadingTwo.displayName = 'Heading Two'

export const headingThreeClassName =
  'font-sfPro text-2xl font-heavy leading-9 text-text-one lg:text-[32px] lg:leading-[48px]'

export const HeadingThree = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ children, className, ...rest }, ref) => {
    return (
      <h3 className={cn(headingThreeClassName, className)} {...rest} ref={ref}>
        {children}
      </h3>
    )
  },
)

HeadingThree.displayName = 'Heading Three'

export const headingFourClassName = 'font-sfPro text-[22px] font-bold leading-8 text-text-one lg:text-2xl lg:leading-9'

export const HeadingFour = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ children, className, ...rest }, ref) => {
    return (
      <h4 className={cn(headingFourClassName, className)} {...rest} ref={ref}>
        {children}
      </h4>
    )
  },
)

HeadingFour.displayName = 'Heading Four'

export const headingFiveClassName = 'font-sfPro text-xl font-bold leading-[30px] text-text-one'

export const HeadingFive = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ children, className, ...rest }, ref) => {
    return (
      <h5 className={cn(headingFiveClassName, className)} {...rest} ref={ref}>
        {children}
      </h5>
    )
  },
)

HeadingFive.displayName = 'Heading Five'

export const headingSixClassName = 'font-sfPro text-lg font-bold leading-[28px] text-text-one'

export const HeadingSix = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ children, className, ...rest }, ref) => {
    return (
      <h6 className={cn(headingSixClassName, className)} {...rest} ref={ref}>
        {children}
      </h6>
    )
  },
)

HeadingSix.displayName = 'Heading Six'

export const subtitleOneClassName = 'font-sfPro text-base font-bold leading-[24px] text-text-one'

export const SubtitleOne = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ children, className, ...rest }, ref) => {
    return (
      <h6 className={cn(subtitleOneClassName, className)} {...rest} ref={ref}>
        {children}
      </h6>
    )
  },
)

SubtitleOne.displayName = 'Subtitle One'

export const subtitleTwoClassName = 'font-sfPro text-sm font-semibold leading-[21px] text-text-one'

export const SubtitleTwo = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ children, className, ...rest }, ref) => {
    return (
      <h6 className={cn(subtitleTwoClassName, className)} {...rest} ref={ref}>
        {children}
      </h6>
    )
  },
)

SubtitleTwo.displayName = 'Subtitle Two'

export const bodyOneClassName = 'font-sfPro text-base leading-[24px] text-text-one'

export const BodyOne = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ children, className, ...rest }, ref) => {
    return (
      <p className={cn(bodyOneClassName, className)} {...rest} ref={ref}>
        {children}
      </p>
    )
  },
)

BodyOne.displayName = 'Body One'

export const bodyTwoClassName = 'font-sfPro text-sm leading-[21px] text-text-one'

export const BodyTwo = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ children, className, ...rest }, ref) => {
    return (
      <p className={cn(bodyTwoClassName, className)} {...rest} ref={ref}>
        {children}
      </p>
    )
  },
)

BodyTwo.displayName = 'Body Two'

export const captionClassName = 'font-sfPro text-xs leading-[16px] text-text-one'

export const Caption = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ children, className, ...rest }, ref) => {
    return (
      <p className={cn(captionClassName, className)} {...rest} ref={ref}>
        {children}
      </p>
    )
  },
)

Caption.displayName = 'Caption'
