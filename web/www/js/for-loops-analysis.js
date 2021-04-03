/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Viren Sajju Dhanwani Dhanwani
 * @author José Daniel Escánez Expósito
 * @author Marta Julia González Padrón
 * @date 2021/04/03
 * @brief Time analysis with five different 'for loops' variants for arrays:
 *  for (let i = 0; i < arr.length; ++i)
 *  arr.forEach((v, i) => { ... })
 *  arr.every((i) => { ... })
 *  for (const v of arr)
 *  for (const v in arr)
 * @see https://thecodebarbarian.com/for-vs-for-each-vs-for-in-vs-for-of-in-javascript
 */

'use strict';

const ARRAY_LENGTH = 20000000;
const array = Array.from({length: ARRAY_LENGTH}, () => Math.floor(Math.random() * 1000000));


const ALGORITHMS = [
  (element) => { return Math.pow(element, 5) },
  (element) => { return Math.log(element) },
  (element) => { return Math.sqrt(element) },
  (element) => { return element + Math.random() },
  (element) => { return element - Math.random() },
  (element) => { return element * Math.random() },
  (element) => { return element / Math.random() + 1 },
  (element) => { return Math.abs(element) },
  (element) => { return Math.sin(element) },
  (element) => { return Math.cos(element) },
  (element) => { return Math.tan(element) },
  (element) => { return Math.asin(element) },
  (element) => { return Math.acos(element) },
  (element) => { return Math.atan(element) },
  (element) => { return Math.sinh(element) },
  (element) => { return Math.cosh(element) },
  (element) => { return Math.atan2(element); }
];

/**
 * @desc A really complex function that iterates an array of functions
 * recursively performing many mathematical calculations
 * @param {number} element
 * @param {number} [steps = 0]
 * @return {number}
 */
const reallyComplexFunction = (element, steps = 0) => {
  if (steps++ >= ALGORITHMS.length - 1) return element;
  const calculation = reallyComplexFunction(ALGORITHMS[steps].call(element), steps);
  return calculation;
};

/**
 * @desc Function that execute four different loops for arrays that are
 * available in Javascript and compare their execution's time
 */
function comparisonOfLoops() {
  /**
   * Analysis of the classic for loop
   */
  let t0 = performance.now();
  for (let i = 0; i < ARRAY_LENGTH; i++) {
    reallyComplexFunction(array[i]);
  }
  let t1 = performance.now();
  const classicForTime = (t1 - t0) / 1000;

  /**
   * Analysis of the forEach() for iterating
   */
  t0 = performance.now();
  array.forEach((element) => reallyComplexFunction(element));
  t1 = performance.now();
  const forEachTime = (t1 - t0) / 1000;

  /**
   * Analysis of the every() method for iterating
   */
  t0 = performance.now();
  array.every((i) => reallyComplexFunction(i) != undefined);
  t1 = performance.now();
  const everyTime = (t1 - t0) / 1000;

  /**
   * Analysis of the 'for ... of ...' loop
   */
  t0 = performance.now();
  for (const element of array) {
    reallyComplexFunction(element);
  }
  t1 = performance.now();
  const forOfTime = (t1 - t0) / 1000;

  /**
   * Analysis of the 'for ... in ...' for iterating (intended for objects)
   */
  t0 = performance.now();
  for (const element in array) {
    reallyComplexFunction(element);
  }
  t1 = performance.now();
  const forInTime = (t1 - t0) / 1000;

  alert(`Execution time of the different loops with an array of ${ARRAY_LENGTH.length} elements:
  For loop: ${classicForTime} seconds
  For-Each loop: ${forEachTime} seconds
  Every loop: ${everyTime} seconds
  For-of loop: ${forOfTime} seconds
  For-in loop: ${forInTime} seconds`);
};
