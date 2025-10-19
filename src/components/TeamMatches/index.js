import {Component} from 'react'

import './index.css'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    teamData: [],
    loaderShow: true,
    bannerUrl: '',
    backgroundColor: '',
    teamMatchDetailsstate: [],
    recentArray: [],
  }

  componentDidMount() {
    this.renderItem()
  }

  renderItem = async () => {
    const {loaderShow} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const teamBannerUrl = data.team_banner_url
    const teamMatchDetails = data.latest_match_details
    const recentMatches = data.recent_matches
    console.log('data')
    console.log(data)
    console.log('data')

    if (id === 'RCB') {
      this.setState({backgroundColor: 'rcb'})
    }
    if (id === 'KKR') {
      this.setState({backgroundColor: 'kkr'})
    }
    if (id === 'KXP') {
      this.setState({backgroundColor: 'kxp'})
    }
    if (id === 'CSK') {
      this.setState({backgroundColor: 'csk'})
    }
    if (id === 'RR') {
      this.setState({backgroundColor: 'rr'})
    }
    if (id === 'MI') {
      this.setState({backgroundColor: 'mi'})
    }
    if (id === 'SH') {
      this.setState({backgroundColor: 'sh'})
    }
    if (id === 'DC') {
      this.setState({backgroundColor: 'dc'})
    }
    console.log(recentMatches)
    this.setState({
      teamData: data,
      bannerURl: teamBannerUrl,
      loaderShow: !loaderShow,
      teamMatchDetailsstate: teamMatchDetails,
      recentArray: recentMatches,
    })
  }

  render() {
    const {
      loaderShow,
      bannerURl,
      backgroundColor,
      teamMatchDetailsstate,
      recentArray,
    } = this.state
    return (
      <div>
        {loaderShow ? (
          <div className="card" data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className={`${backgroundColor}`}>
            <div className="bannerURl">
              {' '}
              <img src={bannerURl} alt="team banner" className="banerURl" />
            </div>{' '}
            <h1 className="headLatestM">Latest Matches</h1>
            <LatestMatch
              key={teamMatchDetailsstate.id}
              teamMatchDetails={teamMatchDetailsstate}
            />
            <ul className="ulList">
              {recentArray.map(eactItem => (
                <MatchCard key={eactItem.id} item={eactItem} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
//  <ul>
//               {recentMatches.map(eachItem => (
//                 <MatchCard eachItem={eachItem} />
//               ))}
//             </ul>
