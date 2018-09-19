import React, { Component } from 'react';

class AddJoke extends Component {
  state = {
    title: this.props.joke ? this.props.joke.title : "",
    description: this.props.joke ? this.props.joke.description : "",
    error: ""
  };

  onTitleChange = event => {
    const title = event.target.value;
    this.setState(() => ({ title }));
  };

  onDescriptionChange = event => {
    const description = event.target.value;
    this.setState(() => ({ description }));
  };

  onSubmit = event => {
    event.preventDefault();
    // if(!this.state.title || !this.state.description) {
    //   this.setState(() => ({error: 'Please provide title and description'}))
    // } else {
    // this.setState(() => ({error: ''}));
    console.log("this.state.title", this.state.title);

    this.props.onSubmit({
      title: this.state.title,
      description: this.state.description
    });
    // }
  };

  render() {
    // { console.log("this.props.jokes", this.props.jokes);}
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Title"
            autoFocus
            onChange={this.onTitleChange}
          />
          <input
            type="text"
            placeholder="Description"
            onChange={this.onDescriptionChange}
          />
          <button>Add Joke</button>
        </form>
      </div>
    );
  }
}



export default AddJoke;