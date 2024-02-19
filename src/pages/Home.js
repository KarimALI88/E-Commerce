import React from 'react'
import Header from '../components/Header';
import CategorySlider from '../components/CategorySlider';

function Home() {
  return (
    <div>
      <Header/>
      <CategorySlider category='jewelery'/>    
      <CategorySlider category='electronics'/>
      <CategorySlider category="men's clothing"/>
      <CategorySlider category="women's clothing"/>
    </div>
  )
}

export default Home
