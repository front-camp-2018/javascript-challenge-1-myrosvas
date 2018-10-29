/* eslint-disable-next-line */
const getSum = strNum => {
  const summedNum = strNum.split('').reduce((a, b) => Number(a) + Number(b), 0);
  return summedNum;
};


export const sortByWeight = arr => {
  return arr.sort((a, b) => getSum(a) - getSum(b));
};

