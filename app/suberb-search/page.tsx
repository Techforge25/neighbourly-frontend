import Card from '@/components/Card'
import LocalRecommendation from '@/components/Discover/LocalRecommendation'
import Banner from '@/components/SuberbSearch/Banner'
import TabBar from '@/components/TabBar'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Neighbourly - Suburb Search",
  description: "Discover trusted local services recommended by your neighbors.",
};

const page = () => {
  return (
    <div>
      <Banner />
      <div>
        <Image
          src="/images/suburbmap.png"
          alt="Description of the image"
          width={1200}
          height={1200}
          className='w-full'
        />
      </div>
      <TabBar />
      <Card />
      <LocalRecommendation />
    </div>
  )
}

export default page