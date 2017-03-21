import { uniq } from 'lodash';
import jquery from 'jquery';
import jsonp from 'jsonp';
import { apiKey as key,
  url,
  sayHi,
  age,
  dog
} from './src/config';

console.log(key);
console.log(url);

sayHi('Ryan');

const ages = [1, 1, 4, 52, 12, 4];

console.log(uniq(ages));
