import React from 'react'
import cn from 'classnames'

const Skeleton = ({ variant }) => {
  return (
    <div
      className={cn('root_skeleton', {
        ['root_avatar']: variant === 'avatar',
        ['root_text']: variant === 'text',
        ['root_card']: variant === 'card',
      })}
    ></div>
  )
}

export default Skeleton
