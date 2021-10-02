import React from 'react'
import Text from '../Text/Text'
import Image from 'next/image'

const Post = ({ data }) => {
  return (
    <div className="rounded-md  bg-gray-50">
      <div className="p-5 border border-color rounded-top-md">
        <Text variant="body1" color="900">
          @{data.owner.firstName}
          {data.owner.lastName}
        </Text>
        {/*Post*/}
        <div className="mt-1">
          <Text variant="body2">{data.text}</Text>
        </div>
      </div>
      <div className="profile_bg_image ">
        <Image
          className="rounded-bottom-md"
          layout="intrinsic"
          objectFit="cover"
          height="300"
          width="560"
          src={data.image}
          alt={data.owner.firstName}
        />
      </div>
    </div>
  )
}

export default Post
