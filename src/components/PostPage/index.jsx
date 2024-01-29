import React from 'react'
import { StyledFrame } from './postpage.styles'
import { Tag } from '../Tag'
import { StaticImage } from 'gatsby-plugin-image'

const PostPage = ({ data, children }) => {
  console.log(data.mdx.frontmatter.tags)
  return (
    <>
      <div className="bg-[#f8f8f8] mt-[-30px]">
        <StyledFrame>
          <div className="postcontentbackground">
            <div className="div">
              <h1 className="text-wrapper">{data.mdx.frontmatter.title}</h1>
              <div className="div-2">
                <div className="group">
                  {data.mdx.frontmatter.tags.map((tag) => {
                    return (
                      <div
                        key={tag}
                        className="tag bg-blue_gray-900 text-white-A700 rounded-[9px] px-2"
                      >
                        <p className="tagtext">{tag}</p>
                      </div>
                    )
                  })}
                </div>
                <div className="text-wrapper-3">
                  Date: {data.mdx.frontmatter.date}
                </div>
              </div>
            </div>
            <img
              className="rectangle"
              alt={data.mdx.frontmatter.altTextCoverImage}
              src={`../../images/${data.mdx.frontmatter.coverimage}`}
            />
          </div>
        </StyledFrame>
      </div>
      <div className="contentent-wrapperbg-white-A700 w-[90%] mx-auto p-5">
        {children}
      </div>
    </>
  )
}

export { PostPage }
