console.log('Hello from detail page')

const LOCAL_STORAGE_ITINERARY_KEY = 'itinerary'

// Decode URI to handle album titles with spaces
// Assumes the URL for this page looks like /albumDetail.html?title={ album_title }
const albumTitleFromQueryString = decodeURI(window.location.search.replace('?title=', ''))


function renderAlbumDetail(album) {
  // Set the title of the page to the title of the album
  document.querySelector('h1').innerText = album.Station_Name
  document.querySelector('div').innerText = album.Art_Title
  
  // Create an image element to display the cover image of the album
  // const img = document.createElement('img')
  //       img.src = album.img_url

  // // Append it to the bottom of the page
  // document.body.appendChild(img)


  const albumElement = document.createElement('div')

  // albumElement.classList.add('album')
  // albumElement.classList.add(`album-${i}`)

  // Create the inner HTML content
  const albumHTML = `
      <img src="${album.img_url}">
      <h2> ${album.Station_Name} </h2>
    <ul>
      <p> ${album.Art_Title}</p>
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
  // albumsList.appendChild(albumElement) 
}

fetch('albums.json')
    .then((response) => response.json())
    .then((json) => {
      const albums = json.albums

      // Find specific album based on album title passed in URL query string
      // Use Array.find to return the first element that passes our test function
      const foundAlbum = albums.find(function(album) {
        // Check that the title of the current album in the array matches the title that we passed to the page in the URL
        return album.Station_Name === albumTitleFromQueryString
      })

      if (foundAlbum) {
        renderAlbumDetail(foundAlbum)
      }
      else {
        // console.log('You asked for an album that doesnt exist')
      }

      console.log('Found? ', foundAlbum)

      // Add event listener to save button
      const saveButton = document.getElementById('save-button');
      saveButton.addEventListener('click', () => {
        console.log(foundAlbum)
        console.log('current value of itinerary is', localStorage.getItem(LOCAL_STORAGE_ITINERARY_KEY))

        console.log('we need to add the station to the list')
        localStorage.setItem(LOCAL_STORAGE_ITINERARY_KEY, foundAlbum.Station_Name);
        // console.log(`Saved ${Art_Title} at ${Station_Name} to localStorage`);
      });
    });

