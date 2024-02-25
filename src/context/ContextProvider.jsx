import React, { createContext, useEffect, useState } from 'react';

export const PhotoContext = createContext();

export const ContextProvider = ({ children }) => {
	const [photos, setPhotos] = useState([]);

	const fetchPhotos = async () => {
		try {
			const response = await fetch('/photos.json');
			const { photos: photosData } = await response.json();
			setPhotos(photosData);
		} catch (error) {
			console.error('Error fetching photos:', error);
		}
	};

	useEffect(() => {
		fetchPhotos();
	}, []);

	return (
		<PhotoContext.Provider value={{ photos, setPhotos }}>
			{children}
		</PhotoContext.Provider>
	);
};
