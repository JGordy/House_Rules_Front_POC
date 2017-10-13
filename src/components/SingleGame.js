import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
// import mockGames from '../data/mockData.js';

export default class SingleGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: {}
    }
  }

  componentDidMount() {
    let match = this.props.match;
    const id = match.params.id;
    const URL = `https://dry-forest-51238.herokuapp.com/api/game/${id}`;
    fetch(URL)
    .then(response => {
      return response.json()
    })
    .then(data => {
      this.setState({game: data})
    })
  }

  render() {
    let game = this.state.game;
    return (
      <div className="singleGame">
        <h1>{game.title}</h1>
        <p>{game.category}</p>
        <h3>{game.objective}</h3>
        <p>{game.original_rules}</p>
        <p>{game.alternate_rules}</p>
      </div>
    )
  }
}
