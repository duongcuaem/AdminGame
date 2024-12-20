export default (value: any) =>
  String(value)
    .split(',')
    .map(item => Number(item.trim()))
    .filter(num => !isNaN(num))
