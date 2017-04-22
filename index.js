module.exports = load

function load (src, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  var headOrBody
  if (opts.body) {
    headOrBody = document.body || document.getElementsByTagName('body')[0]
  } else {
    headOrBody = document.head || document.getElementsByTagName('head')[0]
  }
  var script = document.createElement('script')

  script.type = 'text/javascript'
  script.async = opts.async !== false
  script.src = src

  if (cb) {
    script.onload = function () {
      script.onerror = script.onload = null
      cb(null, script)
    }
    script.onerror = function () {
      script.onerror = script.onload = null
      cb(new Error('Failed to load ' + src), script)
    }
  }

  headOrBody.appendChild(script)
}
