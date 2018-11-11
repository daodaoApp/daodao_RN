import React, { Component } from 'react'
import { Container, Text, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base'
import { navigate } from 'react-navigation'
import { log } from '../../utils/debugTools'
class MainLayout extends Component {
  constructor(props) {
    super(props)

  }
  genFooter() {
    let list = [
      { title: 'demo', screen: 'Demo' },
      { title: '日历', screen: 'Calendar' },
      { title: '汇总', screen: 'Report' },
      { title: '设置', screen: 'Setting' },
      // {title:'demo',screen:'Demo'},
    ]
    let tabs
    const { navigate } = this.props.navigation
    let { routeName: current } = this.props.navigation.state
    // log(JSON.stringify(cur, null, 2))

    if (Array.isArray(list) && list.length > 0) {
      tabs = list.map(item => {
        const { title, screen } = item
        const active = current === screen
        return (
          <Button
            key={title}
            onPress={() => navigate(screen)}
            active={active}
          >
            <Text>{title}</Text>
          </Button>)
      })
    }
    return <Footer>
      <FooterTab>
        {tabs}
      </FooterTab>
    </Footer>
  }
  render() {
    const { navigate } = this.props.navigation
    // const footer = (
    //   <Footer>
    //     {/* <FooterTab></FooterTab> */}
    //     <FooterTab>
    //       <Button vertical onPress={() => { navigate('Demo') }} >
    //         {/* <Icon name="apps" /> */}
    //         <Text> Demo</Text>
    //       </Button>
    //       <Button vertical active>
    //         {/* <Icon name="camera" /> */}
    //         <Text>日历</Text>
    //       </Button>
    //       <Button vertical >
    //         {/* <Icon active name="navigate" /> */}
    //         <Text>汇总</Text>
    //       </Button>
    //       <Button vertical>
    //         {/* <Icon name="person" /> */}
    //         <Text>设置</Text>
    //       </Button>
    //     </FooterTab>
    //   </Footer>
    // )
    const footer = this.genFooter()


    return (
      <Container>
        {/* <Header>
          <Text>{this.props.title}</Text>
        </Header> */}
        <Content>
          {this.props.children}
        </Content>
        {footer}
      </Container>
    )
  }
}
MainLayout.defaultProps = {
  title: 'Header',
  navigation: null,
}

export default MainLayout