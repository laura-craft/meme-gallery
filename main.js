var imageUrls = [
  'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
  'https://etcanada.com/wp-content/uploads/2016/06/58c0500b2ac4c342c6fc4ab096ada150.jpg?quality=80&strip=all&crop=0px%2C21px%2C500px%2C333px&resize=720%2C480',
  'https://wiki.godvillegame.com/images/thumb/7/76/Prap.jpg/298px-Prap.jpg',
  'https://www.askideas.com/media/41/Before-You-See-What-Happened-Upstairs-Funny-Sad-Meme-Picture.jpg',
  'https://teamjimmyjoe.com/wp-content/uploads/2019/02/funny-memes-work-boss.jpg',
  'https://nexter.org/wp-content/uploads/2018/12/mom-memes-funny-pic8.jpg',
  'https://i0.wp.com/www.kingtumblr.com/wp-content/uploads/2018/03/Funny-Memes-about-Work-Life-7.jpg',
  'https://www.doozylist.com/wp-content/uploads/2017/10/20-Very-Funny-Animal-Memes-6.jpg',
  'https://www.thepaws.net/wp-content/uploads/2018/07/funny-pictures-dog-meme-15.jpg'

]
var gallery = document.querySelector('main');
var imageUrlInput = document.querySelector('input');
var addImageButton = document.querySelector('button');

addImageButton.addEventListener('click', function (event){
  if (imageUrlInput.value !== '') {
    imageUrls.push(imageUrlInput.value);
  }
  imageUrlInput.value = '';
  updateGallery();
});

function updateGallery() {
  gallery.innerHTML = '';

  for (var i = 0; i < imageUrls.length; i++) {
    var imageElement = document.createElement('img');
    imageElement.className = 'gallery-image';
    imageElement.src = imageUrls[i];
    gallery.appendChild(imageElement);
  }

}

updateGallery();
