const GitHub = require('github-api');
const {alertErr} = require('./cli-tools');

module.exports = function addBranches(repoName, prefs) {

  if (!prefs.branches) return alertErr('no branches provided. either set with "tai team branches.json" or supply "-b $(cat branches.json)"')
	let branches = JSON.parse(prefs.branches);
	console.log(branches);
	const gh = new GitHub({ token: prefs.github_token });
	const repo = gh.getRepo(prefs.github_org, repoName);
	const promises = branches.map(b => repo.createBranch('master', b));
	return Promise.all(promises);
}
