import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './client/views/homePage.jsx';
import Electronics from './client/views/electronicsView.jsx';
import Fashion from './client/views/fashionView.jsx';
import Appliances from './client/views/AppliancesView.jsx';
import DealsOfTheDay from './client/views/DealsOfTheDay.jsx';
import ProductDisplay from './client/views/productDisplayPage.jsx';
import ProductConfirmation from './client/views/ProductConfirmationPage.jsx';
import DataEntryProduct from './client/dataEntryPortalViews/Product.jsx';
import DataEntryDc from './client/dataEntryPortalViews/Dc.jsx'
import ReactDom from 'react-dom';
import CartItem from './client/views/cartItem.jsx';
import Header from './client/views/header.jsx';

import {Router, Route, IndexRoute, hashHistory} from 'react-router';
ReactDOM.render(
  <div>
  <Router history={hashHistory}>
    <Route path='/' component={Header}>
      <IndexRoute component={HomePage}/>
      <Route  path='/electronics' component={Electronics}/>
      <Route path='/fashion' component={Fashion}/>
      <Route exact path='/appliances' component={Appliances}/>
      <Route path='/deals' component={DealsOfTheDay}/>
      <Route path='/productInformation' component={ProductDisplay}/>
      <Route path='/cartItem' component={CartItem}/>
      <Route path='/buyProduct' component={ProductConfirmation}/>
    </Route>
  </Router>
</div>, document.getElementById('app'));
