import React, { Component } from 'react';
 
import Swal from 'sweetalert2';

import BackendService from '../../services/Backend.service';

class ButtonRateMovie extends Component {
    constructor(props) {
        super(props);

    }

    openModal(e, idMovie) {
        e.preventDefault();


        console.log("TESTSTTT")
         
        const rate = 9.9 ; 
     //   console.log(idMovie);
        const GuestId =  localStorage.getItem("guest_session_id");
        console.log(GuestId);

        BackendService.rateMovie(idMovie, GuestId, rate)
        .then(
          data => {
            Swal.fire({
               icon: 'success',
              title: 'Merci !' + data,
              text:"Vous avez noté"
             })
             console.log(data)
          },
          error => {
            Swal.fire({
              icon: 'error',
             title: 'Erreur ! ',
             text:'Il y a erreur'
            }) 
          }
        );


    }

    render() {
        const { buttonTitle, buttonStyle,  idMovie  } = this.props;

        return (
            <>

                <div className="about-text-area grey-bg section-space--inner--50">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                {/* section title */}
                                <div className="section-title-area text-center ">
                                <a href="#" onClick={(e) => this.openModal(e, idMovie)} className="ht-btn ht-btn--round">NOTER</a>
                                     
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
 
            </>
        );
    }
}

export default ButtonRateMovie;