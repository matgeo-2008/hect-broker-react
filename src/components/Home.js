import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
      flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
})

class Home extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Paper className={classes.root} elevation={1}>
                            <Typography variant="headline" component="h3">
                            A real estate payments network.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                        <Link to="/tenant">
                        For Tenants
                        </Link>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>For Landlords</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>For Agents</Paper>
                    </Grid>
                </Grid>
                {/* Hello World! <br /><br />
                <Link to="/brokerlist">Broker List</Link><br /><br />
                <Link to="/brokerprofile/1">Broker Profile</Link> */}
            </div>
        )
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Home)