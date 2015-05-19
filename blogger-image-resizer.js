/* Image Resizer by LeinardoSmith */
/* Website: weaverdesign.blop.me */

function bloggerImageResizer() {
/* Change only the numbers here the known numbers are: 320 400 640 1280 1600 */

	var newImgSize = "640"; /* This is the new image size */
	/* Try out the different sizes: 320 400 640 1280 1600 */

	/* DO NOT CHANGE ANYTHING AFTER THIS LINE! */
	var images = document.images;

	for (var i = 0; i < images.length; i++) {
		if (images[i].src.indexOf(".blogspot.com/")) {
			images[i].src = images[i].src.replace(/\/s[\d]{1,4}\//g, '/s' + newImgSize + '/');
			images[i].style.display = '';
			images[i].style.width = 'auto';
			images[i].style.height = 'auto';
		}
	}
}

window.onload = bloggerImageResizer;
