export const getOperatorIndex = (str: string) => {
  const addIndex = str.indexOf('+');
  const subtractIndex = str.indexOf('-');
  const multiplyIndex = str.indexOf('*');
  const divideIndex = str.indexOf('/');
  let arrayOperatorsIndex: number[] = [];
  if (addIndex >= 0) arrayOperatorsIndex = [...arrayOperatorsIndex, addIndex]
  if (subtractIndex >= 0) arrayOperatorsIndex = [...arrayOperatorsIndex, subtractIndex]
  if (multiplyIndex >= 0) arrayOperatorsIndex = [...arrayOperatorsIndex, multiplyIndex]
  if (divideIndex >= 0) arrayOperatorsIndex = [...arrayOperatorsIndex, divideIndex]
  if (arrayOperatorsIndex.length === 0) return -1;
  return Math.min(...arrayOperatorsIndex);
}