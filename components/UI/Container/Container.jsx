import React from 'react'
import cn from 'classnames'

const Container = ({ children, variant }) => {
  return (
    <div
      className={cn(
        'root_container',
        variant === 'lg' ? 'max-w-5xl' : 'max-w-7xl'
      )}
    >
      {children}
    </div>
  )
}

export default Container
