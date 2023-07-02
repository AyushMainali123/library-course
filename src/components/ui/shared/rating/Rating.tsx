'use client'
import { InputProps, ReadOnlyProps, SharedProps, Rating as StarRating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { RefAttributes } from 'react'

type IRatingProps = SharedProps & ReadOnlyProps & InputProps & RefAttributes<HTMLDivElement>

const CustomStar = (
  <path d="M6.51823 0.465463C6.73647 0.102823 7.26222 0.102822 7.48046 0.465462L9.29052 3.47316C9.36893 3.60344 9.49681 3.69635 9.64494 3.73066L13.0648 4.5227C13.4771 4.6182 13.6396 5.11821 13.3621 5.43783L11.061 8.08873C10.9613 8.20356 10.9124 8.3539 10.9256 8.50538L11.2291 12.0026C11.2657 12.4242 10.8404 12.7333 10.4506 12.5682L7.21839 11.1988C7.07839 11.1395 6.92031 11.1395 6.78031 11.1988L3.54806 12.5682C3.15834 12.7333 2.733 12.4242 2.7696 12.0026L3.07311 8.50538C3.08626 8.3539 3.03741 8.20356 2.93773 8.08873L0.636581 5.43783C0.359129 5.11821 0.521594 4.6182 0.933926 4.5227L4.35376 3.73066C4.50189 3.69635 4.62977 3.60344 4.70818 3.47316L6.51823 0.465463Z" />
)

const componentItemStyle = {
  itemShapes: CustomStar,
  activeFillColor: 'hsl(40 99% 49%)',
  inactiveFillColor: 'hsl(214 24% 71%)',
}

const Rating = ({ itemStyles, ...rest }: IRatingProps) => {
  return <StarRating itemStyles={itemStyles || componentItemStyle} {...rest} />
}

export default Rating
