import React, { Component, useState, setState, useEffect }  from 'react'
import ReactDOM from 'react-dom'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import './App.css';
// import {Nav, Navbar, NavDropdown, MenuItem,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';
// import logo from './image/logo.jpg'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useHistory,
    Link
} from 'react-router-dom';

// const [stationData, setStationData] = useState({
//     'stn' : '',
//     'date' : '',
//     'time' : '',
//     'temp' : '',
//     'dewp' : '',
//     'stp' : '',
//     'slp' : '',
//     'visib' : '',
//     'wdsp' : '',
//     'prcp' : '',
//     'sndp' : '',
//     'frshtt' : '',
//     // 'cldc' : '',
//     'wnddir' : ''
// })

const updatedStationData = {}

// const stationData= {
//     'stn' : '',
//     'date' : '',
//     'time' : '',
//     'temp' : '',
//     'dewp' : '',
//     'stp' : '',
//     'slp' : '',
//     'visib' : '',
//     'wdsp' : '',
//     'prcp' : '',
//     'sndp' : '',
//     'frshtt' : '',
//     // 'cldc' : '',
//     'wnddir' : ''
// }
// console.log(logo)

const state = {
    dicStationData: {
    }
}

const dicStationData = {};

function App() {
    const [loggedIn, setLoggedIn] = useState(
        // initial value
        document.cookie.split(';').some((item) => item.trim().startsWith('logedIn=')));

        //cldc is leeg

        // ,date, time, temp, dewp, stp, slp, visib, wdsp, prcp, sndp, frshtt, wnddir

    const sendData = (data) => {

    }

    useEffect (() => {
        fetch("http://localhost:9000/weatherData")
            .then(res => res.text())
            .then((data) => {
                let newData = JSON.parse(data)
                for(let key in newData) {
                    dicStationData[key] = newData[key]
                }
                {Object.keys(dicStationData).map((key, i) => (
                    console.log(key, dicStationData[key]))
                )}

                for(let key in dicStationData){
                    localStorage.setItem(key,dicStationData[key]);
                }
                for(let key in dicStationData) {
                    console.log(localStorage.getItem(key))
                }

                // let newData = JSON.parse(data)
                // for(let key in newData) {
                //     dicStationData[key] = newData[key]
                // }
                // {Object.keys(dicStationData).map((key, i) => (
                //     console.log(key, dicStationData[key]))
                //
                // )}
                // let newData = JSON.parse(data)
                // for(let key in newData) {
                //     dicStationData[key] = newData[key]
                // }
                // {Object.keys(dicStationData).map((key, i) => (
                //         console.log(key, dicStationData[key]))
                //
                // )}
                // console.log(dicStationData)
                //     setState({
                //         dicStationData: newData[key]
                //     })
                // }
                setInterval(() => {
                    // let newData = JSON.parse(data)
                    // for(let key in newData) {
                        // console.log('dit is de key: ' + key)
                        // console.log('dit zijn de values: ' + newData[key][0])
                        // setState({
                        //     dicStationData: newData[key]
                            // dicStationData.push({
                            //     dicStationData[key] = newData[key]
                            // })
                        // });
                    // }
                    //     console.log(state.state.dicStationData)
                //    only fetch when page is being refreshed?
                }, 0);
            })
            .catch(err => console.log(err));
    })

    return (
      <div className="App">
          <div>
          </div>
          <Router>
          <Switch>
              <Route path='/login' component={Login} />
              {/*render={() => <Weather newData={newData} />}*/}
              <Route path='/weather' component={Weather} />
              <Route path='/' component={Login} />
              <Route path='' component={Login} />
              {/*door private route mag je helemaal niet meer naar weather rip*/}
              {/*<PrivateRoute path='/weather' component={Weather} />*/}
          </Switch>
          {/*<Footer />*/}
          </Router>
      </div>
);
}

function Station (){
    const stn = '';
    const date = '';
    const time = '';
    const temp = '';
    const dewp = '';
    const stp = '';
    const slp = '';
    const visib = '';
    const wdsp = '';
    const prcp = '';
    const sndp = '';
    const frshtt = '';
    // const cldc = '';
    const wnddir = '';

}

