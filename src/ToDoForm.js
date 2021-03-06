import React, {Component} from 'react';

class ToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDesc = this.handleDesc.bind(this);
  }

  handleSubmit(event) {
    alert('Submitted!');
    this.setstate({
      title: ''
      }, {description: ''});  
  }

  handleChange(event) {
    this.setState({title: event.target.value});
  }

  handleDesc(event) {
    this.setState({description: event.target.value});

  }

  render() {
    return (<form className="ToDoForm" onSubmit={this.handleSubmit.bind(this)}>
      <div>
        <label>Title
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange.bind(this)}/>
        </label>
      </div>
      <div>
        <label>Description
          <input type="text" name="desription" value={this.state.description} onChange={this.handleDesc.bind(this)}/>
        </label>
      </div>
      <div>
        <input type="submit" value="Submit"/>
      </div>

    </form>);
  }

}

export default ToDoForm;
