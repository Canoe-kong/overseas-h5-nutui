import { Component, PropsWithChildren } from 'react';
import './app.less';
import { ConfigProvider } from '@nutui/nutui-react-taro';
import zhCN from '@nutui/nutui-react-taro/dist/locales/zh-CN';
import './assets/styles/global.less';
class App extends Component<PropsWithChildren> {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  /**v3.5及以上支持 React 渲染流程之外的 JS 错误都能被其监听到；当渲染错误没有被开发者设置的错误边界捕获时，渲染报错都可以被监听到。 */
  onError(error) {
    console.log('==================Error==================', error);
  }
  render() {
    const { children } = this.props;
    return <ConfigProvider locale={zhCN}>{children}</ConfigProvider>;
  }
}
export default App;
