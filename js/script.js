$(function() {

	var html, logo, slogan, nav, postheading, postdate;

	html = document.documentElement;
	logo = document.getElementsByTagName("h1")[0];
	slogan = $("hgroup h2")[0];
	nav = $("header nav")[0];
	postheading = $("#singlepost h2");
	postdate = $("#singlepost header p");

	// Change class on html tag from 'no-js' to 'js'
	html.className = html.className.replace(/\bno-js\b/,'') + 'js';

	// Show slogan when hover on logo
	$(logo).hover(
		function () {
			$(nav).stop(true,true).hide("fast");
			$(slogan).stop(true,true).show("fast");
		},
		function () {
			$(slogan).hide("fast");
			$(nav).show("fast");
		}
	);

	// Show post date when hover on title
	$(postheading).hover(
		function () {
			$(postdate).stop(true,true).fadeIn(300);
		},
		function () {
			$(postdate).stop(true,true).fadeOut(300);
		}
	);

});
