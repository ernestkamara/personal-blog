---
path: 'How to fix Unknown command: cask'
date: 2021-12-03T08:27:27.094Z
title: 'How to fix Unknown command: cask on macOS Monterey.'
description: 'How to fix Unknown command: cask on macOS Monterery (v.12.0.1))'
---
![](https://cdn-images-1.medium.com/max/1600/0*yugAde-wh8AQKgsv)

Photo by [Ken Suarez](https://unsplash.com/@kensuarez?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)

I recently bumped into an *unknown command error* while trying to install the Firefox macOS application using a CLI workflow with Homebrew.

> Disclaimer: This post assumes that [Homebrew](https://brew.sh/) is installed on your machine, if not I suggest that you install it from [brew.sh](https://brew.sh/) before applying this fix . Also, this fix has been tested to work on macOS Monterey version 12.0.1, but should work fine on other versions. If the issue is still not solved, please leave a comment or check out the references at the bottom.



For starters, Cask is an extension of Homebrew a.k.a `brew` for installation uninstallation and management of GUI macOS applications such as Discord, Google Chrome and Firefox.

![](https://cdn-images-1.medium.com/max/1600/0*35Mp8EiLU0CMoouY.png)

With Cask, you don’t need to *“To install, drag this icon…”*as you would normally do when installing a new macOS application.

#### Pre & Post Homebrew Cask migration

Initially, to install a new macOS application with Cask, you first [tap (Third-Party Repositories)](https://docs.brew.sh/Taps) Homebrew with.  `$ brew tap homebrew/cask-versions` followed by. `$ brew cask install <macos-application-name>`.



> The `brew tap` command adds more repositories to the list of formulae that Homebrew tracks, updates, and installs from.

In my case;

```
$ brew cask install firefox 
Error: Unknown command: cask
```

Turns out, Cask has been moved to [Homebrew](https://github.com/Homebrew/homebrew-cask) making it easier to install many macOS applications.

Tapping Cask should now work running the command below:

```
$ brew tap homebrew/cask-versions
==> Tapping homebrew/cask-versions
Cloning into '/usr/local/Homebrew/Library/Taps/homebrew/homebrew-cask-versions'...
remote: Enumerating objects: 241396, done.
remote: Total 241396 (delta 0), reused 0 (delta 0), pack-reused 241396
Receiving objects: 100% (241396/241396), 61.59 MiB | 7.18 MiB/s, done.
Resolving deltas: 100% (166739/166739), done.
Tapped 205 casks (235 files, 68.3MB).
```

Now, to install any casks available formulae, simply run this command.

`$ brew install <formulae>` or `$ brew install --cask <formulae>`

In my case:

```
$ brew install firefox
==> Downloading https://download-installer.cdn.mozilla.net/pub/firefox/releases/94.0.2/mac/en-US/Fi
######################################################################## 100.0%
==> Installing Cask firefox
==> Moving App 'Firefox.app' to '/Applications/Firefox.app'
🍺  firefox was successfully installed!
```

> To browse all casks available formulaes the **[cask tap](https://github.com/Homebrew/homebrew-cask)** via the **[Homebrew](https://brew.sh/)**checkout <https://formulae.brew.sh/cask/>

References:

* [Homebrew/brew.sh](https://brew.sh/)
* [Homebrew Tap](https://docs.brew.sh/Taps)
* [Homebrew Cask](https://github.com/Homebrew/homebrew-cask)