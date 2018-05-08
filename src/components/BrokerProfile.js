import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel'
import Typography from 'material-ui/Typography'
import { ExpandMoreIcon } from '../ExpandMoreIcon.png'
import Button from 'material-ui/Button'


const styles = theme => ({
    root: {
      flexGrow: 1,
      width: '100%',
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'left',
      color: theme.palette.text.secondary,
      margin: theme.spacing.unit * 2,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        color: 'blue',
    },
    button: {
        margin: theme.spacing.unit,
        height: 5,
    },
    input: {
        display: 'none',
    },
})

class BrokerProfile extends Component {
    constructor() {
        super()
        this.state = {
            broker : {
                owners: [],
                tenants: [],
            },
        }
        this.otExpansionPanel = this.otExpansionPanel.bind(this)
    }

    componentDidMount() {
        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTI1NTk3NzU2LCJqdGkiOiJlNzE2ZGU0ZmQyZmU0ZDgxYjQ3ZmMzNDhiYjYzNTg4NSIsInVzZXJfaWQiOjF9.lNhBOQfZeq1RLu9-P_NQyXDFeD8R8hgEBgHEwr_AQrQ'
        const { id } = this.props.match.params
        axios.get("http://127.0.0.1:8000/api/broker/?q=" + id, 
                { headers:
                {
                    'Authorization': 'Bearer '+token,
                }})
        .then(response => {
            this.setState({ 
                broker : response.data
            })
        })
        .catch(error => {console.log(error)})
    }

    otExpansionPanel(type) {
        let array = []
        if (type==='owner'){
            array = this.state.broker.owners
        } else {
            array = this.state.broker.tenants
        }
        const { classes } = this.props
        return(
            <div>
                {Object.keys(array).map((key) => 
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={ExpandMoreIcon}>
                            <Typography className={classes.heading}>{array[key].name}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                <ul>
                                    <li>Email: {array[key].email}</li>
                                    <li>PAN #: {array[key].pan_num}</li>
                                    <li>Bank Account #: {array[key].bank_acc_num}</li>
                                    <li>IFSC Code: {array[key].ifsc}</li>
                                </ul>
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                )}
            </div>
        )
    }

    render() {
        const { classes } = this.props
        return(
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={8}>
                        <Paper className={classes.paper}>
                            <h2>Broker Information</h2>
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
                        <Paper className={classes.paper}>
                        <strong>Owners</strong><br /><br />
                            {this.otExpansionPanel('owner')}
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>
                            <strong>Tenants</strong><br /><br />
                            {this.otExpansionPanel('tenant')}
                            <br />
                            <Link to='/addtenant'>
                            <Button 
                            variant="raised" 
                            color="primary" 
                            className={classes.button}
                            >Add Tenant</Button>
                            </Link>
                        </Paper>
                    </Grid>
                </Grid>
                <br /><br />
                <Link to="/">Home</Link>
            </div>
        )
    }
}

BrokerProfile.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(BrokerProfile)