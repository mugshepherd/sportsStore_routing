import { SportsStorePage } from './app.po';

describe('sports-store App', () => {
  let page: SportsStorePage;

  beforeEach(() => {
    page = new SportsStorePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
