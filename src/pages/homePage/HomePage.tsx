import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MainProduct from '../../components/products/mainProduct/MainProduct'
import SimpleSlider from '../../components/slider/Slider'
import { products } from '../../products'
import './homePage.scss'



export default function HomePage() {
  const scroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  return (
    <div className='home'>
        <Header/>
        <div className="home-container">
            <div className="home-slider">
                <SimpleSlider/>
            </div>
            <div className="product-container">
              <div className="product">
                {products.map((p)=>{if(p.status==="aa") 
                return(
                  <MainProduct posts ={p}/>
                )})}
              </div>
              <div className="product">
                {products.map((p)=>{if(p.status==="bb") 
                return(
                  <MainProduct posts ={p}/>
                )})}
              </div>
              <div className="product">
                {products.map((p)=>{if(p.status==="cc") 
                return(
                  <MainProduct posts ={p}/>
                )})}
              </div>
              <div className="product">
                {products.map((p)=>{if(p.status==="dd") 
                return(
                  <MainProduct posts ={p}/>
                )})}
              </div>
              <div className="product">
                {products.map((p)=>{if(p.status==="ee") 
                return(
                  <MainProduct posts ={p}/>
                )})}
              </div>
            
            </div>
        </div>
        <button onClick={scroll} className='gotop-btt'>Back to top</button>
        <Footer/>
    </div>
  )
}
