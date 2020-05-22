const playwright = require("playwright");
const assert = require("assert");

(async () => {
  for (const browserType of ["chromium", "firefox", "webkit"]) {
    const browser = await playwright[browserType].launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("http://localhost:8090");
    await page.click("#test_button1");
    const click_after_text = await page.evaluate(() => {
      return document.getElementById("test_button1").innerText;
    });
    assert.equal(click_after_text, "ボタン押下後");
    await page.screenshot({ path: `example-${browserType}.png` });
    await browser.close();
  }
})();
