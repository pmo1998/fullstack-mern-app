import React from 'react';
const Input=(props)=>{
  return (
      <div className="Input">
          <input  id={props.name}
                  autoComplete="false"
                  required type={props.type}
                  placeholder={props.placeholder} />
          <label htmlFor={props.name}></label>
      </div>
  );
}
export default Input;
