describe("Definition Request", function() {
  it("should consume spanishdict quick defs", function() {
    server = sinon.fakeServer.create(); 
    
    
    this.server.respondWith("GET", "/some/article/comments.json",
      [200, { "Content-Type": "application/json" }, document.getElementById("#response").innerHTML]
    );
  });
});
