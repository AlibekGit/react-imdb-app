import React, { Suspense } from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import SecondPage from './pages/SecondPage';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Suspense fallback={<div>Идет загрузка</div>}>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/:imdbId" component={SecondPage} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
