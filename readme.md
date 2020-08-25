
## Dashboard web app from Creative Tim using Firebase hosting


 ![version](https://img.shields.io/badge/version-2.1.2-blue.svg)  ![license](https://img.shields.io/badge/license-MIT-blue.svg) [![GitHub issues open](https://img.shields.io/github/issues/creativetimofficial/material-dashboard.svg?maxAge=2592000)](https://github.com/creativetimofficial/material-dashboard/issues?q=is%3Aopen+is%3Aissue) [![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/creativetimofficial/material-dashboard.svg?maxAge=2592000)](https://github.com/creativetimofficial/material-dashboard/issues?q=is%3Aissue+is%3Aclosed) [![Join the chat at https://gitter.im/NIT-dgp/General](https://badges.gitter.im/NIT-dgp/General.svg)](https://gitter.im/creative-tim-general/Lobby) [![Chat](https://img.shields.io/badge/chat-on%20discord-7289da.svg)](https://discord.gg/E4aHAQy)


![Product Gif](https://i.ibb.co/s5vSJnQ/screencapture-iot-green-house-firebaseapp-2020-07-26-11-24-49.png)

Material Dashboard is a free Material Bootstrap Admin with a fresh, new design inspired by Google's Material Design. We are very excited to introduce our take on the material concepts through an easy to use and beautiful set of components. Material Dashboard was built over the popular Bootstrap framework and it comes with a couple of third-party plugins redesigned to fit in with the rest of the elements.
We have modified the first model to suit our project and the following was included real-time reading   temperature and humidity of mini greenhouse  with controlling in the pump, fan, and lamp . It has an automatic and manual pump mode :

1.  **Mode Automatic :** Soil sensor controle the pump according to the needs of the soil
2.  **Mode Manual :** We can control the pump from the website or the application
## Prerequisites

1. [A Firebase account](https://console.firebase.google.com/).

2. A Firebase project.

3. Install Firebase CLI - see [documentation](https://firebase.google.com/docs/hosting/quickstart#install-cli)

4. A Firebase deploy token (FIREBASE_DEPLOY_TOKEN). See [Documentation](https://firebase.google.com/docs/cli/#command_reference)

```bash
$ firebase login:ci
```

4. [A Google Cloud account](https://console.cloud.google.com)

5. Install Google Cloud SDK - see [documentation](https://cloud.google.com/sdk/install)

6. Your project's code in a remote GIT repository (Github, Bitbucket or Cloud Source repository)

## Quick start
 **Associate your project with a Firebase Project**

  If you have not done so already, first login to firebase from the command line:
   ```bash
    $ firebase login
   ```
   Check that you have access to your firebase project:
```bash
    # list available firebase projects
    $ firebase list
```
  Once logged-in, we associate with folder project with the Firebase services we want to use. Here we just want Firebase Hosting. Of course, we use also Firebase Realtime Database in this project, but it has already been included in `index.html`. So the command is:
 ```bash
    $ firebase init hosting
```
A few questions are asked. Below, 
 ```bash
- Are you ready to proceed? Yes  
- Select a default Firebase project for this directory: project folder  
- What do you want to use as your public directory? public  
- Configure as a single-page app (rewrite all urls to /index.html)? No  
- File public/index.html already exists. Overwrite? No
```
A few files are generated (and a 404 page as well),we just have to type this command:
 ```bash
firebase deploy --only hosting 
```
After a few seconds, deploy is complete and we get the public URL of our web app:
  ```bash
https://projectfolder.firebaseapp.com. 
```

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/chrome.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/firefox.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/edge.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/safari.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/opera.png" width="64" height="64">



## Resources
- Special thanks to Mr.Libin Prasanth
-  Get started with Firebase Hosting [https://firebase.google.com/docs/hosting/quickstart](https://firebase.google.com/docs/hosting/quickstart)
-   Get started with IOT
[https://medium.com/@o.lourme/our-iot-journey-through-esp8266-firebase-angular-and-plotly-js-part-3-644048e90ca4](https://medium.com/@o.lourme/our-iot-journey-through-esp8266-firebase-angular-and-plotly-js-part-3-644048e90ca4)
- Creative Tim: <https://www.creative-tim.com/product/material-dashboard>
- Documentation: <https://demos.creative-tim.com/material-dashboard/docs/2.1/getting-started/introduction.html>


