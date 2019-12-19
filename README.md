# BangGunDo-Demo
This is Sharing Code in Real-time with Developers.

# Use Next.js Plugins

## Adding a plugin

> :warning: Before adding a plugin in this repository please create an issue to establish if it should be an official plugin or not.

1. Create a directory under the `packages` folder
2. Add `package.json` to the directory with these contents:
```
{
    "name": "@phongsakornm/banggundo",
    "version": "0.1.0",
    "private": true,
    "main": "index.js",
    "license": "MIT"
}
```

3. Add a `index.js` file with the plugin code
4. Add a `readme.md` explaining what the plugin does, how to install, and how to configure it
5. Submit a pull request


## Available Scripts

In the project directory, you can run:

### `npm install`
### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


### `npm run deploy`

Builds the app for production to the `out` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deploy Code to NETLIFY
URL DEMO : https://www.banggundo.ml/
