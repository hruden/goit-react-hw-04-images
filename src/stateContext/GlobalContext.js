import { getURL } from '../Api/fetch';
import { createContext, useEffect, useState } from 'react';

export const Context = createContext();

export function GlobalContext({ children }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [hits, setHits] = useState([]);
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);
  const [per_page, setPer_page] = useState(12);
  const [status, setStatus] = useState('idel');
  const [erorrMessedge, setErorrMessedge] = useState('');
  const fetchImages = async () => {
    setStatus('pending');
    try {
      const { hits, totalHits } = await getURL({
        searchQuery,
        page,
        per_page,
      });
      setHits(s => [...s, ...hits]);
      setTotalHits(totalHits);
      setStatus('resolved');

      if (!hits.length) {
        setStatus('rejected');
        setErorrMessedge(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }
    } catch (error) {
      setStatus('rejected');
      setErorrMessedge('Oops...something went wrong');
    }
  };

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    setHits([]);
    fetchImages();
  }, [searchQuery]);

  useEffect(() => {
    if (page === 1) {
      return;
    }
    fetchImages();
  }, [page]);
  return (
    <Context.Provider
      value={{
        searchQuery,
        setSearchQuery,
        hits,
        setHits,
        totalHits,
        setTotalHits,
        per_page,
        setPer_page,
        page,
        setPage,
        status,
        setStatus,
        erorrMessedge,
        setErorrMessedge,
        fetchImages,
      }}
    >
      {children}
    </Context.Provider>
  );
}
