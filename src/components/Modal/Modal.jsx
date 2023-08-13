import { useEffect } from "react";

export function Modal ({largeImage, alt, closeModal,}){

  useEffect(()=>{
    document.addEventListener("keydown", onEscClose);
    return () => {
      document.removeEventListener("keydown", onEscClose)
    }
  },[])

  const onEscClose = (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };
  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };
    return (
      <div className="Overlay" onClick={handleBackdropClick}>
        <div className="Modal">
          <img src={largeImage} alt={alt} />
        </div>
      </div>
    );
};
