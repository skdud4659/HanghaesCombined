import React from 'react';
import styled from 'styled-components';

import {Text} from '../elements';

const Input = (props) => {
  const {width, padding, height, border, size, margin, label, value, placeholder, _onChange, type, need_value, multiline} = props

  const styles = {
    padding:padding,
    width:width,
    margin:margin,
    height:height,
    border:border,
    size:size
  }

  if(need_value) {
    return (
      <React.Fragment>
      <Text>{label}</Text>
      <InputBox {...styles} placeholder={placeholder} type={type} onChange={_onChange} value={value}/>
      </React.Fragment>
    )
  }

  if(multiline) {
    return (
      <React.Fragment>
      <Text>{label}</Text>
      <TextArea {...styles} placeholder={placeholder} type={type} onChange={_onChange}/>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <Text>{label}</Text>
      <InputBox {...styles} placeholder={placeholder} type={type} onChange={_onChange}/>
      </React.Fragment>
  )


}

Input.defaultProps = {
  width: "100%",
  padding: false,
  height : "100%",
  border : false,
  size : "14px",
  margin : false,
  
  label : "",
  value : "",
  placeholder : "",
  _onChange : () => {},
  type : "text",
  need_value : false,
  multiline :false,
}

const InputBox = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  font-size: ${(props) => props.size};;
  margin: ${(props) => props.margin};
  //css 만들면 focus 조절
`; 

const TextArea = styled.textarea`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  resize: none;
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  font-size: ${(props) => props.size};;
  margin: ${(props) => props.margin};
  //css 만들면 focus 조절
`; 