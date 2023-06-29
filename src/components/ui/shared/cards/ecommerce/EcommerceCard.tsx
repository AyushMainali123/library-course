import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/core/card'
import { cn } from '@/lib/utils'

interface IECommerceCardProps {
  containerClassName?: string
}

const EcommerceCard = ({ containerClassName }: IECommerceCardProps) => {
  return (
    <Card className={cn(containerClassName)}>
      <CardHeader>
        <CardTitle>This is a card title</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>This is a card description</CardDescription>
      </CardContent>
      <CardFooter>This is a card footer</CardFooter>
    </Card>
  )
}

export default EcommerceCard
