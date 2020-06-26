import React from "react";
import PropTypes from "prop-types";

export default class Counter extends React.Component {

  static propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    asyncIncrement: PropTypes.func.isRequired
  }

  add = () => {
    let number = this.select.value * 1
    this.props.increment(number)
  }

  minus = () => {
    let number = this.select.value * 1
    let { count } = this.props
    if (count > 0) {
      this.props.decrement(number)
    }
  }

  addIfOdd = () => {
    let number = this.select.value * 1
    let { count } = this.props
    if (count % 2 !== 0) {
      this.props.increment(number)
    }
  }

  addAsync = () => {
    let number = this.select.value * 1
    this.props.asyncIncrement(number)
  }

  render() {
    let { count } = this.props
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