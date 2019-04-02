import { connect } from "react-redux";
import { setSpecialText } from "../actions";
import SpecialTextBox from "../components/SpecialTextBox";

const mapDispatchToProps = dispatch => {
  return {
    set: text => {
      dispatch(setSpecialText(text));
    }
  };
};

const SpecialTextBoxContainer = connect(
  null,
  mapDispatchToProps
)(SpecialTextBox);
export default SpecialTextBoxContainer;
