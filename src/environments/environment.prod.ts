export const environment = {
  production: true,
  auth: {
    domain: 'universalcreditservice.auth0.com',
    clientID: 'DPG_iNtz9li8otKpNa5stjU33d1pibzw',
    callbackOnLocationHash: true,
    redirectOnSuccess: '/',
  },

  api: {
    appList: 'http://private-87cbae-heavywatervodlistapplications.apiary-mock.com/rest/vodlistapplications',
    addApp: 'http://private-1c675-heavywatervodorderservice.apiary-mock.com/rest/vodorder',
    appDetails: 'http://private-0226e-heavywatervodfinalreport.apiary-mock.com/rest/vodreport',
  },
};
