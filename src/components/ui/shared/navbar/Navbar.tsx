import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdShoppingCart } from 'react-icons/md'
import { Button } from '../../core/button'
import LogoImage from '/public/logo-white.svg'
const Navbar = () => {
  return (
    <nav className="bg-brand-two py-5">
      <div className="container flex items-center justify-between">
        <div>
          <Image src={LogoImage} alt="Library Source Logo" priority />
        </div>
        <div className="flex items-center gap-4">
          <Button
            aria-label="Cart"
            variant="ghost"
            size={'icon'}
            className="rounded-full bg-white/5 text-white hover:bg-white/10"
          >
            <MdShoppingCart className="w-4" />
          </Button>
          <Button
            aria-label="Menu"
            variant="ghost"
            size={'icon'}
            className="rounded-full bg-white/5 text-white hover:bg-white/10"
          >
            <GiHamburgerMenu className="w-4" />
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
