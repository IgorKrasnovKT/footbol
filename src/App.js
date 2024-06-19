import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Competitions from './Competitions/Competitions';
import Teams from './Teams/Teams';
import CompetitionCalendar from './CompetitionCalendar/CompetitionCalendar';
import TeamCalendar from './TeamCalendar/TeamCalendar';
import NoMatch from './NoMatch/NoMatch';
import style from './App.module.css';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import ball_icon from './images/soccer-ball.png'

function App() {
    return (
        <div className={style.container}>
            <h1 className={style.site_title}>
                <Link to="/competitions">
                    <img src={ball_icon} alt={"Мяч"} />
                    Soccer Stat
                </Link>
            </h1>
            <Switch>
                <Route path="/teams" component={Teams} />
                <Route path="/competition_calendar" component={CompetitionCalendar} />
                <Route path="/team_calendar" component={TeamCalendar} />
                <Route path="/" component={Competitions} />
                <Route path="*" component={NoMatch} />
            </Switch>
        </div>
    );
}

export default App;