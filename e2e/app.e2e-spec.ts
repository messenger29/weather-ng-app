import { WeatherNgAppPage } from './app.po';

describe('weather-ng-app App', () => {
  let page: WeatherNgAppPage;

  beforeEach(() => {
    page = new WeatherNgAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
