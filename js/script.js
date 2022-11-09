 //Header burger     
      // let header__burger = document.querySelector('.burger');
      //   let header_menu = document.querySelector('.header__menu');
      //   let back = document.querySelector('body');


      //   header__burger.onclick = function(){
      //       header__burger.classList.toggle('active');
      //       header_menu.classList.toggle('active');
      //       back.classList.toggle('locked');
      //   }
//Header burger   
$('.button').click(function () {
      var buttonId = $(this).attr('id');
      $('body').addClass('overlock');
      $('#modal-container').removeAttr('class').addClass(buttonId);
      $('#modal-container').removeClass('hide');
      $('.modal-background').addClass('opened');
      $('body').removeClass('overlock');
    
    })
    $('.showblock_background').click(function () {
      $('body').removeClass('overlock');
      $('.showblock_background').removeClass('Show_bg');
      $('.showblock').removeClass('Show');
    });

  
    $('.modal__close').click(function () {
      $('#modal-container').addClass('out');
      $('body').removeClass('modal-active');
      $('.modal-background').removeClass('opened');
      $('body').removeClass('overlock');
    });
    $('.modal__close').on('click', (e) => {
      setTimeout(() => {
          $('#modal-container').addClass('hide');
      }, 500);
    });
    



         
     
