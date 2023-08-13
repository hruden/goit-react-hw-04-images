import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';

export function ImageGalleryItem ({largeImage, smallImage, title}){
  const [isShowModal, setIsShowModal] = useState(false)
  const showModal = () => {
    setIsShowModal(true)
  };
  const closeModal = () => {
    setIsShowModal(false
      )  
  };
    return (
      <li className="ImageGalleryItem">
        <img className='ImageGalleryItem-image'
          src={smallImage}
          alt={title}
          onClick={showModal}
        />
        {isShowModal && (
          <Modal largeImage={largeImage} alt={title} closeModal={closeModal}/>
        )}
      </li>
    );
}
