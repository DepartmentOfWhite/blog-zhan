;(function() {

  window.L = function(key) {
    return (jsonL[key] || {})[localStorage['lang']] || key
  }

  L.translate = function() {
    var els = document.querySelectorAll('[l]')
    for (var i = 0; i < els.length; i++) {
      var el = els[i]
      el.lKey = el.lKey|| el.getAttribute('l') || el.innerHTML
      el.innerHTML = L(el.lKey)
    }
  }

  var jsonL = {
    '首页': {
      'en': 'Home',
      'jp': 'ya mie die',
    },
    '作品': {
      'en': 'Demo',
      'jp': 'yi ku',
    },
    '关于': {
      'en': 'About',
      'jp': 'you yi ku',
    }
  }

})();