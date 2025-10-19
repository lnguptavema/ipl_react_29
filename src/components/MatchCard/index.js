import './index.css'

import {Component} from 'react'

class MatchCard extends Component {
  state = {count: null}

  render() {
    const {item} = this.props
    const {key} = this.props
    console.log(item)
    const {result} = item
    const competingTeam = item.competing_team
    const matchStatus = item.match_status
    const competingTeamLogo = item.competing_team_logo

    return (
      <li className="mainContainer" key={key}>
        <img
          className="listlogo"
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
        />
        <p>{competingTeam} </p>
        <p className="resultItem">{result} </p>
        <p className={matchStatus}>{matchStatus} </p>
      </li>
    )
  }
}

export default MatchCard
//  <p>{date}</p>