function PrivateRoute ({component: Component, authed, ...rest}) {
    return (
        <Route
            {...rest}
            render={(props) => authed === true
                ? <Component {...props} />
                : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
        />
    )
}

function Navbar(props) {
    return (
        <div>
        <header>
            hallo
        </header>
        </div>
            // ...
            // {/*{props.loggedIn ? ... // instead of this.state.loggedIn*/}
                )
            }

// You can think of these components as "pages"
// in your app.
function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function Weather() {
    const history = useHistory();
    // const stationInfo = data
    // console.log(props.stn)
    const stn = ''
    const data = ''

    const handleData = (d) => {
        console.log(d)
    //     console.log(stationData)
    //     for(let item in stationData){
            // stn = item
            // return <h1>{item}</h1>
        // }
        // return <h1>stationData</h1>
    }

    const handleLogout = () => {
        console.log("logged off")
        history.push("/login")
    }
    return (
        <div>
                <h2>Weather data application</h2>
                <button onClick={handleLogout}>Logout</button>
                <button>Download data</button>

                <div className="content">
                <div className="weatherbox">
                    <PerfectScrollbar>
                <h1>All stations</h1>
                {/*ook moet er ff een slider voor als het meer worden*/}

                {Object.keys(dicStationData).map((key, i) => (
                    // console.log(key, dicStationData[key]))
                    <div className="longItem" key={i}>
                        <p>{key} : </p>
                        <p>windspeed: {localStorage.getItem(key).split(',')[5]}</p>
                        <p>winddirection: {localStorage.getItem(key).split(',')[6]}</p>
                    </div>
                ))}
                    </PerfectScrollbar>
                </div>
                <div className="topten">
                    <PerfectScrollbar>
                <h1>Top ten</h1>
                <p>station level pressure</p>
                        {Object.keys(dicStationData).map((key, i) => (
                            //voor elke key luchtdruk sort
                            // const sortedList = []
                            // const airpressure= localStorage.getItem(key).split('')[3]
                            <div className="item" key={i}>
                                {localStorage.getItem(key).split(',')[5]}
                            </div>
                        ))}
                {/*<div className="item">*/}
                {/*test : test*/}
                {/*</div>*/}
                        </PerfectScrollbar>
                </div>

                <div className="topten">
                    <PerfectScrollbar>
                <h1>Top ten</h1>
                <p>sea level pressure</p>
                        {/*{Object.keys(dicStationData).sort().map((key, i) => (*/}
                        {/*    <div className="item" key={i}>*/}
                        {/*        /!*console.log(i)*!/*/}
                        {/*        {localStorage.getItem(key).split(',')[6]}*/}
                        {/*    </div>*/}
                        {/*))}*/}

                        {/*{ let sortable = []*/}
                        {/*    for(let s in dicStationData) {*/}
                        {/*        sortable.push([s, dicStationData[s]])*/}
                        {/*}*/}
                        {/*}*/}

                        {/*Object.fromEntries(*/}
                        {/*Object.entries(maxSpeed).sort(([,a],[,b]) => a-b)*/}
                {/*<div className="item">*/}
                {/*test : test*/}
                {/*</div>*/}
                {/*<div className="item">*/}
                {/*test : test*/}
                {/*</div>*/}
                {/*<div className="item">*/}
                {/*test : test*/}
                {/*</div>*/}
                {/*<div className="item">*/}
                {/*test : test*/}
                {/*</div>*/}
                {/*<div className="item">*/}
                {/*test : test*/}
                {/*</div>*/}
                {/*<div className="item">*/}
                {/*test : test*/}
                {/*</div>*/}
                        </PerfectScrollbar>
                </div>
                </div>
        </div>
    );
}

function Login() {
    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const history = useHistory();
    const state = {
        redirect: false
    }

    const setRedirect = () => {
        setState({
            redirect: true
        })
    }

    const renderRedirect = () => {
        if (state.redirect) {
            return <Redirect to='/Weather' />
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(userName == 'admin' && password == 'test123'){
            console.log('je bent ingelogd')
            history.push("/Weather")
        //    je moet niet naar /inlog kunnen als ingelogd bent en je moet niet
        //    naar weather kunnen als je niet bent ingelogd

        } else if(userName == '' || password == '') {
            // setError('Fields are required')
            alert('Fields are required')
        } else {
            alert('Account info: ' + userName + ' ' + password);
        }

        // event.checkPassword();
        // checkUsername
    }

    {/*<form onSubmit={handleSubmit}>*/}
    // <input type="text" name="name" className="question" id="nme" required autoComplete="off"/>
    // <label htmlFor="nme"><span>Username</span></label>
    // <input type="text" name="name" className="question" id="nme" required autoComplete="off"/>
    // <label htmlFor="nme"><span>Password</span></label>
    {/*<input type="submit" value="Submit!"/>*/}
    {/*</form>*/}

    return (
        <form onSubmit={handleSubmit}>

            {/*<h1>Current username: {userName}</h1>*/}
            {/*<h1>Current password: {password}</h1>*/}
            <h1>Login</h1>

                <input type="text" placeholder="Username" value={userName} onChange={e => setUsername(e.target.value)}/>
                {/*<label>Username</label>*/}

                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                {/*<label>Password</label>*/}

            <button type="submit">Login</button>
            {/*<input type="submit" value="Login" />*/}
         </form>
  );
}


export default App;
