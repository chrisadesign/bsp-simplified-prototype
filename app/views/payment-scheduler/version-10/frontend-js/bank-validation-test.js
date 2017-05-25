var throwError = throwError || $('form:first').attr('data-throwError')

$(document).on('submit', 'form', function (e) {
  var $accountNumber = $('#input-accountNumber')
  var accountNumberLength = $accountNumber.val().length

  if (accountNumberLength >= 8 && throwError === 'Yes') {
    e.preventDefault()

    setTimeout(function () {
      $(document).scrollTop('body', 0)
      appendErrorBanner()
      appendErrors('#input-sortCode')
      appendErrors('#input-accountNumber')

      $accountNumber.val(function () {
        return $(this).val().replace(/.$/, 7)
      })
      throwError = 'No'
    }, 500)
  }
})

function appendErrorBanner () {
  $('main:first').prepend(
    '<div class="error-summary" role="group" aria-labelledby="error-summary-heading-example-1" tabindex="-1">' +
    '  <h1 class="heading-medium error-summary-heading" id="error-summary-heading-example-1">' +
    '    There\'s a problem' +
    '  </h1>' +
    '  <p>' +
    '    Check your form. You must:' +
    '  </p>' +
    '  <ul class="error-summary-list">' +
    '    <li>' +
    '    <a href="#validate">' +
    '      Check the sort code and account number - the details you have entered are not a valid combination.' +
    '    </a>' +
    '  </li>' +
    '  </ul>' +
    '</div>'
  )
}
function appendErrors (input) {
  $(input).closest('.form-group').addClass('form-group-error')
  $(input).closest('.form-group').find('.form-label').append(
    '<span class="error-message">' +
    '  Enter these details again' +
    '</span>'
  )
}
