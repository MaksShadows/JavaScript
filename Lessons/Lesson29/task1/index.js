export const addImage = (imgSrc, callback) => {
	const imgElem = document.createElement("img");
	imgElem.setAttribute('alt', 'My Photo');
	imgElem.src = imgSrc;

	const containerElem = document.querySelector('.page');
	containerElem.append(imgElem);

    callback = (error) => {
        if(error){
            console.log(error);
            return;
        }
    };
    const onImageLoaded = () => callback(null, { width: 200, height: 100 });
    imgElem.addEventListener('load', onImageLoaded);
    
    imgElem.addEventListener('error', () => callback('Image load failed'));

};

//const imgSrc = 'https://a.wattpad.com/cover/84608722-352-k886345.jpg';