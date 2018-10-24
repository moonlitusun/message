import message from '../../src/index';

var btn = document.getElementById('btn');

btn.onclick = function () {
  message.show();
}