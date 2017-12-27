import React, { Component } from 'react';

class AxeSharpness extends Component {
  constructor(props) {
    super(props);
    this.state = { axeSharpnessUnlocked: false };
  }

  render() {

    var axeSharpnessSentence = <span>If I had <a onClick={this.props.sharpenAxe}>a Sharper Axe,</a> I could chop faster.</span>;
    if (this.props.numberPeople > 1) {
      axeSharpnessSentence = (<span>If we had <a onClick={this.props.sharpenAxe}>Sharper Axes</a>, we could chop faster.</span>);
    }

    if (this.state.axeSharpnessUnlocked === false) {
      axeSharpnessSentence = "";
    }

    if (this.props.woodCount >= 15 && this.state.axeSharpnessUnlocked === false) {
      this.setState({
        axeSharpnessUnlocked: true
      });
    }

    return (
      <span className="AxeSharpness">
        {axeSharpnessSentence}
      </span>
    );
  }
}

export default AxeSharpness;
