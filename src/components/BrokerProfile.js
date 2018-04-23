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
})

class BrokerProfile extends Component {
    constructor(){
        super()
        this.state = {
            broker : {
                owners: [],
                tenants: [],
            },
        }
        this.ownerExpansionPanel = this.ownerExpansionPanel.bind(this)
        this.tenantExpansionPanel = this.tenantExpansionPanel.bind(this)
    }

    componentDidMount() {
        const { id } = this.props.match.params
        axios.get("http://127.0.0.1:8000/api/broker/?q=" + id)
        .then(response => {
            this.setState({ 
                broker : response.data 
            })
        })
    }

    ownerExpansionPanel() {
        const { classes } = this.props
        return(
            <div>
                {Object.keys(this.state.broker.owners).map((key) => 
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={ExpandMoreIcon}>
                            <Typography className={classes.heading}>{this.state.broker.owners[key].name}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                <ul>
                                    <li>Email: {this.state.broker.owners[key].email}</li>
                                    <li>PAN #: {this.state.broker.owners[key].pan_num}</li>
                                    <li>Bank Account #: {this.state.broker.owners[key].bank_acc_num}</li>
                                    <li>IFSC Code: {this.state.broker.owners[key].ifsc}</li>
                                </ul>
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                )}
            </div>
        )
    }

    tenantExpansionPanel() {
        const { classes } = this.props
        return(
            <div>
                {Object.keys(this.state.broker.tenants).map((key) => 
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={ExpandMoreIcon}>
                            <Typography className={classes.heading}>{this.state.broker.tenants[key].name}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                <ul>
                                    <li>Email: {this.state.broker.tenants[key].email}</li>
                                    <li>PAN #: {this.state.broker.tenants[key].pan_num}</li>
                                    <li>Bank Account #: {this.state.broker.tenants[key].bank_acc_num}</li>
                                    <li>IFSC Code: {this.state.broker.tenants[key].ifsc}</li>
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
                            {this.ownerExpansionPanel()}
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>
                        <strong>Tenants</strong><br /><br />
                            {this.tenantExpansionPanel()}
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