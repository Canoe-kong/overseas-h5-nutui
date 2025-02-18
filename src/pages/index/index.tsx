import { Component } from "react";
import { Button } from '@nutui/nutui-react-taro'
import './index.module.less'
import CommonButton from "@/components/CommonButton";

class Index extends Component {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  clickHandler() {
    console.log('clickHandler')
  }

  render() {
    return (
      <div className="nutui-react-demo">
        <div className="index">
          欢迎使用 NutUI React 开发 Taro 多端项目。
        </div>
        <div className="index">
          <Button type="primary" className="btn">
            NutUI React Button
          </Button>
          < CommonButton name='Button' onClick={this.clickHandler.bind(this)} />
        </div>
      </div>
    );
  }
}
export default Index
