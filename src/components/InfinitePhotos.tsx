'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import clsx from 'clsx'

interface InfinitePhotosProps {
  images: any[]
  rotations: string[]
  captions: string[]
}

export function InfinitePhotos({ images, rotations, captions }: InfinitePhotosProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  
  // Create infinite scroll by duplicating images
  const infiniteImages = [...images, ...images, ...images]

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer
      const imageWidth = 176 + 20 // w-44 (176px) + gap-5 (20px)
      
      // If scrolled to the end of the middle set, jump to the beginning of the middle set
      if (scrollLeft >= scrollWidth - clientWidth - imageWidth) {
        scrollContainer.scrollLeft = scrollWidth / 3
      }
      // If scrolled to the beginning of the middle set, jump to the end of the middle set
      else if (scrollLeft <= imageWidth) {
        scrollContainer.scrollLeft = scrollWidth / 3 * 2
      }
    }

    scrollContainer.addEventListener('scroll', handleScroll)
    
    // Initialize scroll position to the middle set
    scrollContainer.scrollLeft = scrollContainer.scrollWidth / 3

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="mt-16 sm:mt-20">
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-5 py-4 px-4 sm:gap-8 sm:px-8 scrollbar-hide"
      >
        {infiniteImages.map((image, imageIndex) => (
          <div
            key={`${image.src}-${imageIndex}`}
            className="flex flex-col items-center flex-shrink-0"
          >
            <div
              className={clsx(
                'relative aspect-9/10 w-44 overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
                rotations[imageIndex % rotations.length],
              )}
            >
              <Image
                src={image}
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <p className={clsx(
              'mt-2 text-[0.7rem] text-zinc-400 dark:text-zinc-500 text-center max-w-44 sm:max-w-72',
              rotations[imageIndex % rotations.length],
            )}>
              {captions[imageIndex % captions.length]}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
} 