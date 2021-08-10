import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMessage: '',
  }

  onSubmitSuccess = () => {
    const {history} = this.props

    history.replace('/')
  }

  onSubmitFailure = errorMessage => {
    this.setState({showSubmitError: true, errorMessage})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    if (username !== '' && password !== '') {
      const url =
        'https://api.themoviedb.org/3/authentication/token/new?api_key=0b2eae4d022035e251e34aa65978df99'
      const options = {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        },
      }
      const response = await fetch(url, options)
      const data = await response.json()
      if (response.ok === true) {
        this.onSubmitSuccess()
      } else {
        this.onSubmitFailure(data.error_msg)
      }
    }
  }

  onChangeUsername = event => this.setState({username: event.target.value})

  onChangePassword = event => this.setState({password: event.target.value})

  render() {
    const {username, password, showSubmitError, errorMessage} = this.state
    return (
      <div className="LoginBg">
        <div>
          <h1 className="Heading">Movies</h1>
          <form onSubmit={this.onSubmitForm} className="signin-card">
            <h1 className="signhead">Sign in</h1>

            <label htmlFor="username">Username </label>
            <input
              id="username"
              onChange={this.onChangeUsername}
              value={username}
              type="text"
              placeholder="username"
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              onChange={this.onChangePassword}
              placeholder="Password"
              value={password}
              type="password"
            />
            {showSubmitError && <p>{errorMessage}</p>}
            <div>
              <button type="submit">Sign in </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
