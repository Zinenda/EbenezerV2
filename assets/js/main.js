$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.tabs').tabs({
      swipeable: true
    });
    $('.scrollspy').scrollSpy();
    $('.fixed-action-btn').floatingActionButton();
    $('.modal').modal();
    $('.tooltipped').tooltip();
    $('.collapsible').collapsible();
    $('.carousel').carousel();
    $('.materialboxed').materialbox();

    var $container = $('#masonry-grid');
    // initialize
    $container.masonry({
      columnWidth: '.col',
      itemSelector: '.col',
    });
});