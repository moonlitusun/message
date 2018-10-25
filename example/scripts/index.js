import message from '../../src/index';

var hasbtn = document.getElementById('hasbtn');
var configbtn = document.getElementById('configbtn');
var nobtn = document.getElementById('nobtn');

const config = {
  // position
  place: 'top', // top | center | bottom
  distance: '50px', // 50px | 30% (When `place = center` don't can ignore)

  /**
   * css Text
   */
  cssText: 'background: rbga(0, 0, 0); color: red', // inline style
};

hasbtn.onclick = function () {
  message.show('bad request！', 5000, config);
}

configbtn.onclick = function() {
  message.updateConfiguration(config);
}

nobtn.onclick = function () {
  message.show('bad request!');
}