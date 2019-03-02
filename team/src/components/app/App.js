// @flow
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from "../home/Home";
import { Clients } from "../clients/Clients";
import { Contacts } from "../contacts/Contacts";
import Products from "../products/Products";
import AppMenu from '../menu/AppMenu';

const NavigationItems = [
  {
    label: 'HOME',
    id: 'nav_home',
    to: '/',
    showMenu: true,
    exact: true,
    icon: 'inbox',
    cmp: Home
  },
  {
    label: 'PRODUCTS',
    to: '/products',
    id: 'nav_products',
    showMenu: true,
    exact: true,
    icon: 'inbox',
    cmp: Products
  },
  {
    label: 'PRODUCTS',
    to: '/products/:category(tech|services|office)',
    id: 'nav_products',
    showMenu: false,
    exact: true,
    icon: 'inbox',
    cmp: Products
  },
  {
    label: 'CLIENTS',
    to: '/clients',
    id: 'nav_clients',
    showMenu: true,
    exact: true,
    icon: 'inbox',
    cmp: Clients
  },
  {
    label: 'CONTACT',
    to: '/contact',
    id: 'nav_contact',
    showMenu: true,
    exact: true,
    icon: 'inbox',
    cmp: Contacts
  }
];

class App extends Component {
  render() {
    const routes = NavigationItems.map((item) => {
      return (
        <Route exact={item.exact} path={item.to} component={item.cmp} key={item.id} />
      )
    });
    return (
      <div>
        <header>
          <AppMenu navigation={NavigationItems.filter((item) => item.showMenu)} />
        </header>
        <Switch>
          {routes}
        </Switch>
      </div>
    );
  }
}

export default App;
