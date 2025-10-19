import './index.css'

import {Component} from 'react'

import {Link} from 'react-router-dom'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {listItems: [], loadershow: true}

  componentDidMount() {
    this.renderListItems()
    console.log('dala')
  }

  renderListItems = async () => {
    const {loadershow} = this.state
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const newitems = data.teams

    const formatedData = newitems.map(item => ({
      name: item.name,
      id: item.id,
      teamImageUrl: item.team_image_url,
    }))
    this.setState({listItems: formatedData, loadershow: !loadershow})
  }

  render() {
    const {listItems, loadershow} = this.state
    return (
      <Link to="/" className="link">
        <div className="container" data-testid="loader">
          <div className="homecard">
            <img
              className="batLogo"
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
              alt="ipl logo"
            />
            <h1 className="iplhead">IPL Dashboard</h1>
          </div>

          <ul>
            {listItems.map(eachItem => (
              <TeamCard key={eachItem.id} eachItem={eachItem} />
            ))}
          </ul>
        </div>
      </Link>
    )
  }
}

export default Home
