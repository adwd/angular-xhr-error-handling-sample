import { XhrErrorHandlingTestPage } from './app.po';

describe('xhr-error-handling-test App', () => {
  let page: XhrErrorHandlingTestPage;

  beforeEach(() => {
    page = new XhrErrorHandlingTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
