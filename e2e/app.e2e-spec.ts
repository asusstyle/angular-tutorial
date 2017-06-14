import { Proj02Page } from './app.po';

describe('proj02 App', () => {
  let page: Proj02Page;

  beforeEach(() => {
    page = new Proj02Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
