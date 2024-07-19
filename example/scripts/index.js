import message from '../../src/index';

console.log(message);
const valIpt = document.getElementById('valIpt'),
  cssIpt = document.getElementById('cssIpt'),
  hasConfigBtn = document.getElementById('hasConfigBtn'),
  updateConfigBtn = document.getElementById('updateConfigBtn'),
  noConfigBtn = document.getElementById('noConfigBtn');

const config = {
  // position
  place: 'top', // top | center | bottom
  distance: '50px', // 50px | 30% (When `place = center` don't can ignore)

  /**
   * css Text
   */
  cssText: 'background: rbga(0, 0, 0); color: red', // inline style
};

hasConfigBtn.onclick = function () {
  const value = valIpt.value;
  const config = JSON.parse(cssIpt.value || '{}');

  message.show(value || 'no Data', 1000, config);
};

updateConfigBtn.onclick = function () {
  cssIpt.value = JSON.stringify(config);

  message.updateConfiguration(config);
};

noConfigBtn.onclick = function () {
  const value = valIpt.value;
  const time = Math.floor(Math.random() * 10000);

  message.show(value || `no Data${time}`, time);
};
