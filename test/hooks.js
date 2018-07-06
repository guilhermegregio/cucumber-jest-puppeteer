const puppeteer = require("puppeteer");
const { BeforeAll, AfterAll } = require("cucumber");
const scope = require("./support/scope");

let configLauch = {};
if (process.env.DEBUG_PUPPETEER) {
  configLauch = {
    headless: false,
    slowMo: 80,
    args: [`--window-size=1024,768`]
  };
}

BeforeAll(async () => {
  scope.driver = puppeteer;
  scope.browser = await puppeteer.launch(configLauch);
  scope.page = await scope.browser.newPage();
});

AfterAll(async () => {
  // If there is a browser window open, then close it
  if (scope.browser) await scope.browser.close();
});
