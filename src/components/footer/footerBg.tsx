import React from 'react'
import tw from 'twin.macro'

const FooterBg: React.FC = () => {
  return (
    // <div sx={{ position: "absolute", zIndex: -10, left: 0, display: "inline-flex"}}>
    // <div tw="relative [z-index: -8] bottom-0">

    // <svg
    //   width="1440"
    //   height="100%"
    //   viewBox="0 0 1440 706"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   tw="relative [z-index: -8] max-sm:hidden"
    // >
    //   <path
    //     fill-rule="evenodd"
    //     clip-rule="evenodd"
    //     d="M183.633 0.928863C100.937 -4.00231 29.9015 59.0383 24.9704 141.734L4.92865 477.834C-0.00252247 560.53 63.0381 631.565 145.734 636.497L1290.43 704.755C1357.91 708.779 1417.64 667.534 1440 607.28V129.725C1414.49 95.2703 1374.47 71.9386 1328.33 69.1872L183.633 0.928863Z"
    //     fill="#DFE2FF"
    //   />
    //   <path
    //     fill-rule="evenodd"
    //     clip-rule="evenodd"
    //     d="M0 581.155C24.4425 617.363 64.4167 642.636 111.328 646.733L789.892 706H1395.66C1420.2 681.851 1436.59 649.179 1439.82 612.195L1440 610.105V162.54C1415.29 130.061 1377.5 107.723 1333.64 103.893L167.635 2.05178C85.1067 -5.1564 12.3607 55.9027 5.15256 138.431L0 197.424V581.155Z"
    //     fill="#172176"
    //   />
    // </svg>

    <svg
      width="100vw"
      height="706"
      viewBox="0 0 1440 706"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      tw="relative [z-index: -8] [width: 100%] [background-size: contain] w-screen bottom-0 
      max-sm:hidden
      md:[margin-bottom: -100px]
      lg:[margin-bottom: -50px]"
    >
      <rect
        width="100%"
        height="50%"
        transform="matrix(1 0 0 -1 0 706)"
        fill="#0D165C"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M183.633 0.928863C100.937 -4.00231 29.9016 59.0383 24.9704 141.734L4.92868 477.834C-0.00249196 560.53 63.0381 631.565 145.734 636.497L1290.43 704.755C1357.91 708.779 1417.64 667.534 1440 607.28V129.725C1414.49 95.2703 1374.47 71.9386 1328.33 69.1872L183.633 0.928863Z"
        fill="#DFE2FF"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 581.155C24.4425 617.363 64.4167 642.636 111.328 646.733L789.892 706H1395.66C1420.2 681.851 1436.59 649.179 1439.82 612.195L1440 610.105V162.54C1415.29 130.061 1377.5 107.723 1333.64 103.893L167.635 2.05178C85.1067 -5.1564 12.3607 55.9027 5.15256 138.431L0 197.424V581.155Z"
        fill="#172176"
      />
    </svg>

    // </div>
  )
}

export default FooterBg
