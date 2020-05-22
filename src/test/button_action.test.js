const playwright = require("playwright");
const assert = require("assert");

// #test_button1 のボタンを押下して、ボタンの表記を取得する
const setup = async (browserType) => {
  const browser = await playwright[browserType].launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("http://localhost:8090");
  await page.click("#test_button1");
  const click_after_text = await page.evaluate(() => {
    return document.getElementById("test_button1").innerText;
  });
  await browser.close();
  return click_after_text;
};

test("click chromium", async () => {
  let result = await setup("chromium");
  expect(result).toMatch(/ボタン押下後/);
});

test("click firefox", async () => {
  let result = await setup("chromium");
  expect(result).toMatch(/ボタン押下後/);
});

test("click webkit", async () => {
  let result = await setup("chromium");
  expect(result).toMatch(/ボタン押下後/);
});
