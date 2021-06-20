import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import MainPage from "./pages/MainPage";
import SecondPage from "./pages/SecondPage";

function App() {
    // Вторая задача
    function solve(books) {
        let answer = 1;
        for (let i = 0; i<books.length; i++) {
            if(i !== 0) {
                if(books[i] >= i) {
                    answer++
                } else {
                    return answer
                }
            }
        }
    }
    console.group('Решение второй задачи')
    console.log(solve([1,1,1,2,2]), 'Первый пример')
    console.log(solve([1,4,1,3]), 'Второй пример')
    console.groupEnd()
  return (
      <Router>
              <Header />
              <main>
                  <Switch>
                      <Route exact path="/" component={MainPage} />
                      <Route exact path="/:imdbId" component={SecondPage} />
                      <Redirect to="/" />
                  </Switch>
              </main>
              <Footer />
      </Router>
  );
}

export default App;
