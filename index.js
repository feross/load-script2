module.exports = function load (src, attrs) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.async = true
    script.src = src

    for (let [k, v] of Object.entries(attrs)) {
      script.setAttribute(k, v)
    }

    script.onload = () => {
      script.onerror = script.onload = null
      resolve(script)
    }

    script.onerror = () => {
      script.onerror = script.onload = null
      reject(new Error(`Failed to load ${src}`))
    }

    const head = document.head || document.getElementsByTagName('head')[0]
    head.appendChild(script)
  })
}
