import './App.css';
import Repo from './Pages/Repo';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Viewrepo from './Pages/Viewrepo';

function App() {
  return (
    <div className="App">

     <BrowserRouter>
     <Switch>
     <Route exact path="/" component={Repo}>      
      </Route>
      <Route exact path="/view/:login/:name" component={Viewrepo}>
      </Route>
      </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
