import { uniq } from 'lodash';
import jquery from 'jquery';
import jsonp from 'jsonp';
import { apiKey as key,
  url,
  sayHi,
  age,
  dog
} from './src/config';
import User, { createURL, gravatar } from './src/user';

const ryan = new User('Ryan Tvenge', 'ryan@tvenge.me', 'ryantvenge.com');
const profile = createURL(ryan.name);
const image = gravatar(ryan.email);
console.log(image);
console.log(ryan);
