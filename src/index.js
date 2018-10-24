import './index.scss';

export default new class message {
  constructor() {

  }

  static instance = null;

  /**
   * 模拟set
   */
  static mock_set_instance() {
    document.body.removeChild(message.instance);
    message.instance = null;
  }

  /**
   * 创建元素
   */
  static createElement() {
    const _outter_box = document.createElement('section');
    _outter_box.classList.add('m-message');

    const _inner_box = document.createElement('div');
    _inner_box.innerText = '234';
    _inner_box.classList.add('m-message__content-box');

    _outter_box.style.top = `${window.innerHeight / 2 - _inner_box.clientHeight / 2}px`;
    message.instance = _outter_box;

    _outter_box.appendChild(_inner_box);
    document.body.appendChild(_outter_box);
    
    setTimeout(() => _inner_box.classList.add('is-fade-in'), 0);
    setTimeout(() => {
      _inner_box.classList.remove('is-fade-in');
      _inner_box.classList.add('is-fade-out');
    }, 2000);

    setTimeout(() => {
      message.destroyElement();
    }, 2500);
  }

  /**
   * 删除元素
   */
  static destroyElement() {
    if (message.instance) {
      message.mock_set_instance();
    }
  }

  /**
   * show
   * @param { string | number } content
   */
  show(content) {
    if (message.instance) {
      message.destroyElement();
    }
    message.createElement();
  }

}();