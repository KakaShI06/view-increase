'use client'

import InputHandler from '@/compoents/InputHandler'
import { useEffect, useState } from 'react'

export default function Home() {
  const [videoUrl, setVideoUrl] = useState<string>('')
  const [embeddedUrl, setEmbeddedUrl] = useState<string>('')

  useEffect(() => {
    if (videoUrl) {
      const videoId = videoUrl.match(/v=([^&]+)/)

      if (videoId && videoId[1]) {
        setEmbeddedUrl(`https://www.youtube.com/embed/${videoId[1]}`)
      }
    }
  }, [videoUrl])

  return (
    <main className='min-h-screen items-center justify-between p-14'>
      <h1 className='w-full text-center md:text-xl text-xl font-extrabold pt-1 pb-1'>
        Youtube Videos View Increaser
      </h1>

      <InputHandler setVideoUrl={setVideoUrl} />
      <p className='text-xs text-center'>Paste your youtube video url</p>

      {embeddedUrl && (
        <div>
          <iframe
            src={embeddedUrl}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          ></iframe>
        </div>
      )}
    </main>
  )
}
