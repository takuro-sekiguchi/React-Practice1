import React from "react";

class Timer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      seconds: this.props.seconds
    };

  const intervalID = setInterval(() => {
    if(this.state.seconds > 0){
      this.setState({
        seconds: this.state.seconds -1
      });
    } else {
      clearInterval(intervalID);
    };
  },1000); 
}

  render(){
    return <div>{this.state.seconds}/{this.props.seconds}</div>
  }
}

export default Timer;
