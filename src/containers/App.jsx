import {connect} from "react-redux"

import Counter from "../components/Counter";
import {increment, decrement, asyncIncrement, addItems} from "../redux/actions"

export default connect(
  state => state,
  {increment, decrement, asyncIncrement, addItems}
)(Counter)