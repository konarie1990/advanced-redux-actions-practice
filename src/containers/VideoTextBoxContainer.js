import { connect } from "react-redux";
import { setVideoURL } from "../actions";
import VideoTextBox from "../components/VideoTextBox";

const mapDispatchToProps = dispatch => {
  return {
    set: URL => {
      dispatch(setVideoURL(URL));
    }
  };
};

const VideoTextBoxContainer = connect(
  null,
  mapDispatchToProps
)(VideoTextBox);
export default VideoTextBoxContainer;
