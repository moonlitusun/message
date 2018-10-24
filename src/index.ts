import './index.scss';

export default new class message {
  constructor() {

  }

  static instance = null;

  private configuration = {
    // position
    place: 'center', 
    distance: 0,

  };

  /**
   * 创建元素
   */
  private createElement() {
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
      this.destroyElement();
    }, 2500);
  }

  /**
   * 删除元素
   */
  private destroyElement(): void {
    if (message.instance) {
      document.body.removeChild(message.instance);
      message.instance = null;
    }
  }

  /**
   * show
   * @param { string | number } content
   */
  public show(content: any = '', duration: number = 2000): void {
    if (!content) return;

    if (message.instance) {
      this.destroyElement();
    }

    this.createElement();
  }

}();