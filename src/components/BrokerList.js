import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class BrokerList extends Component {
    constructor() {
        super()
        this.state = {
            brok_list : [],
            expand : [],
        }
        this.showDataList = this.showDataList.bind(this)
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

    // handleClick(key) {
    //     if(this.state.expand[key]!=null){
    //         this.setState({
    //             expand[key] : !this.state.expand[key],
    //         })
    //     } else {
    //         this.setState({expand[key]: True})
    //     }
    // }

    showDataList() {
        return(
            <div>
                {Object.keys(this.state.brok_list).map((key) => 
                    <ul>
                        <li>{this.state.brok_list[key].name}</li>
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
                <Link to="/">Back</Link>
            </div>
        )
    }
}

export default BrokerList