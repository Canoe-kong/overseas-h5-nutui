import { Component, PropsWithChildren } from 'react'
import './app.less'
import { ConfigProvider } from "@nutui/nutui-react-taro";
import en from "@nutui/nutui-react-taro/dist/locales/en-US";

class App extends Component<PropsWithChildren> {
  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }
  render() {
    const { children } = this.props
    return (<ConfigProvider locale={en}>{children}</ConfigProvider>)
  }
}
export default App
