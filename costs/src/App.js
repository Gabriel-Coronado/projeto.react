import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './components/Home';
import NewProject from './components/NewProject';
import Company from './components/Company';
import Contact from './components/Contact';

import Container from './components/layout/Container';

function App() {
    return(
     <Router>
       <div>
         <Link to="/">Home</Link>
         <Link to="/contact">Contato</Link>
         <Link to="/company">Empresa</Link>
         <Link to="/newproject">Novo Projeto</Link>
       </div>
       <Switch>
          <Container>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/company">
              <Company/>
            </Route>
            <Route exact path="/contact">
              <Contact/>
            </Route>
            <Route exact path="/newproject">
              <NewProject/>
            </Route>
          </Container>
       </Switch>
     </Router>
    ) 
}

export default App;
