import puppeteer from "puppeteer";
import { cucumber } from "gherkin-jest";
import { ENGINE_METHOD_NONE } from "constants";

function delay(delay) {
  return new Promise(function(resolve) {
    setTimeout(resolve, delay);
  });
}

cucumber.addHook(1, async world => {
  const browser = global.__BROWSER__;
  const page = await browser.newPage();

  world.page = page;
});

const goTo = async (world, url) => {
  const { page } = world;
  return await page.goto(url);
};

cucumber.defineRule("user navigates to {string}", goTo);

cucumber.defineRule(
  "fills {string} by replacing text with {string}",
  async (world, locateInput, textReplace) => {
    const { page } = world;
    return await page.type("#lst-ib", textReplace);
  }
);

cucumber.defineRule("ca", async (world, locateInput, textReplace) => {
  const { page } = world;
  const html = await page.$eval("form", e => e.outerHTML);
  expect(true).toBeFalsy();
});

cucumber.defineRule("clicks on {string}", async (world, locateButton) => {
  const { page } = world;
  return await page.click("input.lsb");
});

cucumber.defineRule("take screenshot", async world => {
  const { page } = world;

  return await page.screenshot({ path: "screenshot.png" });
});

cucumber.defineRule("waits for {int} seconds", async (world, waitTime) => {
  return await delay(waitTime * 1000);
});
