import React from 'react'
import Layout from '../components/layout/layout'
import { StaticImage } from 'gatsby-plugin-image'

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
    <title>About Me</title>
    <meta name="description" content="My description" />
  </>
)

export default AboutPage
