# augmented-frontend ReactJS Application #
Web site live at [http://www.augmented.fit](http://www.augmented.fit). Live website is forward masking to the deployed S3 bucket, [here](http://augmented-frontend.s3-website-us-east-1.amazonaws.com). The AWS S3 bucket is a static page. <br/>
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). <br/> 
Link for some information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Installing locally ##
Pull the application down, and run the following commands:

```javascript
npm install
npm install react-bulma-components
```

## npm - Commands for Application ##
The following three commands are used for building, testing, and deploying the application.

```javascript
npm run build
npm run start
npm run deploy
```

The ```build``` command builds the latest version of the application. The ```start``` deploys the application at localhost:3000. The ```deploy``` command copies the latest build of the applications to the live S3 bucket.

## Folder Structure ##

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
      fitness/
      general/
      layout/
      nutrition/
    styles/
      css/
```

## S3 Rerouting ##
Since Augmented Frontend is a Single Page Application (SPA), routing is done on the browser side. This means that the S3 bucket has to be configured to be rerouted. In the S3 buckets portal on AWS, under 'Properties' tab, in the 'Static website hosting' section, a 'Redirection rule' needs to be added to reroute all pages to the home page. This is a temporary solution while application is in its early stages. A Stack Overflow article detailing different solutions to routing can be view [here](https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writting-manually), in order to come up with application specific solution for routing.

```xml
<RoutingRules>
  <RoutingRule>
    <Condition>
      <KeyPrefixEquals>any/route</KeyPrefixEquals>
    </Condition>
    <Redirect>
      <ReplaceKeyPrefixWith/>
    </Redirect>
  </RoutingRule>
</RoutingRules>
```
