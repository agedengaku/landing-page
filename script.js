var poochVids = document.getElementsByClassName("pooch-vids");

[].forEach.call(poochVids, (poochVid) => {
  poochVid.addEventListener("mouseover", function(){
 	poochVid.play();
  });	
  poochVid.addEventListener("mouseout", function(){
 	poochVid.pause();
  });  
});

$('.single-item').slick({
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 5000
});