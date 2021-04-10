import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm'
import CreateEditArticle from './components/CreateEditArticle';
import ViewArticle from './components/ViewArticle';
import SubmittedArticles from './components/SubmittedArticles';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      {/* <LoginForm/> */}
      {/* <CreateEditArticle/> */}
      {/* <ViewArticle/> */}
      {/* <SubmittedArticles/> */}
      <Dashboard/>
    </div>
  );
}

export default App;
