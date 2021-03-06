import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter2 } from './components/Counter2';
import { Counter } from './components/Counter';
import { Create } from './components/Create';
import { BillFetchData } from './components/BillFetchData';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/counter' component={Counter} />
    <Route path='/counter2' component={Counter2} />
    <Route path='/fetchdata' component={FetchData} />
    <Route path='/Create' component={Create} />
    <Route path='/BillFetchData' component={BillFetchData} />
</Layout>;
