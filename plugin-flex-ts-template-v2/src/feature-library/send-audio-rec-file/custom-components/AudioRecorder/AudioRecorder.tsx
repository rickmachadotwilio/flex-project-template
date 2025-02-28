import React from 'react';
import { IconButton } from '@twilio/flex-ui';

import AudioRecorderPanel from '../AudioRecorderPanel';

interface AudioRecorderState {
  showRecorder: boolean;
}

export interface OwnProps {
  showRecorder: boolean;
}

export type Props = OwnProps;

class AudioRecorder extends React.Component<Props, AudioRecorderState> {
  state = {
    showRecorder: this.props.showRecorder,
  };

  dismiss = () => this.setState({ showRecorder: false });

  openHideRecorder = () => {
    if (this.state.showRecorder === false) {
      this.setState({ showRecorder: true });
    } else {
      this.setState({ showRecorder: false });
    }
  };

  render() {
    return (
      <div className="Twilio-MessageInputActions-default">
        <IconButton icon="Fullscreen" onClick={this.openHideRecorder} />
        <AudioRecorderPanel showRecorder={this.state.showRecorder} />
      </div>
    );
  }
}

export default AudioRecorder;
