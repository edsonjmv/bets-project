import { BetAppPage } from './app.po';

describe('bet-app App', () => {
  let page: BetAppPage;

  beforeEach(() => {
    page = new BetAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
