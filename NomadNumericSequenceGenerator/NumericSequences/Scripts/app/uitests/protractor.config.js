exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['NumericSequence.uitests.js'],
  multiCapabilities: [ {
    browserName: 'chrome'
  }]
}

