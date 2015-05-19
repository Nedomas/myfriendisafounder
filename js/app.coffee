$ = require 'jquery'

invalidEmail = (email) ->
  return false if email.length

  alert('Be kinder! Type your best email please')
  true

makeEmailWork = (email_selector, submit_selector) ->
  submit_button = $(submit_selector)
  email_box = $(email_selector)
  Firebase = require('firebase')
  ref = new Firebase('https://myfriendisafounder.firebaseio.com')

  submit_button.click ->
    email = email_box.val()

    return if invalidEmail(email)

    ref.child('leads').push email: email, (err) ->
      if err
        alert("Somebody got a crash alert in the middle of the night. I'll email you to say I'm sorry")
        return

      submit_button.parent()
        .append("<div className='success'>Thank you for being awesome. Expect beautiful things over the next week!</div>")

      email_box.val('')

track = (selector, msg) ->
  $(selector).on 'click', (e) ->
    analytics.track msg,
      text: $(e.target).text()
      top_email: $('#top-email').val()
      bottom_email: $('#bottom-email').val()

$ ->
  makeEmailWork('#top-email', '#top-submit')
  makeEmailWork('#bottom-email', '#bottom-submit')
  track('#top-email', 'Click top email field')
  track('#top-submit', 'Click top submit')
  track('#bottom-email', 'Click bottom email field')
  track('#bottom-submit', 'Click bottom submit')
  track('.follow', 'Click OR FOLLOW THEM')
  track('a', 'Click link')
  track('.playgong a', 'Click Playgong button')
