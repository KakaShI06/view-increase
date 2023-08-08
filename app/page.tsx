'use client'

import InputHandler from '@/compoents/InputHandler'
import { useEffect, useState } from 'react'

export default function Home() {
  const [videoUrl, setVideoUrl] = useState<string>('')
  const [embeddedUrl, setEmbeddedUrl] = useState<string>('')
  const [numberOfContainer, setNumberOfContainer] = useState(10)

  useEffect(() => {
    if (videoUrl.includes('/shorts/')) {
      const code = videoUrl.split('/shorts/')

      if (code && code[1]) {
        setEmbeddedUrl(`https://www.youtube.com/embed/${code[1]}?autoplay=1`)

        return
      }
    }

    if (videoUrl) {
      const videoId = videoUrl.match(/v=([^&]+)/)

      if (videoId && videoId[1]) {
        setEmbeddedUrl(`https://www.youtube.com/embed/${videoId[1]}?autoplay=1`)
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
        <div className='flex gap-2 flex-wrap pt-5 justify-around md:flex-col lg:flex-row'>
          {Array(numberOfContainer)
            .fill(setNumberOfContainer)
            .map((_, index) => (
              <div key={index} className="max-w-[45%]">
                <iframe
                  width='100%'
                  height='579'
                  src={embeddedUrl}
                  title=''
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  allowFullScreen={false}
                ></iframe>
              </div>
            ))}
        </div>
      )}
    </main>
  )
}
