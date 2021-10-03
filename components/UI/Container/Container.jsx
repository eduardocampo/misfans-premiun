import React from 'react'
import cn from 'classnames'

const Container = ({ children, variant, padding }) => {
  return (
    <div
      className={cn('root_container', {
        ['max-w-5xl']: variant === 'lg',
        ['max-w-7xl']: variant === 'xl',
        ['root_container_p_0']: padding === '0',
      })}
    >
      {children}
    </div>
  )
}

export default Container
