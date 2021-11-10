import React, {Component} from 'react';
import VideoComponent from '../Components/VideoComponent';
class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let item = this.props.route.params.item;
    return <VideoComponent navigation={this.props.navigation} item={item} />;
  }
}

export default Video;
