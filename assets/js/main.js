$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.scrollspy').scrollSpy();
    $('.fixed-action-btn').floatingActionButton();
    $('.modal').modal();
    $('.tooltipped').tooltip();
    $('.collapsible').collapsible();
    $('.carousel').carousel();

    var $container = $('#masonry-grid');
    // initialize
    $container.masonry({
      columnWidth: '.col',
      itemSelector: '.col',
    });
});