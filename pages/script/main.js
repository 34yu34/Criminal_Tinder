$(document)
  .ready(function () {
    $('.pane-switcher').bind('click', function () {
      switchActive(this)
    })
    $("#submit-file").bind('click', function () {
      switchActive(this)
    })
    $("#pane-new-search .button").bind('click', function () {
      switchActive(this)
    })
    $(".return").bind('click', function () {
      switchActive(this)
    })
    $(".profile-button").bind('click', function () {
      switchActive(this)
    })
    $("#submit-login").bind('click', function () {
      switchActive(this)
    })
  })

/*********************************************************************
 * Function that use the active element href to get the pane id
 * to which it need to switch
 *********************************************************************/
switchActive = function (object) {
  $('.active-pane')
    .addClass('reserve-pane')
    .removeClass('active-pane')
  $($(object).attr('href'))
    .addClass('active-pane')
    .removeClass('reserve-pane')
}