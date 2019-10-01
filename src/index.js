import _ from 'lodash';
function component(){
    const element = document.createElement('div');
    const array = ['Hello', 'webpack'];
    // lodash はアンスコを使う
    element.innerHTML = _.join(array, ' ');
    return element;
};

document.body.appendChild(component());