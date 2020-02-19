export const addImage = imgSrc => {
  const p = new Promise((resolveCb, rejectCb) =>{
    const imgElem = document.createElement("img");
    imgElem.setAttribute('alt', 'My Photo');
    imgElem.src = imgSrc;
  
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);
    
    const onImageLoaded = () => resolveCb({ width: 200, height: 100 });
    imgElem.addEventListener('load', onImageLoaded);
    
    imgElem.addEventListener('error', () => rejectCb('Image load failed'));
  });
  return p;
};