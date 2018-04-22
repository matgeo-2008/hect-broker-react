import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
                <Link to="/brokerlist">Broker List</Link><br /><br />
                <Link to="/brokerprofile">Broker Profile</Link>
            </div>
        )
    }
}

export default Home