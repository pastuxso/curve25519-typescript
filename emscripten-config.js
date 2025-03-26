// Emscripten configuration to use UTF-8 encoding
Module = {
  preRun: function () {
    // Override the default TextDecoder to use UTF-8
    if (typeof TextDecoder !== 'undefined') {
      const originalTextDecoder = TextDecoder
      TextDecoder = function (encoding) {
        if (encoding === 'utf-16le') {
          return new originalTextDecoder('utf-8')
        }
        return new originalTextDecoder(encoding)
      }
    }
  },
}
