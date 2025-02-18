/**
 * 将对象转为query
 * @param {Object} query
 */
export const stringifyQuery = query => {
  try {
    return Object.keys(query)
      .filter(key => query[key] !== undefined && query[key] !== null)
      .map(key => `${key}=${query[key]}`)
      .join('&');
  } catch (err) {
    return '';
  }
};