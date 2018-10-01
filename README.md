## Attributions

Thanks to [this article](https://medium.com/cloudaper/simple-git-versioning-for-sketch-5d77df01571e) for getting me started with the git hooks.

## How it Works (Non-Technical)

## How it Works (Technical)

TODO: re-write and add comprehensive overview

I don't think the sketch files themselves should be tracked. It won't bother non gitters to have then show up as untracked, they won't be used to anything different. They can't commit them accidentally because the hook removes them from commits.

Just opening and saving a file in sketch results in it appearing different. If the difference were just in the file timestamps it could be taken apart and reconstructed, prior to merges and checkouts, to remove the appearance of then having changed. if they had changed they'd actually be different and cause the operation to stop.

However, if the user just opened, scrolled around, and saved the file would be actually different. That'll create nuisance conflicts. That's not acceptable.

So back to not tracking the files in git. One thing that becomes necessary is removing files not in the unzipped location, after checkouts and merges. That'll clean up old crud. Another thing that's necessary is intelligently injecting a user.json if one doesn't exist. This'll be the case after pulling a new sketch file from the remote. A last consideration is that user.json files, being untracked, may accumulate once their sketch files are removed.
They could just be purged post checkout and post merge. However if we switch from a branch that has a sketch file, to one that doesnt, and back again the user.json will get removed. That'll cause sketch to forget where the user was in the file, which may be a bad experience depending on what the designers are used to (and because it'll be inconsistent behavior since that normally won't happen). More research is needed.

It may be personal preference. Could let them accumulate ad nauseum and offer a manual tool to purge.

## To-Do

  - Auto-update hooks after merges and checkouts?
    - Probably a really good idea, but will it break anything?
