const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (!Array.isArray(members) || members.length == 0) return false;
  let res = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] !== "string") continue;
    let member = members[i].trim().toUpperCase().substr(0, 1);
    res.push(member);
    res1 = res.sort().join("");
  }
  console.log(res1);
  return res1;
}
createDreamTeam(["Matt", "Ann", "Dmitry", "Max"]);

module.exports = {
  createDreamTeam,
};
