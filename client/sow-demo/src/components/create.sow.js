import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Switch from '@material-ui/core/Switch';
import ButtonBase from '@material-ui/core/ButtonBase';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});



class CreateSOW extends Component{

    constructor(props){
        super(props);    
        this.state =  {
            createdSOW:{
                proposer:"0x8514C373509315aA62647b65723E2Ce12ED1Cc0D",
                acceptor:"0xB8876bB02003B665283d05440afd764A0821764f",
                facilator:"0x5eA363486FA2Ea59679fF7A0cb230fab0f6aA2f4",
                resource:"0x0A7aD1FfDE4a3832465c6aA24B288f57d493A1D6",
                isActive:false,
                isExpired:false,
                effectiveDate: new Date('August 19, 2019 23:15:30 GMT+11:00'),
                commencementDateOfServices: new Date('August 15, 2019 23:15:30 GMT+11:00'),
                completionDateOfServices: new Date('December 31, 2019 23:15:30 GMT+11:00'),
                projectName:"Some Project Code Name",
                rate:80,
                weekStartDay:"Monday",
                transactionHash:"",
                blockNumber:"",
                gasCost:"",
                version:"1.0"        
            }   
        };

        this.submitSOW = this.submitSOW.bind(this);
        this.clearSOW = this.clearSOW.bind(this);
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };

    submitSOW(){
        console.log("incrementing score");
        this.setState({
            score: this.state.score +1
        });
    }
    clearSOW(){
        console.log("clear form");
        this.setState({
            ...this.state.createdSOW,
           projectName:""
        });
    }

    render() {
    const { classes } = this.props; 
    const { createdSOW } = this.state;     
    return (
        <div className={classes.root}>
          <form className={classes.container} noValidate autoComplete="off">
            <Grid container spacing={16}>                
                <Grid item xs={12}>                
                    <Paper className={classes.paper}>
                            <TextField
                                disabled    
                                id="filled-name"
                                label="Facilator Address"
                                defaultValue={createdSOW.facilator}
                                className={classes.textField}
                                value={createdSOW.acceptor}
                                onChange={this.handleChange('facilator')}
                                margin="normal"
                                variant="filled"
                                fullWidth
                            />     
                            <TextField
                                id="filled-name"
                                label="Proposer Address"
                                defaultValue={createdSOW.proposer}
                                className={classes.textField}
                                value={createdSOW.proposer}
                                onChange={this.handleChange('proposer')}
                                margin="normal"
                                variant="filled"
                                fullWidth
                            />     
                            <TextField
                                id="filled-name"
                                label="Acceptor Address"
                                defaultValue={createdSOW.acceptor}
                                className={classes.textField}
                                value={createdSOW.acceptor}
                                onChange={this.handleChange('acceptor')}
                                margin="normal"
                                variant="filled"
                                fullWidth
                            />  
                             <TextField
                                id="filled-name"
                                label="Resource Consultant"
                                className={classes.textField}
                                defaultValue={createdSOW.resource}
                                margin="normal"
                                variant="filled"
                                fullWidth
                            />   
                                          
                            <TextField
                                id="filled-name"
                                label="Project Name"
                                className={classes.textField}
                                defaultValue={createdSOW.projectName}
                                margin="normal"
                                variant="filled"
                                fullWidth
                            />                            
                            <hr/>
                            <TextField
                                id="filled-name"
                                label="Version"
                                className={classes.textField}
                                defaultValue={createdSOW.version}
                                margin="normal"
                                variant="filled"  
                                fullWidth                              
                            />
                             <TextField
                                id="filled-name"
                                label="Billed Rate"
                                onChange={this.handleChange('rate')}
                                type="number"
                                className={classes.textField}
                                defaultValue={createdSOW.rate}
                                value={createdSOW.rate}
                                margin="normal"
                                variant="filled"  
                                fullWidth                              
                            />      
                            <TextField
                                id="filled-name"
                                label="Effective Date"
                                onChange={this.handleChange('effectiveDate')}                                
                                className={classes.textField}
                                defaultValue={createdSOW.effectiveDate}
                                value={createdSOW.effectiveDate.toString()}
                                margin="normal"
                                variant="filled"  
                                fullWidth                              
                            />    
                            <TextField
                                id="filled-name"
                                label="Commencment Date"
                                onChange={this.handleChange('commencementDate')}                                
                                className={classes.textField}
                                defaultValue={createdSOW.commencementDateOfServices}
                                value={createdSOW.commencementDateOfServices.toString()}
                                margin="normal"
                                variant="filled"  
                                fullWidth                              
                            />       
                             <TextField
                                id="filled-name"
                                label="Completion Date"
                                onChange={this.handleChange('completionDate')}                                
                                className={classes.textField}
                                defaultValue={createdSOW.completionDateOfServices}
                                value={createdSOW.completionDateOfServices.toString()}
                                margin="normal"
                                variant="filled"  
                                fullWidth                              
                            />                           
                                 <FormControl component="fieldset" className={classes.formControl}>
                                    <FormLabel component="legend">Is Active</FormLabel>
                                    <RadioGroup
                                        aria-label="Is Active"
                                        name="is active"
                                        className={classes.group}
                                        value={createdSOW.isActive}
                                        onChange={this.handleChange}
                                    >
                                        <FormControlLabel value="Active" control={<Radio />} label="Active" />
                                        <FormControlLabel value="InActive" control={<Radio />} label="InActive" />                                       
                                        />
                                    </RadioGroup>
                                </FormControl>
                                <FormControl component="fieldset" className={classes.formControl}>
                                    <FormLabel component="legend">Is Expired</FormLabel>
                                    <RadioGroup
                                        aria-label="Is Expired"
                                        name="is expired"
                                        className={classes.group}
                                        value={createdSOW.isExpired}
                                        onChange={this.handleChange}
                                    >
                                        <FormControlLabel value="Expired" control={<Radio />} label="Expired" />
                                        <FormControlLabel value="NotExpired" control={<Radio />} label="Not Expired" />                                       
                                        />
                                    </RadioGroup>
                                </FormControl>
                                <FormControl component="fieldset" className={classes.formControl}>
                                    <FormLabel component="legend">Week Start Day</FormLabel>
                                    <RadioGroup
                                        aria-label="Week Start Day"
                                        name="weekStartDay"
                                        className={classes.group}
                                        value={createdSOW.weekStartDay}
                                        onChange={this.handleChange}
                                    >
                                        <FormControlLabel value="Monday" control={<Radio />} label="Monday" />
                                        <FormControlLabel value="Sunday" control={<Radio />} label="Sunday" />                                       
                                        />
                                    </RadioGroup>
                                </FormControl>
                                <hr/>
                    </Paper> 
                </Grid>
                <Grid item xs={6}>
                <Paper className={classes.paper}>
                        <Button variant="contained"  className={classes.button} onClick={() => this.clearSOW()}>  
                                Clear
                                </Button>
                        </Paper>                        
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                        <Button variant="contained" color="primary" className={classes.button}>
                            Record To Blockchain
                        </Button>
                        </Paper>
                    </Grid>
            </Grid>
            </form>
        </div>
    );
  }
}

CreateSOW.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(CreateSOW);