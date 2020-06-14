$(document).ready( function() {

  (function() {
    $('.contacts-form__radio-btn').on('click', function() {
      var $this = $(this);
  
      if ($this.attr('id') === 'gmail') {
        $('#phone').css('display', 'none');
        $('#email').css('display', 'block');
      } else {
        $('#email').css('display', 'none');
        $('#phone').css('display', 'block');
      }
    });
  })();

  (function() {
    $('#phone input').inputmask({
      mask: '+7 (999) 999-99-99'
    });

    $.validator.messages = {
      required: 'Заполните поле',
      phone: 'Введите телефон полностью'
    }

    $.validator.addMethod('validPhone', function(value, element) {
      return /\+\d{1} \(\d{3}\) \d{3}-\d{2}-\d{2}/g.test(value);
    }, $.validator.messages.phone);

    $('.contacts__form').validate({
      rules: {
        ph: {
          validPhone: true
        }
      },
      submitHandler: function(form) {
        alert('Сообщение отправлено');
      }    
    })
  })();
})
