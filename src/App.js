import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { Route, Switch } from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import Invoice from './components/Invoice';
import Company from './components/Company';
import ListProducts from './components/ListProducts';
import CreateInvoice from './components/CreateInvoice';
import CreateCompany from './components/CreateCompany';

function App() {
  return (
      <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/invoice" component={Invoice} />
            <Route path="/company" component={Company} />
            <Route path="/listprod" component={ListProducts} />
            <Route path="/createinvoice" component={CreateInvoice} />
            <Route path="/createcompany" component={CreateCompany} />
          </Switch>
      </div>
  );
}

export default App;
