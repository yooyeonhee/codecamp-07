import { Component } from "react";

export default class classCounterPage extends Component {
  state = {
    count: 0,
  };

  onClickCounter = () => {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <div>현재 카운트 : {this.state.count}</div>
        <button onClick={this.onClickCounter}>카운트 올리기</button>
        {/* <button onclick= {this.onClickCounter.bind(this)} */}
      </div>
    );
  }
}
