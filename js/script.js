$(function() {

	var html = document.documentElement;
	var logo = document.getElementsByTagName("h1")[0];
	var slogan = $("hgroup h2")[0];
	var nav = $("header nav")[0];

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
