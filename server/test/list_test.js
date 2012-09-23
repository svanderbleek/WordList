var APIeasy = require("api-easy"),
  expect = require("chai").expect;

APIeasy.describe("wordlist")
  .use("localhost", 8080)
  .discuss("list lookup")
  .path("/lists")
    .get().expect(200, {lists:[]})
    .get("name").expect(404, {list:{name: "name"}})
  .export(module)
