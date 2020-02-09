import {
  configure,
  addDecorator,
  addParameters
} from '@storybook/react';

const req = require.context("../src", true, /\.bojagi\.js$/);
const loadStories = () => {
  req.keys().forEach(req);
}

configure(loadStories, module);

import decorator from '../.bojagi/decorator.js';

addDecorator(decorator);
