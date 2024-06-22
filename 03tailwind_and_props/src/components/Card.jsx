import React from 'react'
import pic from '../assets/nature_beauty_silhouettes_against_majestic_skies_generative_ai.jpg'

function Card() {
  return (
    <div>
      <img src={pic} alt="" />
      <h1 className='text-2xl bg-green-500 rounded p-3'>Card for photos</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero deleniti dignissimos quas aspernatur molestias consequuntur, id error veritatis sed totam, pariatur quos! Itaque magni ipsa facilis at sapiente quaerat accusamus!</p>
    </div>
  )
}

export default Card
