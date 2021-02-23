import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {Route, Switch} from 'react-router-dom';

export const routes = [
	{
		path: '/',
		exact: true,
		name: 'Readme',
		component: React.lazy(() => import('../dev_site/pages/introduction')),
	},
];

const MainRoute = () => (
		<Switch>
			{routes.map((route) => (
					<Route
							key={route.name} exact={!!route.exact} path={route.path}
							render={() => <route.component />} />
			))}
		</Switch>
);

export default MainRoute;
