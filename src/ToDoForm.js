import React, { Component } from 'react';

class ToDoForm {
  constructor {
    super(props);
    this.state = {
      title: '';
      description: ''
    }
  this.handleSubmit = this.bind.handleSubmit();
  this.handleChange = this.bind.handleChange();
  this.handleDesc = this.bind.handleDesc();
  }


  handleSubmit(event) {
    this.setstate({title: ''}, {description: ''});
    alert('Submitted!');
  }

  handleChange(event) {
    this.setState({title: this.event.target.title});
  }

  handleDesc(event) {
    this.setState({description: this.event.target.description});

  }

  render() {
    return (
      <form className="ToDoForm" onSubmit={this.bind.handleSubmit}>
        <div>
          <label>Title
            <input type="text" name="title" value={this.state.title} onChange={this.bind.handleChange}/>
          </label>
        </div>
        <div>
          <label>Description
            <input type="text" name="desription" value={this.state.description} onChange={this.bind.handleDesc}/>
          </label>
        </div>
        <div>
          <input type="submit" value="Submit"/>
        </div>

      </form>

    );
  }


}
