const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  var cleared = Array();
  // members = members.sort();
  for (var i = 0; i < members.length; i++) {
    if (typeof members[i] != 'string') {
      continue;
    }
    cleared.push(members[i].trim().charAt(0).toUpperCase());
  }
  return cleared.sort().join('');
};
