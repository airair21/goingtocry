const albumsList = document.getElementById('albums-list')

function renderAlbum(album, i) {
  // Create .album element
  const albumElement = document.createElement('div')

  albumElement.classList.add('album')
  albumElement.classList.add(`album-${i}`)

  console.log(albumElement)
  console.log(album.cover_image_url)

  // Create the inner HTML content
  const albumHTML = `
    <a href="albumDetail.html?title=${album.Station_Name}">
      <img src="${album.img_url}">
    </a>
    <ul>
      <li>Title: ${album.Station_Name}</li>
      <li>Line: ${album.Line}</li>
      <li>Artist: ${album.Art_Title}</li>
      <li>Added By: ${album.Art_Material}</li>
      <li>
        <a href="${album.Art_Image_Link}">
         Listen Here
        </a>
      <li>
    </ul>
  `

  // Set the inner HTML content of the albumElement
  albumElement.innerHTML = albumHTML

  // Add to the list #albums-list
  albumsList.appendChild(albumElement)
}

// Start App!
// albums.forEach(function(album) {
//   // if (album.year_released < 2000) {
//     renderAlbum(album)
//   // }
// })

fetch('albums.json')
    .then((response) => response.json())
    .then((json) => {
      json.albums.forEach(function(album, i) {
        // if (album.year_released < 2000) {
          renderAlbum(album, i)
        // }
      })
    });
