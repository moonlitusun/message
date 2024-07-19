/**
 * interface class message
 */
export interface Message {
  show();
  updateConfiguration();
}

/**
 * type configuration
 */
type type_place = 'top' | 'center' | 'bottom';

/**
 * interface configuration
 */
export interface Configuration {
  place?: type_place,
  distance: string,
  key?: string;
  //
  cssText?: string,
};