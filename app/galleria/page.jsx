'use client'

import Homepage from "./Homepage"
import HeroReveal from "./HeroReveal"
import React from 'react'
import { useState, useEffect } from "react"

export default function page() {
  
  const [showGallery, setShowGallery ] = useState(false)
  
  return (
    <div>
      {!showGallery && <HeroReveal onComplete={()=> setShowGallery(true)}/>}
      {showGallery && <Homepage/>}

    </div>
  )
}
