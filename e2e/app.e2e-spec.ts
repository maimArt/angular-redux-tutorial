import { AngularReduxTutorialPage } from './app.po';

describe('angular-redux-tutorial App', () => {
  let page: AngularReduxTutorialPage;

  beforeEach(() => {
    page = new AngularReduxTutorialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
