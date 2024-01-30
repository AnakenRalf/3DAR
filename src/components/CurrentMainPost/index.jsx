import React from 'react'

import { Link } from 'gatsby'

import { StaticImage } from 'gatsby-plugin-image'

const CurrentMainPost = ({ data }) => {
  const currentData = data.allMdx.nodes[0]

  return (
    <div
      id="main-post"
      className="bg-gray-200_01 border border-solid border-white-A700 flex flex-col xl:flex-col items-center justify-start p-[23px] sm:px-5 w-full md:flex-col"
    >
      <Link to={currentData.frontmatter.slug}>
        <div className="flex flex-row gap-[27px] items-start  my-0.5 w-full md:flex-col ">
          <img
            id="mainPostImage"
            className="h-[340px] md:h-auto  object-cover "
            src={`../../images/${currentData.frontmatter.coverimage}`}
            alt="rectangleEight"
          />

          <div className="flex flex-col gap-4">
            <Link to={currentData.frontmatter.slug}>
              <h1 className="flex md:text-3xl sm:text-[28px] text-[32px] text-black-900_01 w-full">
                {currentData.frontmatter.title}
              </h1>
            </Link>
            <div
              id="tags"
              className="pt-5 flex flex-row gap-4 items-center justify-start  md:w-full"
            >
              {currentData.frontmatter.tags.map((tag) => {
                return <p key={tag}>{tag}</p>
              })}
            </div>
            <p
              className="mt-2 text-[10px] text-black-900_01"
              size="txtInterRegular10"
            >
              Date: {currentData.frontmatter.date}
            </p>
            <p
              className="mt-[21px] text-base text-black-900_01 w-full"
              size="txtInterRegular16"
            >
              {currentData.frontmatter.shortdescription}
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export { CurrentMainPost }
