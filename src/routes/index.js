import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import AddNewCategoryModalContainer from '../containers/AddNewCategoryModalContainer';

import Layout from '../components/Layout';
import Theme from '../styles/Theme';
import AppComponent from '../components/AppComponent';
import CategoriesContainer from './containers/CategoriesContainer';

const Routes = () => (
  <Layout theme={Theme}>
    <AppComponent>
      <Switch>
        <Route exact path="/" component={CategoriesContainer} />
        <Route exact path="locations" component={CategoriesContainer} />
      </Switch>
    </AppComponent>
    <AddNewCategoryModalContainer />
  </Layout>
);

export default withRouter(Routes);
