const NodeEnvironment = require("jest-environment-node");
const puppeteer = require("puppeteer");

let configLauch = {};
if (process.env.DEBUG_PUPPETEER) {
  configLauch = {
    headless: false,
    slowMo: 80,
    args: [`--window-size=1024,768`]
  };
}

class PuppeteerEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
  }

  async setup() {
    await super.setup();
    this.global.__BROWSER__ = await puppeteer.launch(configLauch);
  }

  async teardown() {
    await super.teardown();
    this.global.__BROWSER__.close();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = PuppeteerEnvironment;
