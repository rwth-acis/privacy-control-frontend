import {AuthConfig} from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
  issuer: 'https://auth.las2peer.org/auth/realms/main',
  redirectUri: window.location.origin,
  clientId: 'PrivacyControlService',
  responseType: 'code',
  scope: 'openid profile email',
  showDebugInformation: true,
};
