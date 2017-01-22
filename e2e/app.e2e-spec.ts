import { HackernewsRxjsPage } from './app.po';

describe('hackernews-rxjs App', function() {
  let page: HackernewsRxjsPage;

  beforeEach(() => {
    page = new HackernewsRxjsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
