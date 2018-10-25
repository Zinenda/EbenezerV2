$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.tabs').tabs();
    $('.tooltipped').tooltip();
    $('.fixed-action-btn').floatingActionButton({
      direction: 'bottom'
    });
    $('.modal').modal();

    var $container = $('#masonry-grid');
    // initialize
    $container.masonry({
      columnWidth: '.col',
      itemSelector: '.col',
    });
});