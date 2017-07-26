const expect = require("chai").expect;

describe("cc-todo ap", () => {
 it("Should load correct title", () => {
   browser.url("http://localhost:3000/");
   const actualTitle = browser.getTitle();

   expect(actualTitle).to.eql("localhost");
 });
 it("Sould allow me to create a Todo", () => {
   const todoText = "Get better at testing, like lots";
   browser.url('http://localhost:3000/');
   browser.element('todo-input').setValue(todoText);
   browser.click('.todo-submit');
   const actual = browser.element(".todo-text").getText();
   expect(actual).to.equal(todoText);
 })
});
