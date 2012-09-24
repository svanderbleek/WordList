var APIeasy = require("api-easy"),
  expect = require("chai").expect;

APIeasy.describe("wordlist")
  .use("localhost", 8080)
  .discuss("list lookup")
  .path("/wordlist")
    .get().expect(200)
  .discuss("list creation")
  .path("/name")
    .put().expect(201)
  .export(module)
