import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Theme from '../styles/Theme';
import AppComponent from '../components/AppComponent';
import CategoriesContainer from './containers/CategoriesContainer';
import LocationsContainer from './containers/LocationsContainer';
import AddNewCategoryModalContainer from '../containers/AddNewCategoryModalContainer';
import LocationModalContainer from '../containers/LocationModalContainer';

const Routes = () => (
  <Layout theme={Theme}>
    <AppComponent>
      <Switch>
        <Route exact path="/" component={CategoriesContainer} />
        <Route exact path="/locations" component={LocationsContainer} />
      </Switch>
    </AppComponent>
    <AddNewCategoryModalContainer />
    <LocationModalContainer />
  </Layout>
);

export default withRouter(Routes);
