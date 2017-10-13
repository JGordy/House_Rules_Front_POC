import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { browserHistory } from 'react-router';

export default class GameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
      objective: '',
      original_rules: '',
      alternate_rules: ''
    }
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleObjectiveChange = this.handleObjectiveChange.bind(this);
    this.handleOriginalRulesChange = this.handleOriginalRulesChange.bind(this);
    this.handleAlternateRulesChange = this.handleAlternateRulesChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value
    })
  }

  handleCategoryChange(event) {
    this.setState({
      category: event.target.value
    })
  }

  handleObjectiveChange(event) {
    this.setState({
      objective: event.target.value
    })
  }

  handleOriginalRulesChange(event) {
    this.setState({
      original_rules: event.target.value
    })
  }

  handleAlternateRulesChange(event) {
    this.setState({
      alternate_rules: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      title: event.target.value,
      category: event.target.value,
      objective: event.target.value,
      original_rules: event.target.value,
      alternate_rules: event.target.value
    })
    let gameItem = JSON.stringify(this.state);

    fetch("https://dry-forest-51238.herokuapp.com/api/game/new",
      {
        method: "POST",
        body: gameItem,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(response => {
      console.log("RESPONSE: ", response);
    }).catch(err => {
      console.log("ERROR: ", err);
    })

    this.setState({
      title: '',
      category: '',
      objective: '',
      original_rules: '',
      alternate_rules: ''
    })
    this.props.history.push('/games');
  }

  render() {
    return (
      <div className="gameForm">
          <div>
            <input onChange={this.handleTitleChange} placeholder="Game title"/>
          </div>
          <div>
            <input onChange={this.handleCategoryChange} placeholder="Category (Card, Board, Other...)"/>
          </div>
          <div>
            <input onChange={this.handleObjectiveChange} placeholder="Game Objective"/>
          </div>
          <div>
            <textarea onChange={this.handleOriginalRulesChange} placeholder="Normal Rules"></textarea>
          </div>
          <div>
            <textarea onChange={this.handleAlternateRulesChange} placeholder="House Rules"></textarea>
          </div>
          <button onClick={this.handleSubmit}>Submit</button>

      </div>
    )
  }
}
