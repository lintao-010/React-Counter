import React from "react";
import { INCREMENT, REDUCTION } from "../redux/action-types";

export default class App extends React.Component {

  add = () => {
    let number = this.select.value * 1
    this.props.store.dispatch({ type: INCREMENT, data: number })
  }

  minus = () => {
    let number = this.select.value * 1
    let {count}  = this.props.store.getState()
    if (count > 0) {
      this.props.store.dispatch({ type: REDUCTION, data: number })
    }
  }

  addIfOdd = () => {
    let number = this.select.value * 1
    let {count}  = this.props.store.getState()
    if (count % 2 !== 0) {
      this.props.store.dispatch({ type: INCREMENT, data: number })
    }
  }

  addAsync = () => {
    setTimeout(this.add, 1000);
  }

  render() {
    let { count } = this.props.store.getState()

    return (
      <div>
        <h2>Click {count} times</h2>
        <select name="click-add-number" ref={select => this.select = select}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button className="btn btn-default" type="button" onClick={this.add}> + </button>
        <button className="btn btn-default" type="button" onClick={this.minus}> - </button>
        <button className="btn btn-default" type="button" onClick={this.addIfOdd}>Increment if odd</button>
        <button className="btn btn-default" type="button" onClick={this.addAsync}>Increment async</button>
      </div>
    )
  }
}