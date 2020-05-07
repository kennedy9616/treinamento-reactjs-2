import * as React from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage.component';
import Restaurant from './pages/Restaurant/Restaurant.component';
import Sobre from './pages/Sobre/Sobre.component'
import Empresas from './pages/Empresas/Empresas.component'
import Entrar from './pages/Entrar/Entrar.component'
import {Switch, Route} from 'react-router-dom'


function App() {

  
  return (
    //<div class="jumbotron-fluid"></div>
    <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/restaurants/:handle' component={Restaurant}/>
      <Route exact path='/Sobre' component={Sobre}/>
      <Route exact path='/Empresas' component={Empresas}/>
      <Route exact path='/Entrar' component={Entrar}/>
    </Switch>
  );
}

export default App;
