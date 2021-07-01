import React, { Component } from 'react'

import { theme } from '../styles/theme'
import Content from './content'
import Header from './header'
import Banner from './banner'
import Button from './button'
import Footer from './footer'

class Index extends Component {
  render () {
    return (
      <>
        <Header />
        <Banner>
          <Button textColor={theme.colors.softPink}>
            view our work
          </Button>
        </Banner>
        <Content />
        <Footer />
      </>
    )
  }
}

export default Index
