import { connect } from "react-redux";
import { setVideoScale } from "../actions";
import ScaleVideo from "../components/ScaleVideo";

const mapDispatchToProps = dispatch => {
  return {
    set: scale => {
      dispatch(setVideoScale(scale));
    }
  };
};

const ScaleVideoContainer = connect(
  null,
  mapDispatchToProps
)(ScaleVideo);
export default ScaleVideoContainer;
