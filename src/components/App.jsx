import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { getURL } from 'Api/fetch';
import { Button } from './Button/Button';
import Notiflix from 'notiflix';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    searchQuery: '',
    hits: [],
    page: 1,
    totalHits: 0,
    per_page: 12,
    isLoading: false,
    status: 'idel',
    erorrMessedge: '',
  };
  onSubmit = data => {
    this.setState({ ...data,            
      page: 1,
      erorrMessedge: '',
});
  };
  async componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.setState({hits:[]})
          this.fetchImages();
    }
    if (prevState.page !== this.state.page) {
      this.fetchImages();
    }
  }
  fetchImages = async () => {
    const { page, per_page, searchQuery } = this.state;
    this.setState({ status: 'pending' });

    try {
      const { hits, totalHits } = await getURL({
        searchQuery,
        page,
        per_page,
      });
      this.setState(prevState => ({
        hits: [...prevState.hits, ...hits],
        totalHits,
        status: 'resolved',
      }));
      if (!hits.length) {
        this.setState({
          status: 'rejected',
          erorrMessedge:
            'Sorry, there are no images matching your search query. Please try again.',
        });
      }
    } catch (error) {
      this.setState({
        status: 'rejected',
        erorrMessedge: 'Oops...something went wrong',
      });
    }
  };
  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  render() {
    const { hits, status, per_page, page, totalHits } = this.state;
    const isLoadMoreButtonShow = Math.ceil(totalHits / per_page) > page;

    if (status === 'rejected') {
      Notiflix.Notify.failure(this.state.erorrMessedge);
    }

    return (
      <div className='App'>
        <Searchbar onSubmit={this.onSubmit} />
        {status === 'pending' && <Loader />}
        {status === 'resolved' && (
          <ImageGallery hits={hits}>
            {isLoadMoreButtonShow ? (
              <Button handleLoadMore={this.handleLoadMore} />
            ) : null}
          </ImageGallery>
        )}
      </div>
    );
  }
}

// status === 'pending'

// status === 'resolved'
