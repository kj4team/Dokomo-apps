module.exports = Dokomo => {
  Dokomo.handleDarkMode(isEnabled => {
    localStorage.setItem('theme', isEnabled ? 'dark' : 'light' );
  });
};
