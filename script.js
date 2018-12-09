var poochVids = document.getElementsByClassName("pooch-vids");

[].forEach.call(poochVids, (poochVid) => {

  poochVid.addEventListener("mouseover", function(){
  	var playPromise = poochVid.play();	
 		if (playPromise !== undefined) {
 			playPromise.then(_ => {
 				console.log("now playing");
 			})
 			.catch(error => {
 				console.log("uh oh");
 			});
 		}
  });	
  poochVid.addEventListener("mouseout", function(){
	  if (!poochVid.paused) {
		  poochVid.pause(); 
		}	
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