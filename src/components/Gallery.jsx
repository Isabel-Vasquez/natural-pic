// Gallery.js
import React, { useContext } from 'react';
import IconHeart from '../components/IconHeart';
import { PhotoContext } from '../context/ContextProvider';

const Gallery = () => {
	const { photos, setPhotos } = useContext(PhotoContext);
	const handleLike = (id) => {
		const updatedPhotos = photos.map((photo) =>
			photo.id === id ? { ...photo, liked: !photo.liked } : photo,
		);
		setPhotos(updatedPhotos);
	};

	return (
		<div className="gallery grid-columns-5 p-3">
			{photos.map((photo) => (
				<div key={photo.id} className="gallery-item">
					<img
						src={photo.src.medium}
						alt={photo.alt}
						className="gallery-image"
					/>
					<button className="like-button" onClick={() => handleLike(photo.id)}>
						<IconHeart filled={photo.liked} />
					</button>
				</div>
			))}
		</div>
	);
};

export default Gallery;
