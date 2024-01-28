import React from 'react'

import { Text } from '../Text'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <footer className="bg-gray-900 md:px-5 w-full py-10">
      <div className="grid grid-cols-3 px-2  m-auto w-[60%]">
        <ul className="flex flex-col gap-3  mb-16 md:w-full">
          <li>
            <a href="#" className="text-sm text-white-A700">
              <Text size="txtInterRegular14">
                <Link to="/">Home</Link>
              </Text>
            </a>
          </li>
          <li>
            <a href="#" className="text-sm text-white-A700">
              <Text size="txtInterRegular14">
                <Link to="/blog">Posts</Link>
              </Text>
            </a>
          </li>
          <li>
            <a href="#" className="text-sm text-white-A700">
              <Text size="txtInterRegular14">
                <Link to="/about">About</Link>
              </Text>
            </a>
          </li>
          <li>
            <a href="#" className="text-sm text-white-A700">
              <Text size="txtInterRegular14">
                <Link to="/links">Links</Link>
              </Text>
            </a>
          </li>
        </ul>
        <div className="col-start-3 col-end-4 flex flex-col  gap-[11px] items-end pt-10">
          <div className="flex flex-row gap-[11px] items-start justify-between ">
            <div className="flex flex-col h-6 items-center justify-start w-6">
              <Link to="https://www.instagram.com/anakenr/">
                <StaticImage
                  className="h-6 w-6"
                  src="../../images/img_bxltwittersvg.svg"
                  alt="bxltwittersvg"
                />
              </Link>
            </div>
            <div className="flex flex-col h-6 items-center justify-start w-6">
              <Link to="https://www.instagram.com/anakenr/">
                <StaticImage
                  className="h-6 w-6"
                  src="../../images/img_bxllinkedinsquaresvg.svg"
                  alt="bxllinkedinsqua"
                />
              </Link>
            </div>
            <Link to="https://www.instagram.com/anakenr/">
              <StaticImage
                className="h-6 w-6"
                src="../../images/img_bxlinstagramsvg.svg"
                alt="bxlinstagramsvg_One"
              />
            </Link>
          </div>
        </div>
        <Text
          className="col-start-2 col-end-3 text-[11px] text-white-A700  md:w-full"
          size="txtInterRegular11"
        >
          (C) 2024 3DAR blog by Ruslan Ausiannikau
        </Text>
      </div>
    </footer>
  )
}

export { Footer }
