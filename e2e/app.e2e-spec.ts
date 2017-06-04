import { AngularfireTestPage } from './app.po';

describe('angularfire-test App', () => {
  let page: AngularfireTestPage;

  beforeEach(() => {
    page = new AngularfireTestPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
