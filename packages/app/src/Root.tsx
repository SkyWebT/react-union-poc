import './Root.css';

import React from 'react';
import { Union } from 'react-union';

import routes from './routes';

const Root = () => <Union routes={routes} />;

export default Root;
