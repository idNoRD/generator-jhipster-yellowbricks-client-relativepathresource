# generator-jhipster-yellowbricks-client-relativepathresource

Assume the context-path is "/jh"

Template: https://github.com/jhipster/generator-jhipster/blob/main/generators/client/templates/src/main/webapp/content/css/loading.css.ejs

For `src/main/webapp/content/css/loading.css`

```diff
-  background-image: url('/content/images/logo-jhipster.png');
+  background-image: url('../images/logo-jhipster.png');
   background-size: contain;
   -webkit-animation: lds-pacman-3 1s linear infinite;
```

> JHipster blueprint, yellowbricks-client-relativepathresource blueprint for JHipster

[![NPM version][npm-image]][npm-url]
[![Generator][github-generator-image]][github-generator-url]
[![Samples][github-samples-image]][github-samples-url]

# Introduction

This is a [JHipster](https://www.jhipster.tech/) blueprint, that is meant to be used in a JHipster application.

# Prerequisites

As this is a [JHipster](https://www.jhipster.tech/) blueprint, we expect you have JHipster basic knowledge:

- [JHipster](https://www.jhipster.tech/)

# Installation

To install or update this blueprint:

```bash
npm install -g generator-jhipster-yellowbricks-client-relativepathresource
```

# Usage

To use this blueprint, run the below command

````bash
jhipster-yellowbricks-client-relativepathresource

You can look for updated yellowbricks-client-relativepathresource blueprint specific options by running

```bash
jhipster-yellowbricks-client-relativepathresource app --help
````

And looking for `(blueprint option: yellowbricks-client-relativepathresource)` like

## Pre-release

To use an unreleased version, install it using git.

```bash
npm install -g jhipster/generator-jhipster-yellowbricks-client-relativepathresource#main
jhipster --blueprints yellowbricks-client-relativepathresource --skip-jhipster-dependencies
```

[npm-image]: https://img.shields.io/npm/v/generator-jhipster-yellowbricks-client-relativepathresource.svg
[npm-url]: https://npmjs.org/package/generator-jhipster-yellowbricks-client-relativepathresource
[github-generator-image]: https://github.com/jhipster/generator-jhipster-yellowbricks-client-relativepathresource/actions/workflows/generator.yml/badge.svg
[github-generator-url]: https://github.com/jhipster/generator-jhipster-yellowbricks-client-relativepathresource/actions/workflows/generator.yml
[github-samples-image]: https://github.com/jhipster/generator-jhipster-yellowbricks-client-relativepathresource/actions/workflows/samples.yml/badge.svg
[github-samples-url]: https://github.com/jhipster/generator-jhipster-yellowbricks-client-relativepathresource/actions/workflows/samples.yml
