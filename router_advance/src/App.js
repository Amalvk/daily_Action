import { Redirect, Route,Switch } from 'react-router-dom';
import './App.css';
import Allquotes from './pages/AllQuotes';
import NewQuotes from './pages/NewQuotes';
import QuoteDetails from './pages/QuoteDetails';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
    <Switch>
      <Route path='/' exact>
        <Redirect to='/quotes' />
      </Route>

      <Route path='/quotes' exact>
        <Allquotes/>
      </Route>

      <Route path='/quotes/:quoteId'>
        <QuoteDetails/>
      </Route>

      <Route path='/new-quote'>
       <NewQuotes/>
      </Route>

     </Switch>
     </Layout>
    
  );
}

export default App;
