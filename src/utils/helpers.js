/**
 * It takes a date object and returns a string in the format YYYY-MM-DD
 * @param {Date} date - The date to be formatted
 * @returns {string} The date in ISO format.
 */
function formatDates(date) {
  return date.toISOString().substring(0, 10);
}

/**
 * It takes an array of objects and returns the highest id value + 1
 * @param {array} data - The array of objects that we want to search through.
 * @returns {number} The max id number in the data array + 1.
 */
function searchIdMax(data) {
  let max = 0;
  data.forEach((obj) => {
    if (obj.id > max) {
      max = obj.id;
    }
  });
  return max + 1;
}

export { formatDates, searchIdMax };
