import { Container,Grid,OutlinedInput,Typography ,InputAdornment, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Quill from '../Layout/Quill';

const useStyles = makeStyles((theme) => ({
    root: {
        width:'100%',
        '& > *':{
            marginBottom:'20px'
        }
    },
    select_job_type: {
        width:'100%'
    }

  }));
function PostJob(props) {
    const classes = useStyles();
    
    const [companyName,setCompanyName] = useState(); 
    const [jobTitle,setJobTitle] = useState(); 
    const [location,setLocation] = useState(); 
    const [companyUrl,setCompanyUrl] = useState(); 
    const [jobType,setJobType] = useState('Full-Time'); 
    const [occupation,setOccupation] = useState('Software'); 
    const [education,setEducation] = useState(`Bachelor's degree`);
    const [startSalary,setStartSalary] = useState(''); 
    const [endSalary,setEndSalary] = useState('') ;
    const [salaryType,setSalaryType] = useState('Per year') ;
    const [jobDescription,setJobDescription] = useState('')

    const handelPost = (e)=>{
        e.prventDefault();
        console.log(companyName,jobTitle,location,companyUrl,jobType,occupation,education)
        console.log(startSalary,endSalary,salaryType,jobDescription)
    }
    return (
        <Container>
            <Typography variant='h4'>
                Indeed for employers
            </Typography>
            <form onSubmit={handelPost} className={classes.root} style={{width:'100%'}}>
                
                <Grid item lg={12} md={12} sm={12} xs={12} >
                    <label >
                        Company name for this job
                    </label>
                    <OutlinedInput
                    style={{width:'100%'}}
                    className={classes.input}
                    value={companyName}
                    onChange={(e)=>{setCompanyName(e.target.value)}}
                    />
                </Grid>
                
                <Grid item lg={12} md={12} sm={12} xs={12} >
                    <label >
                        Job Title
                    </label>
                    <OutlinedInput
                    style={{width:'100%'}}
                    className={classes.input}
                    value = {jobTitle}
                    onChange={(e)=>{setJobTitle(e.target.value)}}
                    />
                </Grid>

                <Grid item lg={12} md={12} sm={12} xs={12} >
                    <label >
                        Location
                    </label>
                    <OutlinedInput
                    style={{width:'100%'}}
                    className={classes.input }
                    value={location}
                    onChange={(e)=>{setLocation(e.target.value)}}
                    />
                </Grid>

                <Grid item lg={12} md={12} sm={12} xs={12} >
                    <label >
                        Company website
                    </label>
                    <OutlinedInput
                    style={{width:'100%'}}
                    className={classes.input }
                    value={companyUrl}
                    onChange={(e)=>{setCompanyUrl(e.target.value)}}
                    />
                </Grid>
                
            


            <Grid spacing={2} item container lg={12} md={12} sm={12} xs={12}>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                    <FormControl variant="outlined" className={classes.select_job_type}>
                        <label>
                            Job Type
                        </label>
                        <Select
                        value={jobType}
                        onChange={(e)=>{setJobType(e.target.value)}}
                        >
                        <option value={'Full-Time'}>Full-Time</option>
                        <option value={'Part-Time'}>Part-Time</option>
                        <option value={'Contract'}>Contract</option>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                    <FormControl variant="outlined" className={classes.select_job_type}>
                        <label>
                            Occupation
                        </label>
                        <Select
                        value={occupation}
                        onChange={(e)=>{setOccupation(e.target.value)}}
                        >
                        
                        <option value={'Software'}>Software</option>
                        <option value={'Government'}>Government</option>
                        <option value={'Account'}>Account</option>
                        <option value={'Executive and personal assitansts'}>Executive and personal assitansts</option>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                    <FormControl variant="outlined" className={classes.select_job_type}>
                        <label>
                            Education Level
                        </label>
                        <Select
                        value={education}
                        onChange={(e)=>{setEducation(e.target.value)}}
                        >
                            <option aria-label="None" value="" />
                            <option value={'12th pass'}>12th pass</option>
                            <option value={'Diploma'}>Diploma</option>
                            <option value={"Bachelor 's degree"}>Bachelor's degree</option>
                            <option value={"Master's degree"}>Master's degree</option>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid item container spacing={1} lg={12} md={12} sm={12} xs={12}>
                <Grid item container lg={12} md={12} sm={12} xs={12}>
                    <label>Salary</label>
                </Grid>

                <Grid item lg={4} md={4} sm={4} xs={4}>
                    <OutlinedInput
                    startAdornment={<InputAdornment position="start"> Rs </InputAdornment>}
                    style={{width:'100%'}}
                    className={classes.input }
                    value={startSalary}
                    onChange={(e)=>setStartSalary(e.target.value)}
                    /> 
                </Grid>
                <Grid item lg={1} md={1} sm={1} xs={1}>
                    <Typography variant='h5'>
                        to
                    </Typography>
                </Grid>
                <Grid item lg={3} md={3} sm={3} xs={3}>
                    <OutlinedInput
                    style={{width:'100%'}}
                    className={classes.input }
                    value={endSalary}
                    onChange={(e)=>setEndSalary(e.target.value)}
                    />
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                    <FormControl variant="outlined" className={classes.select_job_type}>
                        <Select
                         value={salaryType}
                         onChange={(e)=>setSalaryType(e.target.value)}
                        >
                        
                        <option value={'Per Hour'}>Per Hour</option>
                        <option value={'Per Day'}>Per month</option>
                        <option value={'Per Month'}>Per day</option>
                        <option value={'Per year'}>Per year</option>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <label>
                Description
            </label>
            <Quill jobDescription={jobDescription} setJobDescription={setJobDescription} />
            <Button variant="contained" color='primary' type='submit'>
                Submit
            </Button>
            </form>
        </Container>
    );
}

export default PostJob;