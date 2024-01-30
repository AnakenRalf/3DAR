import * as React from 'react'

import Layout from '../components/layout/layout'
import Seo from '../components/seo/seo'
import './styles/tailwind.css'
import { ContentContainerStyle, HeaderStyle } from './index.styles'

const paragraphStyles = {
  marginBottom: 48,
}

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
