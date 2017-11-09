/**
 * Passport configuration
 *
 * This is the configuration for your Passport.js setup and where you
 * define the authentication strategies you want your application to employ.
 *
 * I have tested the service with all of the providers listed below - if you
 * come across a provider that for some reason doesn't work, feel free to open
 * an issue on GitHub.
 *
 * Also, authentication scopes can be set through the `scope` property.
 *
 * For more information on the available providers, check out:
 * http://passportjs.org/guide/providers/
 */

module.exports.passport = {
  local: {
    strategy: require('passport-local').Strategy
  },

  bearer: {
    strategy: require('passport-http-bearer').Strategy
  },

  // twitter: {
  //   name: 'Twitter',
  //   protocol: 'oauth',
  //   strategy: require('passport-twitter').Strategy,
  //   options: {
  //     consumerKey: '9N2mj0QGiqAksD8LiVRVFpQHN',
  //     consumerSecret: 'slH3yoKuLvQJHBcTgrm0aDaHvNW2ZoWpMOTOkuDSylqBMcCsWI'
  //   }
  // },

  // github: {
  //   name: 'GitHub',
  //   protocol: 'oauth2',
  //   strategy: require('passport-github').Strategy,
  //   options: {
  //     clientID: 'your-client-id',
  //     clientSecret: 'your-client-secret'
  //   }
  // },

  // facebook: {
  //   name: 'Facebook',
  //   protocol: 'oauth2',
  //   strategy: require('passport-facebook').Strategy,
  //   options: {
  //     clientID: '279955609150664',
  //     clientSecret: 'c4c656476d6805757aa5f4961857679f',
  //     scope: ['email'] /* email is necessary for login behavior */
  //   }
  // },

  // google: {
  //   name: 'Google',
  //   protocol: 'oauth2',
  //   strategy: require('passport-google-oauth').OAuth2Strategy,
  //   options: {
  //     clientID: '443879199446-t2ef66ab0lcj81len55b0rcf69094e0g.apps.googleusercontent.com',
  //     clientSecret:  'KfPszHVmjMg7pz8CzzzVbtus'
  //   }
  // },

  cas: {
    name: 'CAS',
    protocol: 'cas',
    strategy: require('passport-cas').Strategy,
    options: {
      ssoBaseURL: 'http://your-cas-url',
      serverBaseURL: 'http://localhost:1337',
      serviceURL: 'http://localhost:1337/auth/cas/callback'
    }
  }
};
