export const addImage = (imgSrc, callback) => {
const imgElem = document.createElement('img');
imgElem.setAttribute('alt', 'My Photo');
imgElem.src = imgSrc;

const containerElem = document.querySelector('.page');
containerElem.append(imgElem);

const onImageLoaded = () => {
  const {width, height} = imgElem;
  callback(null, {width, height});
};
imgElem.addEventListener('load', onImageLoaded);
imgElem.addEventListener('error', () => callback('Image load failed'));
};

const imgSrc = 'https://a.wattpad.com/cover/84608722-352-k886345.jpg';

const onImageLoaded = (error, data) => {

  if (error ){
    console.log(error);
    return;
  };

const {width, height} = data;
const sizeElem = document.querySelector();
sizeElem.textContent = `${width} x ${height}`;
};

addImage(imgSrc, onImageLoaded);
