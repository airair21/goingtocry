console.log('Hello from detail page')

// Decode URI to handle album titles with spaces
// Assumes the URL for this page looks like /albumDetail.html?title={ album_title }
const albumTitleFromQueryString = decodeURI(window.location.search.replace('?title=', ''))


function renderAlbumDetail(album) {
  // Set the title of the page to the title of the album
  document.querySelector('h1').innerText = album.title
  
  // Create an image element to display the cover image of the album
  const img = document.createElement('img')
        img.src = album.cover_image_url

  // Append it to the bottom of the page
  document.body.appendChild(img)
}

fetch('albums.json')
    .then((response) => response.json())
    .then((json) => {
      const albums = json.albums

      // Find specific album based on album title passed in URL query string
      // Use Array.find to return the first element that passes our test function
      const foundAlbum = albums.find(function(album) {
        // Check that the title of the current album in the array matches the title that we passed to the page in the URL
        return album.title === albumTitleFromQueryString
      })

      if (foundAlbum) {
        renderAlbumDetail(foundAlbum)
      }
      else {
        // console.log('You asked for an album that doesnt exist')
      }

      console.log('Found? ', foundAlbum)
    });