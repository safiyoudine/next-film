import React, { Component } from 'react';

import Swal from 'sweetalert2';

import BackendService from '../../services/Backend.service';

class ButtonGenerateToken extends Component {
  constructor(props) {
    super(props);

  }

  openModal(e) {
    e.preventDefault();

    BackendService.generateGuestId()
      .then(
        data => {
          Swal.fire({
            icon: 'success',
            title: 'Merci !' + data.guest_session_id,
            text: "Votre token est généré."
          })
          console.log(data)
          const dataRequest = data.guest_session_id;
          localStorage.setItem("guest_session_id", dataRequest);


        },
        error => {
          Swal.fire({
            icon: 'error',
            title: 'Erreur ! ',
            text: 'Il y a erreur'
          })
        }
      );


  }

  render() {
    const { buttonTitle, buttonStyle } = this.props;

    return (
      <>

        <a href="#" onClick={(e) => this.openModal(e)} className="ht-btn ht-btn--round">GENERER CODE TOKEN</a>

      </>
    );
  }
}

export default ButtonGenerateToken;