export const  environment = {
  production: false,

  auth: {
    clientId: "140",
    authorizationServer: "https://ac.***REMOVED***/oauth/authorize",
    redirectUrl: "https://localhost.***REMOVED***:42063/oauth2/callback",
    serverUrl: "https://vm713.***REMOVED***:24062/auth/token",
    appName: "tracking-ui (dev)",
    jwtOptions: {
      allowedDomains: ['vm713.***REMOVED***:24062'],
      disallowedRoutes: []
    }
  },

  apiUrl: "https://vm713.***REMOVED***:24062"
};
