import React from 'react'
import Layout from '../components/layout/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/layout/seo'

const AboutPage = () => (
  <Layout pageTitle="About Me">
    <p>This is the about page</p>
    <StaticImage
      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
      src="../images/Forest-sample.png"
    />
  </Layout>
)

export const Head = () => (
  <>
    <Seo title="About Me" />
  </>
)

export default AboutPage
