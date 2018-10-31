$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.tabs').tabs();
    $('.tooltipped').tooltip();
    $('.fixed-action-btn').floatingActionButton({
      direction: 'bottom'
    });
    $('.modal').modal();
    $('.datepicker').datepicker();

    var $container = $('#masonry-grid');
    // initialize
    $container.masonry({
      columnWidth: '.col',
      itemSelector: '.col',
    });
});