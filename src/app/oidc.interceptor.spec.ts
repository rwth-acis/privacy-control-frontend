import { TestBed } from '@angular/core/testing';

import { OidcInterceptor } from './oidc.interceptor';

describe('OidcInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      OidcInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: OidcInterceptor = TestBed.inject(OidcInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
