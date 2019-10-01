import _ from 'lodash';
import * as utilities from './utilities'; //.jsは省略可能
import Tiger from './utilities';
console.log(utilities.nijou(3));
console.log(utilities.NAME);
console.log(Tiger.say());
function component(){
    const element = document.createElement('div');
    const array = ['Hello', 'webpack', '!'];
    // lodash はアンスコを使う
    element.innerHTML = _.join(array, ' ');
    return element;
};

document.body.appendChild(component());
