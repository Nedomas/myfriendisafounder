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


$ ->
  makeEmailWork('#top-email', '#top-submit')
  makeEmailWork('#bottom-email', '#bottom-submit')
