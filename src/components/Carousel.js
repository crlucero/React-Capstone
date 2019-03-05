import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://sneakernews.com/wp-content/uploads/2019/02/adidas-yeezy-boost-700-inertia-eg7597-official-release-info-1.jpg',
    altText: 'Slide 1',
    caption: 'Release Date: March 9th, 2019',
    header: 'adidas Yeezy Boost 700 “Inertia”'
  },
  {
    src: 'https://sneakernews.com/wp-content/uploads/2019/02/adidas-zx-4000-4d-BD7931-1.jpg',
    altText: 'Slide 2',
    caption: 'Release Date: March 9th, 2019',
    header: 'adidas ZX4000 4D'
  },
  {
    src: 'https://sneakernews.com/wp-content/uploads/2019/03/nike-air-max-plus-white-black-volt-aj2013-100-1.jpg',
    altText: 'Slide 3',
    caption: 'Release Date: April 19th, 2019',
    header: 'Nike Air Max Plus'
  }
];

const Carousel = () => <UncontrolledCarousel className='carousel' items={items} />;

export default Carousel;


