import { MsFrontWebPage } from './app.po';

describe('ms-front-web App', function() {
  let page: MsFrontWebPage;

  beforeEach(() => {
    page = new MsFrontWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
