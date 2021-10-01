import React from 'react'
import cn from 'classnames'

const Grid = ({ children, variant }) => {
  return (
    <div className={cn('root_grid', variant === 'gridB' ? 'grid_b' : 'grid_a')}>
      {children}
    </div>
  )
}

export default Grid
