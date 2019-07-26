import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SizeChartSlider from '../components/SizeChartSlider'
import BestSellers from '../components/BestSellers'
import FeatureIcon from '../components/FeatureIcon'
import ProductHeroSlider from '../components/ProductHeroSlider';
import TestimonialSlider from '../components/TestimonialSlider';

const ProductList = () => {
  return (
    <div>
      <NavBar />
      <ProductHeroSlider />
      <FeatureIcon />
      <BestSellers />
      <SizeChartSlider />
      <Footer />
    </div>
  )
}

export default ProductList
