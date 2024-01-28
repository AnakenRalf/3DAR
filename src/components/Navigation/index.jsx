import React from 'react'
import { Button } from '../Button'
import { Img } from '../Img/'
import { Text } from '../Text'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Navigation = () => {
  return (
    <div className="navigationBox flex justify-between ">
      <div className="flex md:flex-21 flex-col gap-[15px] sm:hidden items-end justify-end md:ml-[0]  ml-[675px] md:mt-0 mt-1.5 w-[40%]">
        <div className="flex flex-row gap-[25px] justify-between w-full">
          <Button className="cursor-pointer font-bold sm:hidden leading-[normal] min-w-[82px]  text-center text-sm">
            <Link to="/">Home</Link>
          </Button>

          <Button className="cursor-pointer font-bold leading-[normal] min-w-[82px] text-center text-sm">
            <Link to="/blog">Posts</Link>
          </Button>
          <Button className="cursor-pointer font-bold leading-[normal] min-w-[82px] text-center text-sm">
            <Link to="/about">About</Link>
          </Button>
        </div>
        <Link to="https://www.instagram.com/anakenr/">
          <StaticImage
            className="h-6 w-6 "
            src="../../images/img_bxlinstagramsvg.svg"
            alt="Instagram navigation link"
          />
        </Link>
      </div>
    </div>
  )
}

export { Navigation }
