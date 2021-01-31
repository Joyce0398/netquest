import React, { useState, useEffect }  from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import './App.css';
import 'object-to-xml'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory
} from 'react-router-dom';

const dicStationData = {};

function App() {
    useEffect (() => {
        fetch("http://localhost:9000/weatherData")
            .then(res => res.text())
            .then((data) => {
                let newData = JSON.parse(data)
                for(let key in newData) {
                    dicStationData[key] = newData[key]
                }
                for(let key in dicStationData){
                    localStorage.setItem(key,dicStationData[key]);
                }
                setInterval(() => {
                }, 0);
            })
            .catch(err => console.log(err));
    });

    return (
        <div className="App">
            <div>
            </div>
            <Router>
                <Switch>
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/weather' component={Weather}/>
                    <Route exact path='/' component={Login} />
                    <Route path='*'><div>404 not found</div></Route>
                </Switch>
            </Router>
        </div>
    );
}

function Weather() {
    const history = useHistory();
    const windList = {}
    const array1 = []
    const array2 = []
    const allValues = []

    const addDataAllValues = () => {
        for(let key in localStorage){
            if(key.match(/^[0-9]+$/)){
                // allValues.push(localStorage.getItem(key))
                allValues[key] = localStorage.getItem(key)
            }
        }
    }

    const addToArray1 = () => {
        for(let item in allValues){
            array1.push(allValues[item].split(',')[4])
        }
        array1.sort(function(a, b) {
            return b - a;
        });
        array1.length = 10

    }

    const addToArray2 = () => {
        for(let item in allValues){
            array2.push(allValues[item].split(',')[5])
        }
        array2.sort(function(a, b) {
            return b - a;
        });
        array2.length = 10
    }

    const windInfo = () => {
        for(let item in allValues) {
            windList[allValues[item].split(',')[7]] = allValues[item].split(',')[12]
        }
    }
    const handleDownload = () => {
        let o2x = require('object-to-xml')
        let dic_xml = o2x(dicStationData)
        console.log(dic_xml)
    }

    const handleLogout = () => {
        console.log("logged off")
        history.push("/login")
    }
    return (
        <div>
            <h2>Weather data application</h2>
            <button onClick={handleLogout}>Logout</button>
            <button onClick={handleDownload}>Download data</button>

            <div className="content">
                <div className="weatherbox">
                    <PerfectScrollbar>
                        <h1>All stations</h1>
                        {addDataAllValues()}
                        {windInfo()}
                        {Object.keys(windList).map((key, index) => (
                        <div className="longItem" key={key}>
                            <p> Windspeed: {key} </p>
                            <p> Winddirection: {windList[key]} </p>
                        </div>
                        ))}
                    </PerfectScrollbar>
                </div>
                <div className="topten">
                    <PerfectScrollbar>
                        <h1>Top ten</h1>
                        <p>station level pressure</p>
                        {addToArray1()}
                        {array1.map(value => (
                            <div className="item" key={value}>
                                <p>{value}</p>
                            </div>
                        ))}
                    </PerfectScrollbar>
                </div>

                <div className="topten">
                    <PerfectScrollbar>
                        <h1>Top ten</h1>
                        <p>sea level pressure</p>
                        {addToArray2()}
                        {array2.map(value => (
                            <div className="item" key={value}>
                               {value}
                            </div>
                        ))}
                    </PerfectScrollbar>
                </div>
            </div>
        </div>
    );
}

function Login() {
    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        if(userName == 'admin' && password == 'test123'){
            console.log('je bent ingelogd')
            history.push("/Weather")
        } else if(userName == '' || password == '') {
            alert('Fields are required')
        } else {
            alert('Wrong username/password combination');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input type="text" placeholder="Username" value={userName} onChange={e => setUsername(e.target.value)}/>
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
            <button type="submit">Login</button>
        </form>
    );
}

export default App;
