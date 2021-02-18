
import './App.css';
import NavBar from './components/navbar';
import HomeContent from './components/homeContent'
import Footer from './components/footer'
import { BrowserRouter as Router,
Switch,
Route,
Link
} from 'react-router-dom'
function App() {
//export default function App() {

    
    return (
     <Router>
         
        <div className="container">
            
            <NavBar />
            <Switch>
            <Route path="/">   
            <div>Hola Wachin unloged!</div>
            </Route>
            <Route path="/home">   
            <div>Hola Wachin home!</div>
            </Route>
            <Route path="/playground">   
            <div>Hola Wachin playground!</div>
            </Route>
            </Switch>
            <Footer />
        </div>
     </Router>
    )
    
}
export default App

