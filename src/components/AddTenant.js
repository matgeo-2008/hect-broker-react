import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'


const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    menu: {
      width: 200,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'left',
        color: theme.palette.text.secondary,
        margin: theme.spacing.unit * 2,
    },
    button: {
        margin: theme.spacing.unit,
        height: 5,
    },
    input: {
        display: 'none',
    },
})

class AddTenant extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            pan_num: '',
            bank_acc_num: '',
            ifsc: '',
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
        if(this.state.name===''||
           this.state.email===''|| 
           this.state.pan_num===''||
           this.state.bank_acc_num===''||
           this.state.ifsc==='') {
            alert('All fields are mandatory.')
            return
        }
        axios.post('http://127.0.0.1:8000/api/broker/', {
            email: this.state.email,
            name: this.state.name,
            pan_num: this.state.pan_num,
            bank_acc_num: this.state.bank_acc_num,
            ifsc: this.state.ifsc,
        }).then(response => {console.log(response)})
          .catch(error => {console.log(error)})
    }

    render() {
        const { classes } = this.props
        return(
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={8}>
                        <Paper className={classes.paper}>
                            <h2>Add Tenant</h2>
                            <form className={classes.container} noValidate autoComplete='off'>
                                <TextField
                                id="name"
                                label="Name"
                                className={classes.textField}
                                value={this.state.name}
                                onChange={this.handleChange('name')}
                                margin="normal"
                                />
                                <TextField
                                id="email"
                                label="Email"
                                className={classes.textField}
                                value={this.state.email}
                                onChange={this.handleChange('email')}
                                margin="normal"
                                />
                                <TextField
                                id="pan_num"
                                label="PAN Number"
                                className={classes.textField}
                                value={this.state.pan_num}
                                onChange={this.handleChange('pan_num')}
                                margin="normal"
                                />
                                <TextField
                                id="bank_acc_num"
                                label="Bank Account Number"
                                className={classes.textField}
                                value={this.state.bank_acc_num}
                                onChange={this.handleChange('bank_acc_num')}
                                margin="normal"
                                />
                                <TextField
                                id="ifsc"
                                label="IFSC Code"
                                className={classes.textField}
                                value={this.state.ifsc}
                                onChange={this.handleChange('ifsc')}
                                margin="normal"
                                />
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
                    </Grid>
                </Grid>
                <br /><br />
                <Link to='/'>Home</Link>
            </div>
        )
    }
}

AddTenant.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AddTenant)