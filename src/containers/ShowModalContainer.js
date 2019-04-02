import { connect } from "react-redux";
import { setIsLoading } from "../actions";
import ShowModal from "../components/ShowModal";

const mapDispatchToProps = dispatch => {
  return {
    setIsLoading: isLoading => {
      dispatch(setIsLoading(isLoading));
    }
  };
};

const ShowModalContainer = connect(
  null,
  mapDispatchToProps
)(ShowModal);
export default ShowModalContainer;
