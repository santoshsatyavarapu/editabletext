import {Component} from 'react'

import './App.css'

class App extends Component {
  state = {search: '', boolean: false}

  updateSearch = event => {
    this.setState({search: event.target.value})
  }

  onClickButton = () => {
    const {boolean} = this.state
    this.setState({boolean: !boolean})
  }

  render() {
    const {search, boolean} = this.state
    const buttonContent = boolean === true ? 'Edit' : 'Save'

    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">Editable Text Input</h1>
          <div>
            {!boolean && (
              <input type="text" value={search} onChange={this.updateSearch} />
            )}
            {boolean && <p>{search}</p>}
            <button type="button" onClick={this.onClickButton}>
              {buttonContent}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
