const BASE_PATH = location.host.indexOf('localhost') > -1 ? 'http://localhost/' : 'http://zhandanhong.top/'
console.log(BASE_PATH)
var g = {
  fillLen(n, len) {
    len = len || 2
    n = n.toString()
    while (n.length < len) {
      n = '0' + len
    }
    return n
  },
  timerLazyLoad: 0,
  lazyLoad() {
    clearTimeout(g.timerLazyLoad)
    g.timerLazyLoad = setTimeout(function() {
      ;[].slice.call(document.querySelectorAll('[lazy-load]')).forEach(function(el, idx) {
        const pos = el.getBoundingClientRect()
        if (pos.top > document.documentElement.clientHeight || pos.bottom < 0) {
          return
        }
        if (el.isLoaded) {
          return
        }
        el.isLoaded = true
        const src = el.getAttribute('lazy-load')
        const oImg = new Image()
        oImg.src = src
        oImg.onload = function() {
          el.removeAttribute('lazy-load')
          el.style.background = '#ddd url('+src+') no-repeat center / cover'
        }
      })
    }, 300)
  }
}

$(window).on('resize', function() {
  g.lazyLoad()
})