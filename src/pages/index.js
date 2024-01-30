import * as React from 'react'

import Layout from '../components/layout/layout'
import Seo from '../components/seo/seo'
import './styles/tailwind.css'
import styled from 'styled-components'

const paragraphStyles = {
  marginBottom: 48,
}

const ContentContainerStyle = styled.div`
  background-color: #f8f8f8;
  margin: 0 auto;
  max-width: 1200px;
  height: 35vh;
  padding: 1rem 1.0875rem 1.45rem;
  padding-top: 0;
  color: #022;
`
const HeaderStyle = styled.h1`
  font-weight: bold;
  font-size: 2.2rem;
  padding: 1rem;
  text-indent: 30px;
  text-align: center;
`

const IndexPage = () => {
  return (
    <Layout>
      <ContentContainerStyle>
        <HeaderStyle>
          Welcome to my blog about Unreal Engine 5 <br />
          Architecure Vizualization
        </HeaderStyle>
        <p style={paragraphStyles}>Let's make this! 2 </p>
      </ContentContainerStyle>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home 3DAR" />
