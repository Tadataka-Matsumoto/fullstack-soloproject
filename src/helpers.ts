/**
 * YOU DON'T HAVE TO MODIFY THIS FILE
 * UNLESS ABSOLUTELY NECESSARY.
 *
 * This file has a lot of commonly used
 * functions that may be of use. Particularly, send.
 */

export function send(res, code, data, json = true) {
  /**
   * Send a response
   */
  const action = json ? "json" : "send";
  res.status(code)[action](data);
}

export function filter(query, data) {
  /**
   * Filter prefectures in memory based on flower
   */
  return "flower" in query
    ? data.filter(prefecture => prefecture.flower === query.flower)
    : data;
}

export function testProp(obj, prop) {
  /**
   * Check if property exists and contains at least one character
   */
  return prop in obj && !!/\S+/.test(obj[prop]);
}
