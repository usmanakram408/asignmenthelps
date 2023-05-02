import React from 'react'
import Carousel from 'react-grid-carousel'

const Gallery = () => {
  return (
    <Carousel cols={2} rows={1} gap={10} loop>
      <Carousel.Item>
        <img width="100%" src="http://localhost:3000/static/media/download%20(5).87eec36ba53dedd77a65.png" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="50%" src="https://picsum.photos/800/600?random=2" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" src="https://picsum.photos/800/600?random=1" />
      </Carousel.Item>
      <img width="100%" src="https://picsum.photos/800/600?random=1" />
    </Carousel>
  )
}

export default Gallery;