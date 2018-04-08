import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class BrokerList extends Component {
    constructor() {
        super()
        this.state = {
            brok_list : [],
        }
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/brokerlistapi/")
        .then(response => response.data)
        .then(list => {
            this.setState({
                brok_list: list,
            })
        })
    }

    render() {
        console.log(this.state.brok_list[0])
        return(
            <div>
                Hello BrokerList!<br /><br />
                <Link to="/">Back</Link>
            </div>
        )
    }
}

export default BrokerList