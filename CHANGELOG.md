# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.32.1] 2023-11-25

### Changed

- updated base href for submain routing

## [0.31.0] 2022-05-14

### Added

- [SimpleTable] allowing hard setting row per table page

## [0.30.1] 2022-05-08

### Added

- liveness checks on app start and interval

### Changed

- browserlist update

### Fixed

- set api request headers correctly

## [0.30.0] 2022-05-08

### Added

- externals port - on the go map url

### Changed

- added Bearer token to all modify/add requests

## [0.29.0] 2022-02-27

### Added

- list of external portals in help tab

### Security

- update vulnerable packages, major version bump url-loader and node-forge

## [0.28.2] 2021-12-10

### Fixed

- Nutrients report resets option description on submit

## [0.28.1] 2021-10-17

### Fixed

- Table pagination correctly displays number of records when "All" per page is selected

## [0.28.0] 2021-10-17

### Added

- Table Pagination flag to simple table
- Nutrients report table implements new pagination on simple table

### Changed

- Homepage not Nutrients page, instead of Sessions page

## [0.27.0] 2021-10-14

### Added

- Prettier formatting tool and commands with rule set matching linter and editorconfig

### Fixed

- Format that does not match standard pretter configuration with some custom rules

## [0.26.0] 2021-10-14

### Changed

- Upgraded ESlint parser, Babel, React, and Webpack to latest major version

### Removed

- Page header from Session and Help page

## [0.25.3] 2021-10-12

### Fixed

- Footer sticks to bottom correctly

## [0.25.2] 2021-10-12

### Fixed

- a tags all set same color blue and removed underline

## [0.25.1] 2021-10-12

### Fixed

- Routines table refreshes on list load to ensure selected item in dropdown is shown

## [0.25.0] 2021-10-12

### Changed

- Simple Table styled using MUI component instead of Bulma CSS

### Fixed

- Dates in tables converted from Zulu time to locale

### Removed

- Bulma CSS tag from index file

## [0.24.2] 2021-10-12

### Fixed

- Datepicker component broadcasts new Date object instead of Date string

## [0.24.1] 2021-10-11

### Fixed

- Nutrient unit amounts added paraenthesis around 's' when greater than 1

## [0.24.0] 2021-10-11

### Added

- Nutrient units gram option as (g)

### Changed

- Exercise dropdown using Mui outlined styled input

### Removed

- Tabs no longer wrapped with Bulma styled cards, with no additional titles
- Dropdown styled with Bulma css

## [0.23.1] 2021-10-11

### Changed

- Navbar navigation options to remove caffeine

## [0.23.0] 2021-10-10

### Changed

- Routines selection now in a dropdown list above table
- Routines table using simple table styling and moved underneath routine list

### Remored

- Rountines sidebar removed and placed about table

## [0.22.0] 2021-10-10

### Added

- Nutrient reports now has consumption time input option
- Selector dropdown now has outlined version to match text inputs

### Changed

- Nutrient reports name now comes from list of types
- Nutrient types now has default unit option
- Nutrient naming updated throughout page
- Nutrient records table shows more information on table and in dialog
- Simple table dialog styling updated with bold for titles

## [0.21.0] 2021-10-10

### Added

- Nutrients creator for creating specific types of nutrients connects to storage endpoints

### Changed

- Nutrients reports section now stored in different storeage location under new, reports name

## [0.20.0] 2021-10-09

### Added

- Mui Alert for unauthorized users on creator cards and in auth dialog
- Exercise and Cardio session creator clear button to clear out fields
- Mui lab package to use experimental components currently in v5 of core package

### Changed

- Time field input using Mui and react-mask comp with Mui styling, replacing 3rd party input
- Exerecise and Cardio session creator inputs now Mui styled
- Exercise and Caffeine page now has multiple tabs, inputs using Mui styling/components
- Table does not show download text while loading

### Removed

- Help page contribution tab
- Bulma field styling classes
- Timefield package from 3rd party

## [0.18.2] 2021-10-06

### Removed

- Css and css related configurations and packages, replaced with JSS and inline styling
- FontAwesome inline JS from base HTML index - no longer downloading on page load

## [0.18.1] 2021-10-05

### Changed

- Table icon for displaying row details, display for nutrient table

### Fixed

- Table sort order on both nutrient and sessions table

## [0.18.0] 2021-10-05

### Changed

- Tables no longer user css or Bulma - using Mui components and JSS instead

### Removed

- Lodash.get package and replaced with optional chaining

## [0.17.0] 2021-10-05

### Changed

- Navbar header replaced with Mui components from direct DOM manipulated component; small style tweaks in header

### Removed

- Hamburger responsiveness from header navbar
- Unused page components

## [0.16.2] 2021-10-04

### Changed

- External links are opened in new tabs instead of in existing tab

### Fixed

- Help page text spacing issue for external links

## [0.16.1] 2021-10-03

### Fixed

- Security update for axios package

## [0.16.0] 2021-10-03

### Added

- Auth username persisted in global state with token
- Auth request Cancel button during request
- Navbar clickaway listener to navbar for menu and dropdown clickaway

### Changed

- All record creation username values come from global auth state instead of form input
- Using shared Material UI dialog for all modals
- Auth button in nav verbiage changes depending on auth status
- React outsideclick listener replaced with Mui clickaway listener
- Upgraded Timefield selector to latest version
- IDs for records changed from timestamps to uuids
- JSON imports all using single namespace instead of all star

