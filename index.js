/*! load-script2. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
module.exports = function loadScript2 (src, attrs, parentNode) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.async = true
    script.src = src

    for (const [k, v] of Object.entries(attrs || {})) {
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

    const node = parentNode || document.head || document.getElementsByTagName('head')[0]
    node.appendChild(script)
  })
}
