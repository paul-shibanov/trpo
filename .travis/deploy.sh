#!/usr/bin/env sh
$(npm bin)/set-up-ssh --key "$encrypted_2265753103d1_key" --iv "$encrypted_2265753103d1_iv" --path-encrypted-key ".travis/github_deploy_key.enc"
git config --global user.email "$GITHUB_EMAIL"
git remote set-url origin git@github.com:paul-shibanov/trpo.git
git push origin --delete gh-pages
ng github-pages:deploy
