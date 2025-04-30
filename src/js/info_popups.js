$(document).ready(function() {
    const $dots = $('.dot');
    const $popups = $('.popup_info');

    $dots.on('click', function(event) {
        event.stopPropagation();
        const targetId = $(this).data('target');
        const $targetPopup = $('#' + targetId);

        $popups.not($targetPopup).hide();
        $targetPopup.show();
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('.popup_info').length && !$(event.target).hasClass('dot')) {
            $popups.hide();
        }
    });

    $popups.hide();
});

