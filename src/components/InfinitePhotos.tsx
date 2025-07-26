'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

interface InfinitePhotosProps {
  images: any[]
  rotations: string[]
  captions: string[]
}

export function InfinitePhotos({ images, rotations, captions }: InfinitePhotosProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [hasScrolled, setHasScrolled] = useState(false)
  
  // Create infinite scroll by duplicating images
  const infiniteImages = [...images, ...images, ...images]

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer
      const imageWidth = 176 + 20 // w-44 (176px) + gap-5 (20px)
      
      // Mark that user has scrolled
      if (!hasScrolled) {
        setHasScrolled(true)
      }
      
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
  }, [hasScrolled])

  return (
    <div className="mt-16 sm:mt-20 relative">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent dark:from-zinc-900 z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent dark:from-zinc-900 z-10 pointer-events-none" />
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-5 py-4 px-4 sm:gap-8 sm:px-8 scrollbar-hide"
      >
        {/* Scroll hint - only shows initially */}
        {!hasScrolled && (
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 pointer-events-none">
            <div className="flex items-center space-x-1 text-zinc-400 dark:text-zinc-500 animate-pulse">
              <span className="text-xs">scroll</span>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        )}
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