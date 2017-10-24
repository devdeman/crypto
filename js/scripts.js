jQuery(document).ready(function($) {

	//open-hide search dropdown

	$("#search_input").click(function() {
	  $('.search-dpopdown-list').slideToggle().animate({'opacity': 1},100);;
	});
	$(document).on('click', function(e) {
	  if (!$(e.target).closest("#searchform").length) {
	    $('.search-dpopdown-list').fadeOut();
	  }
	  e.stopPropagation();
	});

	$("#search_input").click(function() {
	  $('#searchform').addClass('search-act');
	});
	$(document).on('click', function(e) {
	  if (!$(e.target).closest("#search_input").length) {
	    $('#searchform').removeClass('search-act');
	  }
	  e.stopPropagation();
	});

	$(".search-dpopdown-list li a").click(function() {
	  $('.search-dpopdown-list').toggle();
	});

	$(".search-col > button").click(function() {
	  $('.menu-mask').prependTo('body');
	  $('.x').show();
	});
	
	$(".x").click(function() {
	  $('.menu-mask').appendTo('body');
	  $('.x').hide();
	});


});