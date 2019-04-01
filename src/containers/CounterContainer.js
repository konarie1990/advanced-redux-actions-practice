import { connect } from "react-redux";
import Counter from "../components/Counter";

function mapStateToProps(state) {
  return {
    count: state.currenCount
  };
}

export default connect(
  mapStateToProps,
  null
)(Counter);
