import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ListFilm from './pages/ListFilm'
import RegisterFilm from './pages/RegisterFilm'
import store from './store/index';
import { Provider } from 'react-redux';

export default function Router() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
            <Route path="/" component={ListFilm} exact/>
            <Route path="/register" component={RegisterFilm} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}