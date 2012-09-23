var APIeasy = require("api-easy"),
  expect = require("chai").expect;

APIeasy.describe("wordlist")
  .use("localhost", 8080)
  .discuss("list lookup")
  .path("/lists")
    .get().expect(200)
  .export(module)
