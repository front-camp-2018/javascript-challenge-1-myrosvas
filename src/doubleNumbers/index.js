/* eslint-disable-next-line */
export const doubleNum = num => {
  const stringNum = num.toString();
  const firstHalf = stringNum.substr(0, stringNum.length / 2);
  const secondHalf = stringNum.substr(stringNum.length / 2, stringNum.length);
  return firstHalf === secondHalf ? num : num * 2;
};
