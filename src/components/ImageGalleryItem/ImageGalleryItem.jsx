import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    isShowModal: false,
  };
  showModal = () => {
    this.setState({ isShowModal: true });
  };
  closeModal = () => {
    this.setState({ isShowModal: false });
  };
  render() {
    return (
      <li className="ImageGalleryItem">
        <img className='ImageGalleryItem-image'
          src={this.props.smallImage}
          alt={this.props.title}
          onClick={this.showModal}
        />
        {this.state.isShowModal && (
          <Modal largeImage={this.props.largeImage} alt={this.props.title} closeModal={this.closeModal} />
        )}
      </li>
    );
  }
}
