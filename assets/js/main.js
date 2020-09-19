/* Menu bar */
$(document).ready(function(){
	$('.menu').click(function(){
		$('ul').toggleClass('active');
		$('.menu').toggleClass('menu-2');
		$('.close').toggleClass('times-add');
	});
	$('.close').click(function(){
		$('ul').removeClass('active');
		$('.menu').removeClass('menu-2');
		$('.close').removeClass('times-add');
	});
});

/* Sub menu bar */
$(document).ready(function(){
	$('.responsive-sub-menu p').click(function(){
		$('.knowledge-sub-menu ul').toggleClass('open');
		$('.responsive-sub-menu p i').toggleClass('rotated');
	});
});

/* Filtering */
$(document).ready(function(){
	$('.filtering .filter p').click(function(){
		$('.knowledge-article-aside h2').toggleClass('view');
		$('.knowledge-article-aside ul').toggleClass('view');
		$('.filtering .filter p').toggleClass('remove');
		$('.filtering .filter span').toggleClass('view-2');
		$('.knowledge-article-aside .filtering h3').toggleClass('view-3');
	});
	$('.filtering .filter span').click(function(){
		$('.knowledge-article-aside h2').removeClass('view');
		$('.knowledge-article-aside ul').removeClass('view');
		$('.filtering .filter p').removeClass('remove');
		$('.filtering .filter span').removeClass('view-2');
		$('.knowledge-article-aside .filtering h3').removeClass('view-3');
	});
});


