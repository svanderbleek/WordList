(function () {
  var BingTranslator = function(clientId, clientSecret) {
    var accessURL, accessRequest, translateURL, translationRequest;

    accessParams = {
      client_id = clientId,
      client_secret = clientSecret,
      scope = "http://api.microsofttranslator.com",
      grant_type = "client_credentials" 
    }

    accessRequest = function() {
      dispatchEvent("WebRequest", new CustomEvent({
        method: "POST",
        url: accessURL,
        params: accessParams,
        callback: function() {
          setTimeout(accessRequest, 600000);
        }
      }));
    }
    
    translationURL = "http://api.microsofttranslator.com/V2/Ajax.svc/Translate";
    translationRequest = function(text, to, from) {
      var params = {
        text: text,
        to: to,
        from: from
      }
    }

    dispatchEvent("BingTranslator", this);
  }
}).call(this);
