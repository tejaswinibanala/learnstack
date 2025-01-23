import React from 'react'
import { Hero } from './components/Hero';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { useTitle } from '../../hooks/useTitle';
export const HomePage = () => {

  useTitle("Explore latest Computer Science EBooks")
  return (
    <main>
        <Hero />
        <FeaturedProducts />
        <Testimonials />
        <Faq />
    </main>
  )
}
