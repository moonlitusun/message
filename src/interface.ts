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
export interface Iconfiguration {
  place: type_place,
  distance: string,
  //
  cssText?: string,
};