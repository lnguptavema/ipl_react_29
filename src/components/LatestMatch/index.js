import './index.css'

import {Component} from 'react'

class LatestMatch extends Component {
  state = {count: null}

  renderItem() {
    const {teamMatchDetails} = this.props
    const {umpires} = teamMatchDetails
    const {result} = teamMatchDetails
    const manOfTheMatch = teamMatchDetails.man_of_the_match
    const competingTeamLogo = teamMatchDetails.competing_team_logo
    const {date} = teamMatchDetails
    const {venue} = teamMatchDetails
    const competingTeam = teamMatchDetails.competing_team
    const firstInnings = teamMatchDetails.first_innings
    const secondInnings = teamMatchDetails.second_innings
    return (
      <div className="cardLatestMatch">
        <div>
          {' '}
          <p>{competingTeam} </p>
          <p>{date}</p>
          <p className="venue">{venue}</p>
          <p>{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          className="competing_team_logo"
          alt={`latest match ${competingTeam}`}
        />
        <div>
          <p>First Innings</p>
          <p>{firstInnings}</p>
          <p>Second Innings</p>
          <p>{secondInnings} </p>
          <p>Man of the Match</p>
          <p>{manOfTheMatch} </p>
          <p>Umpires</p>
          <p>{umpires} </p>
        </div>
      </div>
    )
  }

  render() {
    const {teamMatchDetails} = this.props
    const {id} = teamMatchDetails
    return (
      <div className="card1Main">
        {' '}
        <li key={id} className="listLM">
          {this.renderItem()}
        </li>
      </div>
    )
  }
}

export default LatestMatch
