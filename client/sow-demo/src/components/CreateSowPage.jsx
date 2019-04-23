import React from 'react';

export const CreateSowPage = ({currentSOW, classes}) => (    
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
    
)