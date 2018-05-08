import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import axios from 'axios'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
// import Grid from 'material-ui/Grid'
import { setTokState, refTokState } from '../actions/authAction'
import history from '../history'

const styles = theme => ({
    paper: theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3,
      width: 250,
    }),
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    button: {
        margin: theme.spacing.unit,
        height: 5,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
})

class Signin1 extends Component {
    constructor() {
        super()
        this.state = {
            user: '',
            pass: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        })
    }

    handleSubmit() {
        let payload = {
            'username': 'admin',
            'password': 'pass1234',
        }
        axios.post('http://127.0.0.1:8000/api/token/', payload)
        .then(response => {
            console.log(response)
            var data = response.data
            this.props.dispatch(setTokState({
                'accTok': data.access,
                'refTok': data.refresh,
            }))
            console.log(this.props.data)
            history.push('/addtenant')
        }).catch(err => {console.log(err)})
    }

    render() {
        const { classes } = this.props
        return(
            <div>
                <Paper className={classes.paper} elevation={4}>
                    <Typography variant="headline" component="h3">
                    Sign In
                    </Typography>
                    <form className={classes.container} noValidate autoComplete='off'>
                        <TextField
                        id="user"
                        label="Username"
                        className={classes.textField}
                        value={this.state.user}
                        onChange={this.handleChange('user')}
                        margin="normal"
                        /><br /><br />
                        <TextField
                        id="pass"
                        label="Password"
                        className={classes.textField}
                        value={this.state.pass}
                        onChange={this.handleChange('pass')}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        /><br /><br />
                        <p>
                        <Button 
                        variant="raised" 
                        color="primary" 
                        className={classes.button}
                        onClick={this.handleSubmit}
                        >
                        Add Tenant
                        </Button></p>
                    </form>
                </Paper>
            </div>
        )
    }
}

Signin1.propTypes = {
    classes: PropTypes.object.isRequired,
}

function select(state) {
    return {
      data: state
    };
}

export default withStyles(styles)(connect(select)(Signin1))