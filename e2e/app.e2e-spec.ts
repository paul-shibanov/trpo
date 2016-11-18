import { TrpoPage } from './app.po';

describe('trpo App', function() {
  let page: TrpoPage;

  beforeEach(() => {
    page = new TrpoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
