module.exports = Dokomo =>
  class SuperHuman extends Dokomo {
    overrideUserAgent() {
      // TODO: Rather than hardcoding like this, the user should set it for their individual installation of Dokomo
      return 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10136';
    }
  };
