function createSecretHolder(secret) {
  var secret = secret;
  return {
    getSecret: function () {
      return secret;
    },
    setSecret: function (sec) {
      secret = sec;
    },
  };
}
