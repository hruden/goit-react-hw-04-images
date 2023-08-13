import { useContext} from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import Notiflix from 'notiflix';
import { Loader } from './Loader/Loader';
import { Context } from 'stateContext/GlobalContext';

export function App() {
  const {
    page,
    totalHits,
    per_page,
    status,
    erorrMessedge,
  } = useContext(Context);

  const isLoadMoreButtonShow = Math.ceil(totalHits / per_page) > page;

  if (status === 'rejected') {
    Notiflix.Notify.failure(erorrMessedge);
  }

  return (
    <div className="App">
      <Searchbar />
      {status === 'pending' && <Loader />}
      {status === 'resolved' && (
        <ImageGallery >
          {isLoadMoreButtonShow ? (
            <Button />
          ) : null}
        </ImageGallery>
      )}
    </div>
  );
}

// status === 'pending'

// status === 'resolved'
