import cn from 'classnames'
import React from 'react'

const variantsMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h6: 'h6',
  body1: 'p',
  body2: 'p',
}

const Text = ({ variant, color, transform, children }) => {
  const Component = variant ? variantsMap[variant] : 'div'
  return (
    <Component
      className={cn({
        ['text_h1']: variant === 'h1',
        ['text_h2']: variant === 'h2',
        ['text_h3']: variant === 'h3',
        ['text_h6']: variant === 'h6',
        ['body1']: variant === 'body1',
        ['body2']: variant === 'body2',
        ['color-gray-500']: color === '500',
        ['color-gray-900']: color === '900',
        ['capitalize']: transform === 'capitalize',
        ['uppercase']: transform === 'uppercase',
      })}
    >
      {children}
    </Component>
  )
}

export default Text
