import { Component, PropsWithChildren } from "react";
import { View } from "@tarojs/components";
import "./app.scss";

type IProps = {};

class App extends Component<PropsWithChildren<IProps>> {
  componentDidMount() {}

  componentDidShow () {}

  componentDidHide () {}

  render() {
    return <View>{this.props.children}</View>;
  }
}

export default App;
