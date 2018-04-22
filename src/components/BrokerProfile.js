import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'


const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'left',
      color: theme.palette.text.secondary,
      margin: theme.spacing.unit * 2,
    },
})

class BrokerProfile extends Component {
    constructor(){
        super()
        this.state = {
            broker : [],
        }
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/api/broker/?q=2")
        .then(response => {
            this.setState({ 
                broker : response.data 
            })
        })
    }

    render() {
        console.log(this.state.broker)
        const { classes } = this.props
        return(
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={8}>
                        <Paper className={classes.paper}>
                            <strong>{this.state.broker.name}</strong>
                            <ul>
                                <li>Email: {this.state.broker.email}</li>
                                <li>PAN #: {this.state.broker.pan_num}</li>
                                <li>Bank Account #: {this.state.broker.bank_acc_num}</li>
                                <li>IFSC Code: {this.state.broker.ifsc}</li>
                            </ul>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>xs=12 sm=6</Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>xs=12 sm=6</Paper>
                    </Grid>
                </Grid>
                <br /><br />
                <Link to="/">Back</Link>
            </div>
        )
    }
}

BrokerProfile.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(BrokerProfile)