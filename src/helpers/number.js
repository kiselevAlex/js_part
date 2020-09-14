/**
 * @description округление до сотых
 * 
 * @param {Number} value 
 */
export const round = value => Math.ceil(value* 100) / 100;

/**
 * @description рандом от min до max
 * 
 * @param {Number} min 
 * @param {Number} max 
 */
export const random = (min, max) => Math.random() * (max - min) + min;