import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Home from './pages/HomeOne';
import Account from './pages/Account';
import Cart from './pages/Cart';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import About from './pages/About';
import Services from './service/Services';
import Contact from './pages/Contact';
import PageNotFound from './pages/404';
import NoMAtch from './pages/404';


import BlogLeftSidebar from './blog/BlogLeftSidebar';
import BlogDetailsLeftSidebar from './blog/BlogDetailsLeftSidebar';
import * as serviceWorker from './serviceWorker';

import './index.scss';
import NewOrder from './pages/NewOrder';


class Root extends Component {
	render() {
		return (
			<BrowserRouter basename={'/'}>
				<Switch>
					<Route
						exact
						path={`${process.env.PUBLIC_URL}/`}
						component={Home}
					/>
					<Route
						exact
						path={`${process.env.PUBLIC_URL}/account`}
						component={Account}
					/>
					<Route
						exact
						path={`${process.env.PUBLIC_URL}/cart`}
						component={Cart}
					/>
					<Route
						exact
						path={`${process.env.PUBLIC_URL}/dashboard`}
						component={Dashboard}
					/>
					<Route
						exact
						path={`${process.env.PUBLIC_URL}/login`}
						component={Login}
					/>
					<Route
						exact
						path={`${process.env.PUBLIC_URL}/product`}
						component={Product}
					/>
					<Route
						exact
						path={`${process.env.PUBLIC_URL}/product-list`}
						component={ProductList}
					/>
					<Route
						exact
						path={`${process.env.PUBLIC_URL}/about`}
						component={About}
					/>
					<Route
						exact
						path={`${process.env.PUBLIC_URL}/services`}
						component={Services}
					/>

					<Route
						exact
						path={`${process.env.PUBLIC_URL}/blog-left-sidebar`}
						component={BlogLeftSidebar}
					/>
					<Route
						exact
						path={`${process.env.PUBLIC_URL}/blog-details-left-sidebar`}
						component={BlogDetailsLeftSidebar}
					/>
					<Route
						exact
						path={`${process.env.PUBLIC_URL}/contact-us`}
						component={Contact}
					/>
					<Route
						exact
						path={`${process.env.PUBLIC_URL}/new-order`}
						component={NewOrder}
					/>
					<Route
						exact
						path={`${process.env.PUBLIC_URL}/404`}
						component={PageNotFound}
					/>
					<Route component={NoMAtch} />
				</Switch>
			</BrowserRouter>
		);
	}
}

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.register();
