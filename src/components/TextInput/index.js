import {Component} from 'react'
import './index.css'

class TextInput extends Component {
  state = {textInput: '', saveClicked: false}

  saveText = () => {
    this.setState(prevState => ({saveClicked: !prevState.saveClicked}))
  }

  changeText = event => {
    this.setState({textInput: event.target.value})
  }

  render() {
    const {saveClicked, textInput} = this.state
    return (
      <div className="main_container">
        <div className="container">
          <h1 className="heading">Editable Text Input</h1>

          {saveClicked ? (
            <div className="savedInput">
              <p className="savedText">{textInput}</p>
              <button onClick={this.saveText} type="button" className="button">
                Edit
              </button>
            </div>
          ) : (
            <div className="enterInput">
              <input
                className="inputBar"
                onChange={this.changeText}
                type="text"
                value={textInput}
              />
              <button onClick={this.saveText} type="button" className="button">
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default TextInput
