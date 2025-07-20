import React from 'react'
import product from "../assets/image.png"
import { motion, scale } from "motion/react";
export default function Products() {
    const products = [product,product,product,product,product ,product,product,product]
  return (
    <div className='bg-lightBeige shadow-2xl  grid p-5  grid-cols-4 '>
        {products.map((p) => { 
            return <motion.img src={product} alt="products" className='rounded-md ml-5 my-3' whileHover={{scale : 1.03, transition : {duration : 0.3}}}  />
        })
    }
    </div>
  )
}
