// Favorites.js
import React, { useContext } from 'react';
import { PhotoContext } from '../context/ContextProvider';

const Favorites = () => {
	const { photos } = useContext(PhotoContext);

	const favoritePhotos = photos.filter((photo) => photo.liked === true);

	return (
		<div>
			<h1>Fotos favoritas</h1>
			<div className="gallery grid-columns-4 p-3">
				{favoritePhotos.map((photo) => (
					<div key={photo.id} className="gallery-item">
						<img
							src={photo.src.medium}
							alt={photo.alt}
							className="gallery-image"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Favorites;
