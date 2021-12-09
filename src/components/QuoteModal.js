import React, { Component } from 'react'
import './styles.css'

class QuoteModal extends Component {

    render(){
        return(
            <div className="text-center quote-modal">
                <p className="quote-text">"{this.props.quote}"</p>
                <hr/>
                <p className="author-text">- {this.props.author}</p>
            </div>
        )
    }
}

export default QuoteModal 