import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: '',
    }
  }

  onFieldChange = (event) => {
    const updateState = {};

    const fieldName = event.target.name;
    const value = event.target.value;

    updateState[fieldName] = value;
    this.setState(updateState);
  }

  onSubmit = (event) => {
    event.preventDefault();

    this.props.addPoemLineCallback(this.state);
    this.setState({
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: '',
    })
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.props.player}</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.onSubmit}>

          <div className="PlayerSubmissionForm__poem-inputs">

            <input
              name="adj1"
              placeholder="adjective"
              type="text"
              value={this.state.adj1}
              onChange={this.onFieldChange}/>
            <input
              name="noun1"
              placeholder="noun"
              type="text"
              value={this.state.noun1}
              onChange={this.onFieldChange}/>
            <input
              name="adv"
              placeholder="adverb"
              type="text"
              value={this.state.adv}
              onChange={this.onFieldChange}/>
            <input
              name="verb"
              placeholder="verb"
              type="text"
              value={this.state.verb}
              onChange={this.onFieldChange}/>
            <input
              name="adj2"
              placeholder="adjective"
              type="text"
              value={this.state.adj2}
              onChange={this.onFieldChange}/>
            <input
              name="noun2"
              placeholder="noun"
              type="text"
              value={this.state.noun2}
              onChange={this.onFieldChange}/>

          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
  }
}

PlayerSubmissionForm.propTypes = {
  addPoemLineCallback: PropTypes.func.isRequired,
  player: PropTypes.number.isRequired,
}

export default PlayerSubmissionForm;
