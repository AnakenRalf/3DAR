import React from 'react'

const sizeClasses = {
  txtInterBold40: 'font-bold font-inter',
  txtInterRegular10WhiteA700: 'font-inter font-normal',
  txtInterRegular32: 'font-inter font-normal',
  txtInterRegular10: 'font-inter font-normal',
  txtInterRegular11: 'font-inter font-normal',
  txtInterRegular12: 'font-inter font-normal',
  txtInterRegular24: 'font-inter font-normal',
  txtInterRegular8: 'font-inter font-normal',
  txtInterRegular14: 'font-inter font-normal',
  txtInterRegular16: 'font-inter font-normal',
}

const Text = ({ children, className = '', size, as, ...restProps }) => {
  const Component = as || 'p'

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  )
}

export { Text }
