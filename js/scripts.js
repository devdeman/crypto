jQuery(document).ready(function($) {

	//open-hide search dropdown

	$("#search_input").click(function() {
	  $('.search-dpopdown-list').toggle();
	});
	$(document).on('click', function(e) {
	  if (!$(e.target).closest("#searchform").length) {
	    $('.search-dpopdown-list').hide();
	  }
	  e.stopPropagation();
	});


	$(".search-col > button").click(function() {
	  $('.menu-mask').slideToggle();
	});
	
	$(".x").click(function() {
	  $('.menu-mask').slideToggle();
	});


});