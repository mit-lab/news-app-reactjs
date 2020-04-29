import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"


// components
import Template from './Template';



function SwitchLogic() {
  return (
    <div className="App">
      <Router>

        <Switch>

          {/*Автоматичское создание путей СДЕЛАТЬ
          т.е. иначе проходишья map по slug. Проверяешь 
          через ввод в адрес название slug. Если Открылась компонента
          TemplateRubric, то работает */}
          <Route path="/sport">
            <Template />
          </Route>

          <Route path="/science">
            <Template />
          </Route>

          <Route path="/business">
            <Template />
          </Route>
           {/*автоматичское создание путей СДЕЛАТЬ*/}

          <Route path="/">
            <Template />
          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default SwitchLogic;
