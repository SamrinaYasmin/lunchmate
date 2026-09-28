# Project workflow

- For each requested app or website change, finish the implementation and review the result before committing.
- Commit completed changes on `main` with Git author name `samrina.yasmin` and email `samrina.yasmin1@gmail.com`.
- Push each successful commit to `origin` (`https://github.com/SamrinaYasmin/lunchmate.git`) as part of the same task. Do not push a change that is unfinished or known to be broken.
- The GitHub Pages workflow in `.github/workflows/deploy-pages.yml` deploys on every push to `main`. After pushing, check the Actions run and confirm the published page responds successfully before saying it is live.
- Never add the personal access token, login details, or other credentials to the repository, commit messages, or command output. Use a credential only from a location the user explicitly provided.
