import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

class App extends Component {
  state = {search: '', usersDetailsList: initialUserDetailsList}

  onChangeInput = event => {
    this.setState({search: event.target.value})
  }

  deleteUser = uniqueNo => {
    const {usersDetailsList} = this.state
    const filteredUsersData = usersDetailsList.filter(
      each => each.uniqueNo !== uniqueNo,
    )
    this.setState({usersDetailsList: filteredUsersData, search: ''})
  }

  render() {
    const {search, usersDetailsList} = this.state
    console.log(search)

    const searchResults = usersDetailsList.filter(eachUser =>
      eachUser.name.toLowerCase().includes(search),
    )

    console.log(searchResults)
    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input type="search" value={search} onChange={this.onChangeInput} />
        <ul className="list-container">
          {searchResults.map(eachUser => (
            <UserProfile
              userDetails={eachUser}
              key={eachUser.uniqueNo}
              deleteUser={this.deleteUser}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
