import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import { Navigation } from '../Navigation'
import { Text } from '../Text'
import { StaticImage } from 'gatsby-plugin-image'
import { Footer } from '../Footer'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="bg-blue_gray-800 flex flex-col font-inter gap-10 items-center justify-start mx-auto w-full">
        <div id="header" className="h-[423px] mx-auto w-full">
          <StaticImage
            className="h-[423px] m-auto object-cover w-full"
            src="../../images/cozy-place-wide.png"
            alt="rectangleOne"
          />
          <header className="absolute flex flex-col inset-x-[0] items-center justify-center mx-auto top-[5%] w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
              <div className="header-row mb-[22px]">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-gray-200"
                  size="txtInterBold40"
                >
                  <Link to="/">3DAR</Link>
                </Text>
                <div className="mobileMenu hidden md:flex-col">
                  <div>9</div>
                  <div>2</div>
                  <div>3</div>
                </div>
              </div>

              <Navigation />
            </div>
          </header>
        </div>
        <main className=" w-[60%] mt-[-90px] z-10 md:flex-col">
          <h1>{pageTitle}</h1>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
