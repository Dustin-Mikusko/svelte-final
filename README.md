### Whoever Svelte It - Harvard Art Museum Edition

## Overview

Want to visit the Harvard Art Museum, but don't have time? Well this app has you somewhat covered! Whoever Svelte It is a simple app that consumes the [Harvard Art Museum API](https://github.com/harvardartmuseums/api-docs) and displays various articfacts from several centuries. This project was treated as an interview take home challenge, so I allotted myself roughly 48 hours to complete it. 


## Get started

Clone down this repo, then run:

```
npm install
```

To see the app in action, run:

```
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see the app running.


## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for *any* path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```


## Deploying to the web

### With [now](https://zeit.co/now)

Install `now` if you haven't already:

```bash
npm install -g now
```

Then, from within your project folder:

```bash
cd public
now deploy --name my-project
```

As an alternative, use the [Now desktop client](https://zeit.co/download) and simply drag the unzipped project folder to the 
