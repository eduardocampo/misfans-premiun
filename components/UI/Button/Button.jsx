import React from 'react'
import cn from 'classnames'

const Button = ({ children, variant, ...props }) => {
  return (
    <button
      {...props}
      className={cn('root_button', {
        ['outline_button']: variant === 'outline',
      })}
    >
      {children}
    </button>
  )
}

export default Button
