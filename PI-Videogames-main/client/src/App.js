import './App.css';
import {Route} from 'react-router-dom'
import { Home, Landing, Form, Detail } from './views';

function App() {
  return (
    <div className="App">
      
      <Route exact path={'/'} component={Landing} />
      <Route path={'/home'} render={() => <Home />} />
      <Route exact path={'/detail'} component={Detail} />
      <Route exact path={'/create'} component={Form} />

    </div>
  );
}

export default App;
