(function () {

  var body = $('body')
  var mask = $('<div>').addClass('mask')

  var type = location.search ? location.search.replace('?', '') : ''
  var types = ['sml-open', 'pml-open']

  if (types.indexOf(type) == -1) {
    type = types[0]
  }

  $('.navbar-toggle').click(function () {
    if (mask.parent().size()) {
      // Is open, make closed
      body.removeClass(type)
      mask.detach()
    } else {
      // Is closed, make open
      body.addClass(type).append(mask)
    }
  })

  mask.click(function () {
    body.removeClass(type)
    mask.detach()
  })

})()