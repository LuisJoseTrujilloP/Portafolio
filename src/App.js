
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Themes"
import GlobalStyle from "./gobalStyles"

import Main from './components/Main';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import WorkPage from './components/WorkPage';
import MySkillsPage from './components/MySkillsPage';


function App() {
  return <>


<GlobalStyle  />

  <ThemeProvider theme={lightTheme}>
  <BrowserRouter>

  <Switch>

    <Route exact path="/" component={Main}/>
    <Route exact path="/about" component={AboutPage}/>
    <Route exact path="/blog" component={BlogPage}/>
    <Route exact path="/work" component={WorkPage}/>
    <Route exact path="/skills" component={MySkillsPage}/>

  </Switch>

  </BrowserRouter>

  </ThemeProvider>

  </>
 

}

export default App