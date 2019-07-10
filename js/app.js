function startApp() {
  loadData();
}

function loadData() {
  $.get('/data/page-1.json', (images) => {
    if(images.length){
      // success function
      displayPage(images);
    }
    else{
      //  faliure message
      console.log('error');
    }
  },'json');
}

function displayPage(images) {
  images.forEach( (image) => {
    const $newImage = $('#photo-template').clone();

    $newImage.find('h2').text(image.title);
    $newImage.find('img').attr('src',image.image_url);
    $newImage.find('p').text(image.keyword);
    $newImage.find('img').attr('alt', image.description);
    $newImage.removeAttr('id');
    $('main').append($newImage);
  })
}

$(startApp);
