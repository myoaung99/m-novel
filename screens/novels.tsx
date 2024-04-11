import NovelCard from '@/components/novel-card'
import Tag from '@/components/tag'
import Image from 'next/image'
import React from 'react'

const NovelsScreen = () => {
  return (
    <section>
        <div className='grid grid-cols-4'>
            <NovelCard/>
            <NovelCard/>
            <NovelCard/>
            <NovelCard/>
        </div>
    </section>
  )
}

export default NovelsScreen