import { connect } from "react-redux";
import { increaseCounter, decreaseCounter } from "../actions";
import CounterButton from "../components/CounterButton";

const mapDispatchToProps = {
  increase: () => increaseCounter(),
  decrease: () => decreaseCounter()
};

const CounterButtonContainer = connect(
  null,
  mapDispatchToProps
)(CounterButton);

export default CounterButtonContainer;

// mapDispatchToProps - good link to refactor https://dev.to/mcrowder65/you-ve-been-doing-mapdispatchtoprops-wrong-this-entire-time-582m
