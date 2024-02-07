//import * as _ from 'lodash';

/*function component() {
    const element = document.createElement('div');

   // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
        element.innerHTML = `Hello Webpack!`;

    return element;
}

document.body.appendChild(component());*/
import Arena from './Arena';
import FighterA from './FighterA';

import Juju from './Juju';
import MightyPotato from './MightyPotato';

import GrainboySlim from './grainboy';
import Carlton from './Carlton';


let grain = new GrainboySlim("Grainboy Slim");
let carl = new Carlton("Carlton");
let thisRing = new Arena(grain, carl);