import { useState } from 'react'

import PreloaderIcon from '../../assets/images/preloader.svg?react'

export const ImageWithPreloading = ({ alt, image }: ImageWithPreloadingProps) => {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleImageLoad = () => setIsLoaded(true)

  return (
    <>
      {!isLoaded && <PreloaderIcon />}
      <img
        alt={alt}
        onLoad={handleImageLoad}
        src={image}
        style={{ display: isLoaded ? 'block' : 'none' }}
      />
    </>
  )
}

interface ImageWithPreloadingProps {
  alt: string
  image: string
}
