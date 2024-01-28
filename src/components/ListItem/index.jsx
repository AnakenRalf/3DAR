import React from 'react'
import { Tag } from '../Tag'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const ListItem = ({
  id,
  imgSrc,
  imgAlt,
  title,
  tags,
  slug,
  dateOfPublication,
  description,
  ...restProps
}) => {
  console.log(imgSrc, imgAlt)

  return (
    <div className="flex md:flex-col gap-6 justify-start md:w-full">
      <Link to={slug}>
        <img
          id={id}
          className="w-40 h-40 object-cover md:h-[300px] md:w-full"
          src={imgSrc}
          alt="yy"
        />
      </Link>

      <div className="flex flex-col ">
        <p
          className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
          size="txtInterRegular24"
        >
          <Link to={slug}>{title}</Link>
        </p>
        <div className="flex flex-row gap-[9px] items-start justify-start mt-[17px]  md:w-full">
          {tags.map((tag, index) => (
            <p key={index} className="text-[9px]">
              {tag}
            </p>
          ))}
        </div>
        <p
          className="mt-[5px] text-[8px] text-black-900_01"
          size="txtInterRegular8"
        >
          Date: {dateOfPublication}
        </p>
        <p
          className="mt-3.5 text-base text-black-900_01 w-full"
          size="txtInterRegular16"
        >
          {description}
        </p>
      </div>
    </div>
  )
}

export { ListItem }
