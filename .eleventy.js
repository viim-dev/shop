module.exports = (config) => {
  config.addPassthroughCopy({ 'public': './' })
  config.addPassthroughCopy({ 'src/admin/config.yml': './admin/config.yml' })
  config.addPassthroughCopy({"src/featured": './featured'});
  config.addPassthroughCopy({"src/assets/uploads": './assets/uploads'});
  config.addPassthroughCopy({ './src/assets': 'assets' }) 
  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
    // Tweak for Turbolinks & Browserstack Compatibility
    snippetOptions: {
      rule: {
        match: /<\/head>/i,
        fn: function (snippet, match) {
          return snippet + match;
        }
      }
    }
  })
  config.setDataDeepMerge(true)

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}
