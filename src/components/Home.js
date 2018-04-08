import React, { Component } from 'react'
import logo from '../logo.png'

class Home extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {

        return (
            <div>
                Hello World! <br /><br />
                <div>
                    <img src={logo} className="App-logo" alt="CC Logo" />
                </div>
            </div>
        )
    }
}

export default Home