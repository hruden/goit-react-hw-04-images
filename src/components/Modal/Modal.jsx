import { Component } from "react";

export class Modal extends Component{
  state={}
  componentDidMount() {
    document.addEventListener("keydown", this.onEscClose);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onEscClose);
  }

  onEscClose = (e) => {
    if (e.key === "Escape") {
      this.props.closeModal();
    }
  };
  handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };
  render(){
    return (
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">
          <img src={this.props.largeImage} alt={this.props.alt} />
        </div>
      </div>
    );
  }  
};
