# augmented-frontend Application #
Application used for tracking various fitness and nutritional activities. Currently live at [http://www.augmented.fit](http://www.augmented.fit). Site is forward masking to the deployed S3 bucket, [here](http://augmented-frontend.s3-website-us-east-1.amazonaws.com). The AWS S3 bucket is a static page. This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app), and later used the command ```npm run eject``` to customize project into current state.

## npm - Commands for Application ##
The following three commands are used for building, testing, and deploying the application.

```javascript
npm run build-dev // build unminified bundle
npm run build-prod // build minified bundle for prod
npm run deploy // send build and html in dist folder to S3 (if system has configs for S3)
npm run lint // run linter against src/js, test, and webpack directories
npm run lint-fix // run linter and fix any issues that linter can corrects
npm run start // build unminified bundle and server through webpack server
npm run test // run unit tests
```

## Folder Structure ##
```
augmented-frontend/
  assets/
    data/
    images/
  src/
    css/
    js/
      components/
      features/
      lib/
      state/
      app.jsx
    index.js
    index.html
  test/
  webpack/
```

## AWS Configuration ##

### S3 Rerouting ###
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

### S3 Authentication/Permissions ###
In order to push assets to S3, need to set up credentials on local machine. Use following tutorial: [backup to s3](https://aws.amazon.com/getting-started/tutorials/backup-to-s3-cli/).
