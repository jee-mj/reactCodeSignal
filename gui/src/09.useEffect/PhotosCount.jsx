import { useState, useEffect } from 'react';

function PhotosCount() {
  // TODO: Initiate your state with an empty array for photos
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // TODO: Simulate adding photos ['sunset.jpg', 'mountains.png'] when the component mounts 
    setPhotos(e => [...e, 'sunset.jpg']);
    setPhotos(e => ['mountains.jpg', ...e]);

    // TODO: Return a cleanup function that will run when the component unmounts and set the photos list to an empty array
    return (
      () => { setPhotos([]) }
    );
  }, []); // Think about why this array is empty and when the effects should run

  // TODO: Render the number of photos in the portfolio
  return (
    <>
      <p>
        There are {photos.length} photos.
      </p>
    </>
  );
}

export default PhotosCount;