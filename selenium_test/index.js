 const {Builder, By, Key, util} = require("selenium-webdriver") ;
 async function example(){
     let driver = await new Builder().forBrowser("chrome").build() ;
     await driver.get("localhost:3000") ;
     driver.findElement(By.id("login")).sendKeys("md");
     driver.sleep(40000000);
     driver.findElement(By.id("mdp")).sendKeys("esi20");
     driver.sleep(40000);
     driver.findElement(By.id("submit")).click()

 }
 example();