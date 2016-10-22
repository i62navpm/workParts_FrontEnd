import { WorkPartsFrontEndPage } from './app.po';

describe('work-parts-front-end App', function() {
  let page: WorkPartsFrontEndPage;

  beforeEach(() => {
    page = new WorkPartsFrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
