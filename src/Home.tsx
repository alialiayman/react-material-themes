import React from 'react'
import { TextField, Button, Paper, Divider,AppBar, Toolbar, FormControlLabel, Checkbox, Container, Radio, Fab, FormControl, InputLabel, Select } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const Home: React.FC = () => {
    return (
        <React.Fragment>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" >
                        News
    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Container>
                <TextField label="Outlined" variant="outlined" fullWidth></TextField>
                <TextField label="Outlined" variant="outlined" fullWidth error></TextField>

                <Button variant="contained">Default</Button>
                <Button variant="contained" color="primary">
                    Primary
</Button>
                <Button variant="contained" color="secondary">
                    Secondary
</Button>
                <FormControlLabel
                    control={
                        <Checkbox
                        />
                    }
                    label="Default"
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            color="primary"
                        />
                    }
                    label="Primary"
                />

                <FormControlLabel
                    control={<Checkbox />}
                    label="Secondary"
                />

                <FormControlLabel control={<Radio />} label="Default" />
                <FormControlLabel control={<Radio color="primary" />} label="Primary" />
                <FormControlLabel control={<Radio color="secondary" />} label="Seconday" />

                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
                <Fab color="secondary" aria-label="edit">
                    <EditIcon />
                </Fab>


                <FormControl variant="outlined" >
                    <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
                    <Select
                        native
                        label="Age"
                    >
                        <option aria-label="None" value="" />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </Select>
                </FormControl>

                <Paper elevation={5} style={{height: '50px'}}>

                    test on paper
                    </Paper>

<Divider></Divider>
                <Card >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Word of the Day
        </Typography>
                        <Typography variant="h5" component="h2">
                            Test Test Test
        </Typography>
                        <Typography color="textSecondary">
                            adjective
        </Typography>
                        <Typography variant="body2" component="p">
                            well meaning and kindly.
          <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Container>
        </React.Fragment>
    )

}

export default Home;