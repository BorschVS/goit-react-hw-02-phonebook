import React, { Component } from 'react';
import './ContactForm.scss';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit, contains } = this.props;
    const { name } = this.state;

    contains(name)
      ? alert(`${name} is already in contacts`)
      : onSubmit(this.state);
  };

  render() {
    return (
      <form className="Form" onSubmit={this.handleSubmit}>
        <label className="Form__label">
          Name
          <input
            className="Form__input"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
        </label>

        <label className="Form__label">
          Number
          <input
            className="Form__input"
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            required
          />
        </label>

        <button className="Form__button" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
