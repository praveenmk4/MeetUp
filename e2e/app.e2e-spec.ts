import { MeanAngularCliPage } from './app.po';

describe('mean-angular-cli App', () => {
  let page: MeanAngularCliPage;

  beforeEach(() => {
    page = new MeanAngularCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
