import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { useContext } from 'react';
import { Context } from 'stateContext/GlobalContext';

export const ImageGallery =({children})=> {
  const{hits} = useContext(Context)
    return (
        <ul className="ImageGallery">
          {hits && 
          hits.map(({ id, webformatURL, largeImageURL, tags }) => {
            return (
              <ImageGalleryItem
                key={id}
                smallImage={webformatURL}
                largeImage={largeImageURL}
                title={tags}
              />
            );
          })}
          {children}
        </ul>
    );
  }


