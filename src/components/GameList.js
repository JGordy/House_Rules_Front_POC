import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import mockGames from '../data/mockData.js';

export default class GameList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    }
  }

  componentDidMount() {
    fetch("https://dry-forest-51238.herokuapp.com/api/games")
    .then(response => {
      return response.json()
    }).then(data => {
      
      this.setState({games: data})
    })
  }

  render() {
    // let match = this.state.match;

    let gamesList = this.state.games.map((game) => {
      return <div key={game.id} className="each_game">
              <Link to={`/games/${game.id}`}>
                <h3 className="game_title">{game.title}</h3>
                <p className="game_category">{game.category}</p>
              </Link>
             </div>;
    })
    return (
      <div className="gameList">
      {gamesList}
      </div>
    )
  }
}
