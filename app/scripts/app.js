(function (document) {
  'use strict';

  const app = document.querySelector('#app');
  app.firebaseURL = 'https://kr-polymer-challenge.firebaseio.com';
  app.baseUrl = '/';
  app.route = '';

  if (window.location.port === '') {  // if production
    // Uncomment app.baseURL below and
    // set app.baseURL to '/your-pathname/' if running from folder in production
    // app.baseUrl = '/polymer-starter-kit/';
  }

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('dom-change', function () {
    console.log('Our app is ready to rock!');
  });

  window.addEventListener('WebComponentsReady', function () {
    // imports are loaded and elements have been registered

    const dataObj = document.querySelector('krypton-data');
    dataObj.addEventListener('connected', function (e) {
      page.redirect('/' + e.detail.first);
    });
  });
})(document);
