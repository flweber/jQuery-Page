$(document).ready(function() {
	$("#welcome").fadeIn(function() {
		$("#welcome").animate({top:"5%"}, 1200, function() {
			$("#welcome").fadeOut();
			//$("#head").html("<nav><ul><li><a href='#!/home' id='mhome'>home</a></li><li><a href='#!/about' id='mabout'>about</a></li><li><a href='#!/kontakt' id='mimp'>kontakt</a></li></ul></nav>");
			$("#main").animate({opacity:"0", filter:"alpha(opacity=0)"}, 400, function() {
				$("#main").load("src/pages/home.html", function() {
					$("#main").animate({opacity:"1", filter:"alpha(opacity=100)"}, 400);
				});
			});		
		});
	});
	$("#mhome").click(function() {
		$("#main").animate({opacity:"0", filter:"alpha(opacity=0)"}, 400, function() {
			$("#main").load("src/pages/home.html", function() {
				$("#main").animate({opacity:"1", filter:"alpha(opacity=100)"}, 400);
			});
		});
	});
	$("#mabout").click(function() {
		$("#main").animate({opacity:"0", filter:"alpha(opacity=0)"}, 400, function() {
			$("#main").load("src/pages/about.html", function() {
				$("#main").animate({opacity:"1", filter:"alpha(opacity=100)"}, 400);
			});
		});
	});
	$("#mimp").click(function() {
		$("#main").animate({opacity:"0", filter:"alpha(opacity=0)"}, 400, function() {
			$("#main").load("src/pages/kontakt.html", function() {
				$("#main").animate({opacity:"1", filter:"alpha(opacity=100)"}, 400);
			});
		});
	});
});
