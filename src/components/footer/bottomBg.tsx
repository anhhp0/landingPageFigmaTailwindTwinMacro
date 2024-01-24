import React from 'react'
import tw from 'twin.macro'

const BottomBg: React.FC = () => {
  return (
    // <div sx={{ position: "absolute", zIndex: -10, left: 0, display: "inline-flex"}}>
    // <div tw="relative [z-index: -10] [bottom: -706px]">
      <svg
        width="1440"
        height="100%"
        viewBox="0 0 1440 125"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        tw='relative [z-index: -10] left-0 [bottom: -706px]  max-sm:hidden'
      >
        <rect
          width="1440"
          height="125"
          transform="matrix(1 0 0 -1 0 125)"
          fill="#0D165C"
        />
      </svg>
    // </div>
  )
}

export default BottomBg
