import React,{useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ControlPointDuplicateIcon from '@material-ui/icons/ControlPointDuplicate';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";


const useStyles = makeStyles((theme) => ({
    drawerPaper: { width: 'inherit' },
    link: {
        textDecoration: 'none',
        color: theme.palette.text.primary
    }
}));


function App() {
    const classes = useStyles();
  return (
      <Router>
        <div style={{ display:'flex'}}>
            <Drawer
            style={{width:'220px'}}
            variant="persistent"
            anchor="left"
            open="true"
            classes={{paper: classes.drawerPaper}}
            >
                <List>
                    <Link to="/" className={classes.link}>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Home"} />
                    </ListItem>
                    </Link>

                    <Link to="/about" className={classes.link}>
                        <ListItem button>
                            <ListItemIcon>
                                <InfoIcon />
                            </ListItemIcon>
                            <ListItemText primary={"About"} />
                        </ListItem>
                    </Link>
                    <Link to="/login" className={classes.link}>
                        <ListItem button>
                            <ListItemIcon>
                                <VpnKeyIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Login"} />
                        </ListItem>
                    </Link>
                    <Link to="/register" className={classes.link}>
                        <ListItem button>
                            <ListItemIcon>
                                <ControlPointDuplicateIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Register"} />
                        </ListItem>
                    </Link>
                    <Link to="/logout" className={classes.link}>
                        <ListItem button>
                            <ListItemIcon>
                                <ExitToAppIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Logout"} />
                        </ListItem>
                    </Link>
                </List>
            </Drawer>

            <Switch>
                <Route exact path="/">
                    This is Home
                </Route>
                <Route exact path="/about">
                    fuck off 
                </Route>
                <Route exact path="/login">
                    <LoginForm />
                </Route>
                <Route exact path="/register">
                    <RegisterForm />
                </Route>
                <Route exact path="/logout">
                    <div>logged out</div>
                </Route>



            </Switch>

        </div>
      </Router>
  );
}

export default App;