### Fixed

- Save Request issue not passing payload for sessions

### Removed

- Bulma Modal component from app and replaced with Mui component - shrunk bundle ~160Kb

## [0.15.1] 2021-10-03

### Fixed

- Webpack configuration for public path for bundled app

## [0.15.0] 2021-10-03

### Added

- Authentication dialog on Sign In button on navbar, with connection to jwt-auth-api

### Changed

- Creator for sessions, exercises, and nutrients require user to be authenticated

## [0.14.1] 2021-09-09

### Added

- Base tag in index html file for routing

## [0.14.0] 2021-09-09

### Changed

- Storage API update changed

## [0.13.0] 2021-09-08

### Added

- Hash in routes

### Changed

- Naming updated

### Fixed

- Security dependency updates

## [0.12.1] 2021-03-21

### Fixed

- Footer full width on color for text beyond the content max width

## [0.12.0] 2021-03-21

### Added

- Version to footer

### Changed

- Footer set to be sticky at bottom of page and color stretched full page width
- Center tabs on tab bar
- Set Caffeine, Exercises, and Routines to be within Page, with max-width
- Footer URL pointing to homepage instead of github.io page

### Removed

- Unused sections of app; Sign Up/In buttons, pages with no data
- Removed margin on page body

## [0.11.0] 2021-03-20

### Changed

- Caffeine, Cardio Session, and Exercises list and create API using S3 storage API

### Removed

- Pagination on Caffeine and Cardio Session tables
- Azure API URL from application

## [0.10.1] 2021-03-07

### Added

- Load indicator on Routine sidebar card

### Changed

- Made Routines selectable/changeable in sidebar

### Fixed

- Routine API route

## [0.10.0] 2021-03-06

### Added

- List of Routines to from new storage API
- Webpack Copy module for moving images and favicon
- Generated Augmented logo and favicon

### Changed

- Decomissioned Heroku App routines API for new Heroku S3 Storage api for fetching Routine
- Logo from Bulma's logo to custom Augmented Logo
- Moved assets directory into src to match conventions

### Fixed

- Vulnerable dependency package versions: handlebars, http-proxy, node-forge, serialize-javascript, yargs-parser
- Outdated browserslist issue
- Broken deep dependency for compat-data

## [0.9.0] 2020-03-19

### Changed

- Several dependency minor/patch versions

### Fixed

- Update major dependency versions for vulnerable packages flagged by GitHub

## [0.8.1] 2019-11-05

### Fixed

- Using correct form in payload for sessions post request

## [0.8.0] 2019-11-04

### Added

- Circle loader when waiting on routine payload

### Changed

- Switch react date picker for Material UI date picker

## [0.7.0] 2019-11-02

### Added

- Webpack bundle analyzer config and script

### Changed

- Converted session creator to function component
- Handling all form data for session creator in redux store
- Moved all package to dev dependencies as none would be needed on a server

### Fixed

- Updated react-router-dom package to use latest react lifecylce methods

## [0.6.0] 2019-11-02

### Added

- Prop validation for new props coming into session creator class

### Changed

- Moved rountine list request into redux store
- Moved caffeine, exercise, and session create post logic into redux

## [0.5.0] 2019-11-01

### Changed

- Moved exercise list request into redux state

### Removed

- Uninstalled canvas with current issue causing install to hang

## [0.4.0] 2019-10-27

### Added

- Wireframes for moving all axios calls into state/reducers

### Changed

- Simplified folder structure

### Removed

- Unused components and excess folders

## [0.3.1] 2019-10-26

### Changed

- Invalidate logic listening for successful create post
- Webpack naming convention

### Fixed

- Sending axios post for create as JSON instead of stringified JSON
- Invalidate state correctly reflecting when data is invalidated in session

## [0.3.0] 2019-10-26

### Added

- Download csv button to bottom of sessions table

### Changed

- Best practices and formatting changes to code of lib
- Update latest npm packages in lock file
- Seperate builds for dev and production

### Fixed

- Cardio session data invalidation process, now invalidate date on a 201 response rather than make request for more data
- Added missing peer dependencies

## [0.2.0] 2019-09-15

### Added

- ESlint with plugins for best practices with StandardJS

### Changed

- Converted Routine component to hook to remove old lifecycle methods

### Fixed

- Updated styling/issues pointed out by linter
- Passing id to dropdown component for determining which item to change, rather than modifying item in dropdown

## [0.1.3] 2019-09-15

### Changed

- Package JSON key order

### Fixed

- Updated mix-deep and set-value packages for security issues

## [0.1.2] 2019-09-03

### Added

- Help page to replace multiple reference pages.

### Changed

- Navbar tab change from 'More' drop down to direct link to help page.

### Removed

- About, Contact, Contribute, and Issue pages.

## [0.1.1] 2019-09-02

### Added

- Split lib function for splitting apart text keys from an object, including tests.
- Table row component used for caffiene intake data.

### Changed

- Set '/session' route to use new tab styled page.
- Condensed display table component code for session data.
- Use new split function to massage caffiene and session data in tables.

### Removed

- Excess comments in sort lib.

## [0.1.0] 2019-09-02

### Initialized

- Initial adding of change log with base project
