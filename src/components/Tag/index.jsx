import React from 'react'

const sizeClasses = {
  txtInterBold40: 'font-bold font-inter',
  txtInterRegular10WhiteA700: 'font-inter font-normal',
  txtInterRegular8WhiteA500: 'font-inter font-small',
  txtInterRegular32: 'font-inter font-normal',
  txtInterRegular10: 'font-inter font-normal',
  txtInterRegular11: 'font-inter font-normal',
  txtInterRegular12: 'font-inter font-normal',
  txtInterRegular24: 'font-inter font-normal',
  txtInterRegular8: 'font-inter font-normal',
  txtInterRegular14: 'font-inter font-normal',
  txtInterRegular16: 'font-inter font-normal',
}
const Tag = ({
  children,
  className = '',
  size = 'txtInterRegular12',
  textColor = 'text-white-A700',
  color = 'bg-blue_gray-900',
  corners = 'rounded-[9px]',
  textSize = 'text-sm',
  as,
  ...restProps
}) => {
  const Component = as || 'p'
  return (
    <div
      className={`${color} flex flex-col items-center justify-start p-0.5 ${corners}`}
    >
      <Component
        className={`${textColor} ${textSize} px-2 ${className} `}
        {...restProps}
      >
        {children}
      </Component>
    </div>
  )
}

export { Tag }
