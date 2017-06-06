module.exports = load

function load (src) {
  return new Promise(function (resolve, reject) {
    var head = document.head || document.getElementsByTagName('head')[0]
    var script = document.createElement('script')

    script.type = 'text/javascript'
    script.async = true
    script.src = src

    script.onload = function () {
      script.onerror = script.onload = null
      resolve(script)
    }
    script.onerror = function () {
      script.onerror = script.onload = null
      reject(new Error('Failed to load ' + src))
    }

    head.appendChild(script)
  })
}
