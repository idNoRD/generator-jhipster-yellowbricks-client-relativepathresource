# generator-jhipster-yellowbricks-client-relativepathresource

A [JHipster](https://www.jhipster.tech/) blueprint that makes the loading screen logo path relative in `loading.css`.

[![NPM version][npm-image]][npm-url]
[![Generator][github-generator-image]][github-generator-url]
![GitHub Maintained](https://img.shields.io/maintenance/yes/2026)

## JHipster source

- Generator: [`generators/client`](https://github.com/jhipster/generator-jhipster/tree/main/generators/client)
- Template: [`loading.css.ejs`](https://github.com/jhipster/generator-jhipster/blob/main/generators/client/templates/src/main/webapp/content/css/loading.css.ejs)

## What it does

Patches `src/main/webapp/content/css/loading.css` during generation to replace the absolute logo URL with a relative one:

```diff
- background-image: url('/content/images/logo-jhipster.png');
+ background-image: url('../images/logo-jhipster.png');
```

This ensures the loading screen logo loads correctly when the app is deployed under a non-root context path.

## Prerequisites

- Node.js `^22.18.0 || >=24.11.0`
- JHipster 9

## Installation

```bash
npm install -g generator-jhipster-yellowbricks-client-relativepathresource
```

## Usage

No configuration is needed. Run JHipster with this blueprint:

```bash
# Standard generator
jhipster --blueprints yellowbricks-client-relativepathresource

# With JDL
jhipster import-jdl your-app.jdl --blueprints yellowbricks-client-relativepathresource
```

[npm-image]: https://img.shields.io/npm/v/generator-jhipster-yellowbricks-client-relativepathresource.svg
[npm-url]: https://npmjs.org/package/generator-jhipster-yellowbricks-client-relativepathresource
[github-generator-image]: https://github.com/idNoRD/generator-jhipster-yellowbricks-client-relativepathresource/actions/workflows/generator.yml/badge.svg
[github-generator-url]: https://github.com/idNoRD/generator-jhipster-yellowbricks-client-relativepathresource/actions/workflows/generator.yml
