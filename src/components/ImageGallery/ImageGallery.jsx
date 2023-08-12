import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery =({hits, children})=> {

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


