module.exports = Dokomo =>
  class Pipefy extends Dokomo {
    overrideUserAgent() {
      return 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:72.0) Gecko/20100101 Firefox/72.0';
    }
  };
