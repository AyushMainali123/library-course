import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { partnerDatas } from './partners.datas'

const Partners = () => {
  return (
    <section>
      <div className="container">
        <hr />
      </div>
      <div className="py-7">
        <Marquee speed={20}>
          {partnerDatas.map((partner) => (
            <div key={partner.id} className="mx-6 lg:mx-10">
              <Image src={partner.image} alt={partner.title} />
            </div>
          ))}
        </Marquee>
      </div>
      <div className="container">
        <hr />
      </div>
    </section>
  )
}

export default Partners
