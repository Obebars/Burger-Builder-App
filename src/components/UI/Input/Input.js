import React from 'react';

import classes from './Input.css';


const input = (props) => {

  let inputElement= null;
  let inputClasses =[classes.InputElement]

  if(props.invalid && props.notRequired){
    inputClasses.push(classes.invalid)
  }
    switch(props.elementType){
      case('input'):
      inputElement= <input
                        className={inputClasses.join(' ')}
                        {...props.elementConfig}
                        value={props.value}
                        onChange={props.changed}/>;
          break;
      case('textarea'):
      inputElement = <textarea
                        className={inputClasses.join(' ')}
                        {...props.elementConfig}
                        value={props.value}
                        onChange={props.changed}/>;
          break;
      case('select'):
      inputElement = (
                      <select
                          className={inputClasses.join(' ')}
                          value={props.value}
                          onChange={props.changed}>
                        {props.elementConfig.options.map(option =>(
                           <option key={option.value} value={option.value}>
                                      {option.displayValue}
                           </option>
                        ))}
                      </select>
                  /*Having that value attribute on the select tag is important
                  to make two way binding work correctly*/
      );
          break;
      default:
      inputElement = <input
                        className={inputClasses.join(' ')}
                        {...props.elementConfig}
                        value={props.value}
                        onchange={props.changed}/>
    }
    /* To handle the case that we have different attributes for each
    inputElement we expect to get the attributes we want to set on
    an input as props for our input wrapper, this then allows us to
    simply distribute them on the inputElement so that any default
    html attributes we wanna set on our input requires only that we
    set the inputType prop and then pass the normal attributes we would
    pass to that type*/
  return (
    <div className={classes.Input}>
      <label className={classes.Label}>  {props.label}  </label>
        {inputElement}
    </div>
  )


};

export default input;
