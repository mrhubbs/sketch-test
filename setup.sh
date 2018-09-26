#!/bin/sh

# install 3rd-party software
brew upgrade python3 node
# install any npm modules
npm install

# install hooks
cp hooks/* .git/hooks/
chmod +x .git/hooks/{pre-commit,post-checkout,post-merge}
