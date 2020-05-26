$(function () {
  $('.dropdown').hover(
    function () {
      $('.dropdown-menu', this).stop(true, true).fadeIn('fast');
      $(this).toggleClass('open');
      $('.dropdown-submenu .dropdown-menu').css('display', 'none');
      $('span', this).toggleClass('fa-caret-down fa-caret-up');
    },
    function () {
      $('.dropdown-menu', this).stop(true, true).fadeOut('fast');
      $(this).toggleClass('open');
      $('.dropdown-submenu .dropdown-menu').css('display', 'none');
      $('span', this).toggleClass('fa-caret-down fa-caret-up');
    }
  );
});

// dropdown-submenu
$(function () {
  $('.dropdown-submenu').hover(
    function () {
      $('.dropdown-menu', this).stop(true, true).fadeIn('fast');
      $(this).toggleClass('open');
      //   $('span', this).toggleClass('fa-caret-up fa-caret-right');
    },
    function () {
      $('.dropdown-menu', this).stop(true, true).fadeOut('fast');
      $(this).toggleClass('open');
      //   $('span', this).toggleClass('fa-caret-up fa-caret-right');
    }
  );
});
