var APIeasy = require("api-easy"),
  expect = require("chai").expect;

APIeasy.describe("wordlist")
  .use("localhost", 8080)
  .discuss("list lookup")
  .path("/lists")
    .get().expect(200)
    .get("name").expect(404, {list:{name: "name"}})
  .discuss("list creation")
  .path("/name")
    .put().expect(201)
  .export(module)
