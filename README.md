# Respons loudspeakers site

live @ https://nervous-einstein-d118b6.netlify.com
trello-board: https://trello.com/b/Q0Y76esz/respons-loudspeaker


go thru this: 
https://www.gatsbyjs.org/tutorial/part-one/

then:
https://www.gatsbyjs.org/blog/2018-07-07-the-gatsby-plugin-page-creator/
<!-- setup new pages:

edit in config.yml file<br/>https://github.com/cupofdata/cupofdata.com/blob/master/static/admin/config.yml
src other changes to project <br/>https://github.com/cupofdata/cupofdata.com/tree/master/src

-->
### Access Locally
```
$ yarn
$ npm run develop
```
To test the CMS locally, you'll need run a production build of the site:
```
$ npm run build
$ npm run serve
```

## Getting Started (Without Netlify)
```
$ npm run build
$ npm run serve
```


Current dependecies:
--------------------------------------------------
    "bulma": "^0.6.0",
    "gatsby": "^1.9.213",
    "gatsby-link": "^1.6.37",
    "gatsby-plugin-netlify": "^1.0.19",
    "gatsby-plugin-netlify-cms": "^1.0.9",
    "gatsby-plugin-react-helmet": "^2.0.5",
    "gatsby-plugin-sass": "^1.0.17",
    "gatsby-plugin-sharp": "^1.6.34",
    "gatsby-remark-images": "^1.5.50",
    "gatsby-source-filesystem": "^1.5.23",
    "gatsby-transformer-remark": "^1.7.33",
    "gatsby-transformer-sharp": "^1.6.21",
    "lodash": "^4.17.5",
    "lodash-webpack-plugin": "^0.11.4",
    "netlify-cms": "^1.7.0",
    "prop-types": "^15.6.0",
    "react": "^16.2.0",
    "react-helmet": "^5.2.0",
    "uuid": "^3.2.1"
    "prettier": "^1.7.4"
--------------------------------------------------

Project info

netlify-dashboard
https://app.netlify.com/sites/nervous-einstein-d118b6/settings/identity

current site url:
https://respons-loudspeakers.netlify.com/

JAMstack Best Practices [Js, Api, Markup]
https://jamstack.org/best-practices/

DOCS
--------------------------------------------------------------------------------
gatsby + netlify-docs
https://www.gatsbyjs.org/docs/netlify-cms/

--------------------------------------------------------------------------------
---Netlify----------------------------------------------------------------------

netlify docs:
https://www.netlifycms.org/docs/

features:
https://www.netlify.com/features/

tutorials:
https://www.netlify.com/tags/tutorial/

forms:
https://www.netlify.com/docs/form-handling/
--------------------------------------------------------------------------------
---Gatsby-----------------------------------------------------------------------

step by step gatsby -setup
https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/

intro to gatsby:
https://www.gatsbyjs.org/tutorial/part-one/

crash course gatsby:
https://www.youtube.com/watch?v=6YhqQ2ZW1sc

building components with gatsby:
https://www.gatsbyjs.org/docs/building-with-components/


--------------------------------------------------------------------------------
----Tools and features----------------------------------------------------------

url shortener:
https://www.netlify.com/blog/2018/03/19/create-your-own-url-shortener-with-netlifys-forms-and-functions/

deploy:
https://www.netlify.com/docs/continuous-deployment/

Comments and stuff:
https://jamstack-comments.netlify.com/

react-static intro to styled components:
https://www.youtube.com/watch?v=KvlTVZPlmgs


<!----
**Note:** Gatsby v2 beta support is here! Check out the [gatsby-v2 branch](https://github.com/AustinGreen/gatsby-starter-netlify-cms/tree/gatsby-v2) to start using it now.



This repo contains an example business website that is built with [Gatsby](https://www.gatsbyjs.org/), and [Netlify CMS](https://www.netlifycms.org): **[Demo Link](https://gatsby-netlify-cms.netlify.com/)**.

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

## Prerequisites

- Node (I recommend using v8.2.0 or higher)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)

## Getting Started (Recommended)

Netlify CMS can run in any frontend web environment, but the quickest way to try it out is by running it on a pre-configured starter site with Netlify. The example here is the Kaldi coffee company template (adapted from [One Click Hugo CMS](https://github.com/netlify-templates/one-click-hugo-cms)). Use the button below to build and deploy your own copy of the repository:

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/AustinGreen/gatsby-starter-netlify-cms&amp;stack=cms"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

After clicking that button, you’ll authenticate with GitHub and choose a repository name. Netlify will then automatically create a repository in your GitHub account with a copy of the files from the template. Next, it will build and deploy the new site on Netlify, bringing you to the site dashboard when the build is complete. Next, you’ll need to set up Netlify’s Identity service to authorize users to log in to the CMS.

### Access Locally
```
$ git clone https://github.com/[GITHUB_USERNAME]/[REPO_NAME].git
$ cd [REPO_NAME]
$ yarn
$ npm run develop
```
To test the CMS locally, you'll need run a production build of the site:
```
$ npm run build
$ npm run serve
```

## Getting Started (Without Netlify)
```
$ gatsby new [SITE_DIRECTORY_NAME] https://github.com/AustinGreen/gatsby-starter-netlify-cms/
$ cd [SITE_DIRECTORY_NAME]
$ npm run build
$ npm run serve
```

### Setting up the CMS
Follow the [Netlify CMS Quick Start Guide](https://www.netlifycms.org/docs/quick-start/#authentication) to set up authentication, and hosting.

## Debugging
Windows users might encounter ```node-gyp``` errors when trying to npm install
To resolve, make sure that you have both Python 2.7 and the Visual C++ build environment installed.
```
npm config set python python2.7
npm install --global --production windows-build-tools
```

[Full details here](https://www.npmjs.com/package/node-gyp 'NPM node-gyp page')
---->
