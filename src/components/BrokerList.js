import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class BrokerList extends Component {
    constructor() {
        super()
        this.state = {
            brok_list : [],
        }
        this.showDataList = this.showDataList.bind(this)
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/brokerlistapi/")
        .then(response => {
            this.setState({
                brok_list: response.data,
            })
        })
        .catch(error => {console.log(error)})
    }

    showDataList() {
        return(
            <div>
                {Object.keys(this.state.brok_list).map((key) => 
                    <ul>
                        <li>
                            <Link to={'/brokerprofile/' + this.state.brok_list[key].id}>
                                {this.state.brok_list[key].name}
                            </Link>
                        </li>
                    </ul>
                )}
            </div>
        )
    }

    render() {
        console.log(this.state.brok_list[0])
        let data = this.state.brok_list
        console.log(data)
        return(
            <div>
                Hello BrokerList!<br /><br />
                {this.showDataList()}
                <br />
                <Link to="/">Home</Link>
            </div>
        )
    }
}

export default BrokerList