$(document).ready(function () {
  $('#navbarNavAltMarkup').on('show.bs.collapse', function () {
    $('.menu-icon').addClass('d-none');
    $('.close-icon').removeClass('d-none');
  });

  $('#navbarNavAltMarkup').on('hide.bs.collapse', function () {
    $('.menu-icon').removeClass('d-none');
    $('.close-icon').addClass('d-none');
  });
});
