import React from 'react';
import { connect } from 'react-redux';
import { addJoke } from '../../actions/jokes';
import JokeForm from "../JokeForm/JokeForm";


const AddJoke = (props) => {
  console.log("props addJoke", props);
  return (
    <div> 
      <h1>Add Joke</h1>
      <JokeForm 
        
        onSubmit={(joke) => {
          props.dispatch(addJoke(joke));
          // console.log("jokes", jokes);
          props.history.push('/');
          // console.log(props)

        }} />
    </div>
  );
};


export default connect()(AddJoke);