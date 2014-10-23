jQuery(document).ready(function ($) {

  $('#sortable-table tbody').sortable({
    axis: 'y',
    handle: '.column-order img',
    placeholder: 'ui-state-highlight',
    forcePlaceholderSize: true,
    update: function (event, ui) {
      var theOrder = $(this).sortable('toArray');

      var data = {
        action: 'home_slide_update_post_order',
        postType: $(this).attr('data-post-type'),
        order: theOrder
      };

      $.post(ajaxurl, data);
    }
  }).disableSelection();



});
