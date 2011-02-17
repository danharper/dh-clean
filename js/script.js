$(function() {

	var html, logo, slogan, nav;

	html = document.documentElement;
	logo = document.getElementsByTagName("h1")[0];
	slogan = $("hgroup h2")[0];
	nav = $("header nav")[0];

	html.className = html.className.replace(/\bno-js\b/,'') + 'js';

	$(logo).hover(
		function () {
			$(nav).hide("fast");
			$(slogan).show("fast");
		},
		function () {
			$(slogan).hide("fast");
			$(nav).show("fast");
		}
	);

});
