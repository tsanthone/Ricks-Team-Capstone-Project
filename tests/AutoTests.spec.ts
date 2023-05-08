//File: AutoTests.spec.ts
//Description: These are the automated tests used for our pong game. 
//The tests were conducted using Playwright through the Visual Studio Code extension.

import { test, expect } from '@playwright/test';

//Before each test, opens the page where the pong game is located
test.beforeEach(async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/pong.html');
});

//Description: This test is used to test basic features and functionality of the game's starting scene.
test('testStartScene', async ({ page }) => {
  await expect(page).toHaveTitle(/Pong Game/);

  //Test all of the button input and toggles
  await page.locator('body').press('F');
  //Timeout is in milliseconds, a timeout of 1000 is 1 second
  await page.waitForTimeout(2000);
  await page.locator('body').press('f');
  await page.locator('body').press('1');
  await page.locator('body').press('1');
  await page.locator('body').press('1');
  await page.locator('body').press('1');
  await page.locator('body').press('2');
  await page.locator('body').press('3');
  await page.locator('body').press('4');
  await page.locator('body').press('5');
  await page.locator('body').press('6');
  await page.locator('body').press('7');
  await page.locator('body').press('8');
  await page.locator('body').press('9');
  await page.locator('body').press('0');
  await page.locator('body').press('p');
  await page.locator('body').press('p');
  await page.locator('body').press('1');
  await page.locator('body').press('2');
  await page.locator('body').press('3');
  await page.locator('body').press('4');
  await page.locator('body').press('5');
  await page.locator('body').press('6');
  await page.locator('body').press('7');
  await page.locator('body').press('8');
  await page.locator('body').press('9');
  await page.locator('body').press('0');
  await page.locator('body').press('3');
});

//Description: This test is used to test basic functionality in the play scene.
test('testPlayScene', async ({ page }) => {
  //For some reason, the game will not switch to the play scene for the tests.
  //The input in the game shows Enter is being pressed, but scene doesn't change.

  //Test all of the button input and toggles
  await page.locator('body').press('3');
  await page.locator('body').press('Enter');
  await page.locator('body').press('Enter');
  await page.locator('body').press('Enter');
  await page.locator('body').press('Enter');
  await page.locator('body').press('Enter');
  await page.waitForTimeout(1000);
  await page.locator('body').press('1');
  await page.locator('body').press('1');
  await page.locator('body').press('1');
  await page.locator('body').press('2');
  await page.locator('body').press('3');
  await page.locator('body').press('3');
  await page.locator('body').press('4');
  await page.locator('body').press('5');
  await page.locator('body').press('6');
  await page.locator('body').press('7');
  await page.locator('body').press('8');
  await page.locator('body').press('9');
  await page.locator('body').press('0');
  await page.locator('body').press('p');
  await page.locator('body').press('p');
  await page.locator('body').press('1');
  await page.locator('body').press('2');
  await page.locator('body').press('3');
  await page.locator('body').press('4');
  await page.locator('body').press('5');
  await page.locator('body').press('6');
  await page.locator('body').press('7');
  await page.locator('body').press('8');
  await page.locator('body').press('9');
  await page.locator('body').press('0');
  await page.locator('body').press('3');

  //Test the user paddle
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowUp');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowUp');
  await page.locator('body').press('ArrowUp');
});

//Description: This test is used to test basic functionality of the end scene. 
//The test will use the score cheats to quickly reach the end scene.
test('testEndScene', async ({ page }) => {
  //For some reason, the game will not switch to the play scene/end scene for the tests.
  //The input in the game shows Enter is being pressed, but scene doesn't change.

  //Test all of the button input and toggles
  await page.locator('body').press('3');
  await page.locator('body').press('Enter');
  await page.locator('body').press('Enter');
  await page.locator('body').press('Enter');
  await page.locator('body').press('Enter');
  await page.locator('body').press('Enter');
  await page.locator('body').press('Enter');
  await page.waitForTimeout(1000);

  //Get to end scene quickly, AI wins
  await page.locator('body').press(']');
  await page.locator('body').press(']');
  await page.locator('body').press(']');
  await page.locator('body').press(']');
  await page.locator('body').press(']');
  await page.locator('body').press(']');
  await page.locator('body').press(']');
  await page.locator('body').press(']');
  await page.locator('body').press(']');
  await page.locator('body').press(']');
  await page.locator('body').press(']');
  await page.locator('body').press(']');

  //Test lenses on try again end screen
  await page.waitForTimeout(1000);
  await page.locator('body').press('1');
  await page.locator('body').press('2');
  await page.locator('body').press('3');
  await page.locator('body').press('4');
  await page.locator('body').press('5');
  await page.locator('body').press('6');
  await page.locator('body').press('7');
  await page.locator('body').press('8');
  await page.locator('body').press('9');
  await page.locator('body').press('0');
  await page.locator('body').press('1');
  await page.locator('body').press('2');
  await page.locator('body').press('3');
  await page.locator('body').press('4');
  await page.locator('body').press('5');
  await page.locator('body').press('6');
  await page.locator('body').press('7');
  await page.locator('body').press('8');
  await page.locator('body').press('9');
  await page.locator('body').press('0');

  //After a short delay, push enter at end scene to play again
  await page.waitForTimeout(1000);
  await page.locator('body').press('Enter');
  await page.locator('body').press('Enter');
  await page.locator('body').press('Enter');
  await page.locator('body').press('Enter');
  await page.locator('body').press('Enter');

  //Get to end scene quickly, user wins
  await page.locator('body').press('[');
  await page.locator('body').press('[');
  await page.locator('body').press('[');
  await page.locator('body').press('[');
  await page.locator('body').press('[');
  await page.locator('body').press('[');
  await page.locator('body').press('[');
  await page.locator('body').press('[');
  await page.locator('body').press('[');
  await page.locator('body').press('[');
  await page.locator('body').press('[');
  await page.locator('body').press('[');

  //Test lenses on winner end screen
  await page.waitForTimeout(1000);
  await page.locator('body').press('1');
  await page.locator('body').press('2');
  await page.locator('body').press('3');
  await page.locator('body').press('4');
  await page.locator('body').press('5');
  await page.locator('body').press('6');
  await page.locator('body').press('7');
  await page.locator('body').press('8');
  await page.locator('body').press('9');
  await page.locator('body').press('0');
  await page.locator('body').press('1');
  await page.locator('body').press('2');
  await page.locator('body').press('3');
  await page.locator('body').press('4');
  await page.locator('body').press('5');
  await page.locator('body').press('6');
  await page.locator('body').press('7');
  await page.locator('body').press('8');
  await page.locator('body').press('9');
  await page.locator('body').press('0');
  
  //After a short delay, push escape at end scene to go back to start scene
  await page.waitForTimeout(1000);
  await page.locator('body').press('Escape');
  await page.locator('body').press('Escape');
  await page.locator('body').press('Escape');
  await page.locator('body').press('Escape');
  await page.locator('body').press('Escape');
});