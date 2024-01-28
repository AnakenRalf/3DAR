import React from 'react'

import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <footer className="bg-gray-900 md:px-5 w-full py-10">
      <div className="grid grid-cols-3 px-2  m-auto w-[60%]">
        <ul className="font-Inter flex flex-col gap-3  text-sm text-white-A700">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Posts</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/links">Links</Link>
          </li>
        </ul>

        <div className="col-start-3 col-end-4 flex flex-col  gap-[11px] items-end pt-10">
          <div className="flex flex-row gap-[11px] items-start justify-between ">
            <div className="flex flex-col h-6 items-center justify-start w-6">
              <a href="https://www.instagram.com/anakenr/">
                <StaticImage
                  className="h-6 w-6"
                  src="../../images/img_bxltwittersvg.svg"
                  alt="bxltwittersvg"
                />
              </a>
            </div>
            <div className="flex flex-col h-6 items-center justify-start w-6">
              <a href="https://www.instagram.com/anakenr/">
                <StaticImage
                  className="h-6 w-6"
                  src="../../images/img_bxllinkedinsquaresvg.svg"
                  alt="bxllinkedinsqua"
                />
              </a>
            </div>
            <a href="https://www.instagram.com/anakenr/">
              <StaticImage
                className="h-6 w-6"
                src="../../images/img_bxlinstagramsvg.svg"
                alt="bxlinstagramsvg_One"
              />
            </a>
          </div>
        </div>
        <p
          className="col-start-2 col-end-3 text-[11px] text-white-A700  md:w-full"
          size="txtInterRegular11"
        >
          (C) 2024 3DAR blog by Ruslan Ausiannikau.
          <br /> Powered by Gatsby.
        </p>
      </div>
    </footer>
  )
}

export { Footer }
