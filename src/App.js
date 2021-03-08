
import './App.css';
import NavBar from './components/navbar';
import HomeContent from './components/homeContent';
import Footer from './components/footer';
import WelcomePage from './components/welcome';
import PlayGround from './components/playground2';
import Authenticated from './components/authenticated';
import Page from "./components/page"
import ResultData from "./components/result"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
function App() {
    //export default function App() {


    return (
        <Router>

            <div className="App">

                <NavBar />
                <Switch>
                    <Route path="/result/"
                        render={(props) => (
                            <Page title="Results Page">
                                <ResultData {...props} />
                            </Page>
                        )}
                    />
                    <Route path="/lorem/"
                        render={(props) => (
                            <Page title="Lorem Ipsum Page">
                                <HomeContent {...props} />
                            </Page>
                        )}
                    />
                    <Route path="/forms/"
                        render={(props) => (
                            <Page title="Forms Page">
                                <PlayGround {...props} />
                            </Page>
                        )}
                    />
                    <Route path="/"
                        render={(props) => (
                            <Page title="Homme Page">
                                <WelcomePage  {...props} />
                            </Page>
                        )}
                    />

                </Switch>
                <Footer />
            </div>
        </Router>
    )

}
export default App

