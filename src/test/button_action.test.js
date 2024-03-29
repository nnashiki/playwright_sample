const playwright = require("playwright");

// #test_button1 のボタンを押下して、ボタンの表記を取得する
const croll_click = async (browserType) => {
  const browser = await playwright[browserType].launch({slowMo: 1000});
  const context = await browser.newContext({ videosPath: "./" });
  const page = await context.newPage();
  console.log(await page.video().path());
  await page.goto("http://localhost:8090");
  await page.fill('input[id="text_input1"]', "test");
  await page.click("#test_button1");
  const click_after_text = await page.evaluate(() => {
    return document.getElementById("test_button1").innerText;
  });
  await browser.close();
  return click_after_text;
};

test("click chromium", async () => {
  let result = await croll_click("chromium");
  expect(result).toMatch(/ボタン押下後/);
});

test("click firefox", async () => {
  let result = await croll_click("firefox");
  expect(result).toMatch(/ボタン押下後/);
});

test("click webkit", async () => {
  let result = await croll_click("webkit");
  expect(result).toMatch(/ボタン押下後/);
});
