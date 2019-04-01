import { connect } from "react-redux";
import LoadingModal from "../components/Modal";

function mapStateToProps(state) {
  return {
    isLoading: state.isLoading
  };
}

export default connect(
  mapStateToProps,
  null
)(LoadingModal);
