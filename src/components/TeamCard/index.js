import './index.css'

import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {eachItem, key} = props
  const {id, name, teamImageUrl} = eachItem
  return (
    <Link to={`/team-matches/${id}`} className="listItem">
      <li key={key} className="list">
        <img className="imageItem" src={teamImageUrl} alt={name} />
        <p className="namehead">{name} </p>
      </li>
    </Link>
  )
}

export default TeamCard
