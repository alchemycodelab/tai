tai (TA + AI)
===

`tai` is a cli tool available via `npm i tai -g` that assists in
setting up and closing assignment github repos.

Current usage is `Career Track` focused:
    * Students are expected to "own" their repo
    * Github PR infrastructure leveraged for code feedback
    * Doesn't mean it couldn't be adapted for Bootcamp classes

Workflow:

## Configuration
* Use `tai config`
    * Store your Github Organization and an API token
    * (Not tested with 2-factor GH auth)
* Use `tai team` for default branch list (student github accounts)

## For each lab assignment

* Create branches with `tai setup-branches` command
    * Configured with `tai team`
    * Or, ad-hoc with `setup` command (pairing teams, etc)
    * Turns on TravisCI hooks

* Student/team:
    * fork
    * code
    * PR
* Travis runs `npm test`!
    * (Next phase: auto-deployed to heroku)
* Leverage Github PR
    * Grade Assignment, commenting in PR
    * Students can resubmit during grading phase, or after
    * Merge PR when grading complete

## Follow-on labs
* student codes, PR's
* (make sure previous PR's are merged)

## Close out
* Github does not count commits for heatmap unless:
    * Commits are merged into `master` (or whatever default branch is for repo)
    * Of non-forked repo
* `tai close` merges all student branches into named folder in master
    
## Thank You!
* Annika Hagelin
* David Goodwin
* Andrew Bodey