import Image from 'next/image'
import React from 'react'
import Tag from './tag'

const NovelCard = () => {
  return (
        <section className='w-[400px] max-w-[400px] border inline-block'>
          <div className='flex gap-2 w-full'>
            <div className='relative min-w-[90px] h-[120px] overflow-hidden'> 
              <Image src="https://book-pic.webnovel.com/bookcover/12820870105509205?imageMogr2/thumbnail/150&imageId=1706269756581" alt="Book" fill className='rounded hover:scale-110 transition-transform'/>
            </div>

            <div className='flex flex-col justify-between py-2'>
                <Tag/>
                <h2 className='font-bold hover:cursor-pointer hover:underline'>Supreme Mage</h2>
                <p className='text-sm leading-tight pt-1'>Derek McCoy was a man who spent his entire life facing adversity and injustice</p>
                <p className='text-xs'>3015 Chapters</p>
            </div>
          </div>
        </section>
  )
}

export default NovelCard