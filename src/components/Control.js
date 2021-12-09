import React, { Component } from 'react'

class Control extends Component {

    renderGraphic() {
        switch (this.props.icon) {
            case 'arrow-back':
                return (
                    <g><path d="M20 11h-12.17l5.59-5.59-1.42-1.41-8 8 8 8 1.41-1.41-5.58-5.59h12.17v-2z"></path></g>
                )
            case 'arrow-forward':
                return (
                    <g><path d="M12 4l-1.41 1.41 5.58 5.59h-12.17v2h12.17l-5.58 5.59 1.41 1.41 8-8z"></path></g>
                )
        }
    }

    render(){
        const sx = {
            fill: '#FFF',
            //could add more styles here 
        }
        return(
            <svg
                onClick={this.props.onClickFunction}
                style={sx}
                width={this.props.width}
                height={this.props.height}
                viewBox="0 0 24 24">
                    {this.renderGraphic()}
                </svg>
        )
    }
}

export default Control