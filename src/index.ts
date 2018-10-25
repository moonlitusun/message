/// <reference path="./additional.d.ts" />

import './index.scss';
//
import { debounce } from './utils/debounce';
//
import { Imessage, Iconfiguration } from './interface';

class message implements Imessage {

  private _outter_box: HTMLElement = null;
  private _inner_box: HTMLElement = null;

  private configuration: Iconfiguration = {
    // position
    place: 'center',
    distance: '50%',
    // cssText
    // cssText: '',
  };

  /**
   * create elment
   */
  private createElement(): void {
    if (!this._outter_box) {
      this._outter_box = document.createElement('section');
      this._outter_box.classList.add('m-message');
      document.body.appendChild(this._outter_box);
    }
    
    const _inner_box: HTMLElement = document.createElement('div');
    _inner_box.classList.add('m-message__content-box');

    this._outter_box.appendChild(_inner_box);
    this._inner_box = _inner_box;
  }

  /**
   * setAttribute
   */
  private setAttribute(content: any = '', duration: number, configuration: object): void {
    const { _outter_box, _inner_box } = this;
    const active_configuration: any = Object.assign({}, this.configuration, configuration);
    
    // read content
    _inner_box.innerText = content;

    // read position configuration
    const {
      place,
      distance,
    } = active_configuration;

    if (place === 'center') {
      _outter_box.classList.add('l-center');
    } else {
      _outter_box.style[place] = distance;
      _outter_box.classList.remove('l-center');
    }

    // read style configuration
    const { cssText = ' ' } = active_configuration;
    if (cssText) _inner_box.style.cssText = cssText;
   
    // read Animation configuration
    const len: number = this._outter_box.children.length;
    const active_duration: number = duration + len * 500;

    setTimeout(() => _inner_box.classList.add('is-fade-in'), 0);
    setTimeout(() => {
      _inner_box.classList.remove('is-fade-in');
      _inner_box.classList.add('is-fade-out');
    }, active_duration);

    setTimeout(() => {
      this.destroyElement();
    }, active_duration + 500);
  }

  /**
   * remove element
   */
  private destroyElement(): void {
    if (this._outter_box) {
      const _inner_box_list = this._outter_box.children;

      // remove
      const firstChild: any = _inner_box_list[0];
      this._outter_box.removeChild(firstChild);

      if (_inner_box_list.length === 0) {
        document.body.removeChild(this._outter_box);
        this._outter_box = null;
        this._inner_box = null;
      }
    }
  }

  /**
   * update global configuration
   * @param { object } configuration
   */
  public updateConfiguration(configuration: object = {}): object {
    Object.assign(this.configuration, configuration);

    return this.configuration;
  }

  /**
   * show element
   * @param { string | number } content
   * @param { number } duration
   * @param { object } configuration
   */
  @debounce(1000)
  public show(content: string | number = '', duration: number = 2000, configuration: object = {}): void {
    if (!content) return;

    this.createElement();
    this.setAttribute(content, duration, configuration);
  }

};

export default new message();