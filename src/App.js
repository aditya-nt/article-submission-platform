import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm'
import CreateEditArticle from './components/CreateEditArticle';
import ViewArticle from './components/ViewArticle';
import SubmittedArticles from './components/SubmittedArticles';
import Dashboard from './components/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (

    <Router>
      <div className="App">
        {/* <LoginForm/> */}
        {/* <ViewArticle/> */}

        <header>
          <Link to="/"><h1>FatMag|</h1>Greetings Username</Link>
          <Link to="/write">write</Link>
          <Link to="/your-articles">Your Articles</Link>
          <button>LogOut</button>
        </header>




        <Switch>
          <Route path="/write" exact component={CreateEditArticle} />
          <Route path="/your-articles" exact component={SubmittedArticles} />
          <Route path="/" exact component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
