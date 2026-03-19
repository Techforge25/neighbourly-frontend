import Card from '@/components/Card'
import LocalRecommendation from '@/components/Discover/LocalRecommendation'
import Banner from '@/components/SuberbSearch/Banner'
import TabBar from '@/components/TabBar'
import UseFull from '@/components/UseFull'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
      <Banner/>
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
      <LocalRecommendation/>
      <UseFull />
    </div>
  )
}

export default page