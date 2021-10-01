import React from 'react'
import Image from 'next/image'

const Avatar = ({ src, alt }) => {
  return (
    <div className="root_avatar z-10">
      <Image layout="intrinsic" src={src} alt={alt} width="128" height="128" />
    </div>
  )
}

export default Avatar
