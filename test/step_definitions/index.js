const expect = require("expect");
const { Given, When, Then } = require("cucumber");
const scope = require("../support/scope");

function delay(delay) {
  return new Promise(function(resolve) {
    setTimeout(resolve, delay);
  });
}

Given('user navigates to "https://cadastro.easynvest.com.br"', async () => {
  return await scope.page.goto("https://cadastro.easynvest.com.br");
});

When("waits for 1 seconds", async () => {
  return await delay(3000);
});

Then("take screenshot", async () => {
  const title = await scope.page.title();

  expect(title).toBe("Cadastro Easynvest");

  return await scope.page.screenshot({ path: "screenshot.png" });
});
