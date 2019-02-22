import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super();
    this.state = {
      name:'',
      value:''
    };
    this.props=props;
  }
  onChange = (e) => {
      this.setState({name:e.target.name,value: e.target.value },
                    ()=> this.props.setValues(this.state.name,this.state.value));
  }

  render() {
    return (
    <div className="Input">
        <input  id={this.props.name}
                name={this.props.name}
                required type={this.props.type}
                placeholder={this.props.placeholder}
                onChange={this.onChange}
                />
              <label htmlFor={this.props.name}></label>
    </div>
  )};

};
export default Input;
