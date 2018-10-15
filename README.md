Currently deployed [here](http://augmented-frontend.s3-website-us-east-1.amazonaws.com), using AWS S3 bucket static page.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). </br> 
Link for some information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## npm commands for applicationn
The following three commands are used for building, testing, and deploying the application.

```
npm run build
npm run start
npm run deploy
```

The ```build``` command builds the latest version of the application. The ```start``` deploys the application at localhost:3000. The ```deploy``` command copies the latest build of the applications to the live S3 bucket.

## Folder Structure

After creation, your project should look like this:

```
augmented-frontend/
  README.md
  package.json
  node_modules/
  public/
    index.html
    favicon.ico
  src/
    App.jsx
    App.test.js
    index.js
    logo.svg
    components/
    styles/
      App.css
      index.css
      css/
      fonts/
      stylus/
```
