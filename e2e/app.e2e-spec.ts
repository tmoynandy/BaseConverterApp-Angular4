import { BaseConverterPage } from './app.po';

describe('base-converter App', () => {
  let page: BaseConverterPage;

  beforeEach(() => {
    page = new BaseConverterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
