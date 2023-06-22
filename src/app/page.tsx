import { Button } from '@/components/ui/core/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 font-sfPro">
      <h1>Hello World</h1>
      <Button>Hello From Button</Button>
      <Button variant={'outline'}>Hello From Button</Button>
    </main>
  )
}
