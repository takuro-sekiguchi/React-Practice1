import React from 'react';
import './Button.css';


// const Button = (props) => {
//   return (
//   <div className="Button">
//     {props.name}
//   </div>
//   );
// };

class Button extends React.Component{
  render(){
    return(
      <span className="Button">
        {this.props.children}
      </span>
    );
  };
}

export default Button;