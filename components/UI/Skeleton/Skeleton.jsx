import React from 'react'
import cn from 'classnames'

const Skeleton = ({ variant }) => {
  return (
    <div
      className={cn('root_skeleton', {
        ['root_avatar']: variant === 'avatar',
        ['root_text_skeleton']: variant === 'text',
        ['root_card']: variant === 'card',
        ['root_button_skeleton']: variant === 'button',
      })}
    ></div>
  )
}

export default Skeleton
