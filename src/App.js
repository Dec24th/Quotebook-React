import React, { Component } from 'react'

import ReactCSSTransitionReplace from 'react-css-transition-replace'
import QuoteModal from './components/QuoteModal'
import Control from './components/Control'
import { List } from 'immutable'
import quotes from './quotes'
import colors from './colors'

import './App.css'


class App extends Component {
  constructor(props) {
    super(props)

    const shuffled = List(this.shuffleQuotes(quotes))
    const init = shuffled.get(0)
    const bgcolors = List(colors)

    this.state = {
      quote: init.quote,
      author: init.author,
      available_quotes: shuffled,
      colors: bgcolors,
      index: 0
    }
  }
  //Helper function to select a random color from the array. 
  //Then Make use of this new function in the render method
  getRandomColor(){
    let ind = Math.floor(Math.random() * this.state.colors.size)
    return this.state.colors.get(ind)
  }

  performUpdate() {
    const nq = this.state.available_quotes.get(this.state.index)
    this.setState({
      quote: nq.quote,
      author: nq.author,
    })
  }
//the following if states turn our List into a circular list. 
  handleBackButton() {
    if (this.state.index === -(this.state.available_quotes.size -1)){
      this.setState({ index: 0 }, this.performUpdate)
    } else {
      this.setState({ index:this.state.index -1 }, this.performUpdate)
    }
  }

  handleNextButton() {
    if (this.state.index === (this.state.available_quotes.size -1)){
      this.setState({ index: 0 }, this.performUpdate)
    } else {
      this.setState({ index: this.state.index + 1 }, this.performUpdate)
    }
  }


  //Adding the Shuffling Function.

  shuffleQuotes(arr){
    let curIndex = arr.length, tempVal, randIndex

    while(0 !== curIndex){
      randIndex = Math.floor(Math.random() * curIndex)
      curIndex -= 1

      tempVal = arr[curIndex]
      arr[curIndex] = arr[randIndex]
      arr[randIndex] = tempVal
    }
    return arr
  }



  render() {

    const bgcolor = this.getRandomColor()
    const container_style = {
      backgroundColor: bgcolor,
      transition: 'background-color 1s ease' // ooh
    }

    return (
      <div className="App"
      style={container_style}>
        <div className="App-header">
          <h2 className="animated fadeIn">QuoteBook</h2>
        </div>

        <ReactCSSTransitionReplace 
          transitionName="cross-fade"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000} 
          >
        <QuoteModal
          key={this.state.quote}
          quote={this.state.quote}
          author={this.state.author}
        />
        </ReactCSSTransitionReplace>

        <div className="control-section">
          <div className="control-container">
            <Control
              className="inline-control"
              width={"40"}
              height={"40"}
              icon={"arrow-back"}
              onClickFunction={this.handleBackButton.bind(this)}
            />
          </div>

          <div className="control-container">
            <Control
              className="inline-control"
              width={"40"}
              height={"40"}
              icon={"arrow-forward"}
              onClickFunction={this.handleNextButton.bind(this)}
            />
          </div>

        </div>

        <div>
          <p className="footer-text">Allan Acosta</p> 
          Tutorial by <a className="footer-text" target="_blank" href="https://etnichols.com/">Evan Nichols</a>
        </div>
      </div>
    )
  }
}

export default App;