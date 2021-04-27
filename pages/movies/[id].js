import React from 'react';
import axios from 'axios';
import NavBar from '../../components/Layouts/NavbarTwo';
import Breadcrumbs from '../../components/Layouts/Breadcrumbs';
import ButtonRATEMOVIE from '../../components/Layouts/ButtonRateMovie'
 

const Movies = ({ fiche }) => {
   
  

  return (
    <>
      <NavBar />
      
      <Breadcrumbs titlePage={fiche.title} />

      <div className="about-text-area section-space--inner--80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="section-title-area text-center section-space--bottom--50">
                {fiche.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w1280${fiche.poster_path}`}
                    className="img-fluid"
                    alt=""
                    style={{ maxWidth: '250px' }}
                  />
                ) : (
                  <img src={require(`../../images/blog/1.jpg`)} className="img-fluid" alt="tbl" />
                )}
              </div>
              {/* section title */}
              <div className="section-title-area text-center section-space--bottom--50">
                <h2 className="section-title "> {fiche.overview}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*= ===================  End of about text area  ==================== */}

      <div className="about-text-area grey-bg section-space--inner--80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="video-cta-content">
                <h4 className="video-cta-content__small-title">{fiche.overview} </h4>
                <h3 className="video-cta-content__title">{fiche.overview}</h3>
                <p className="video-cta-content__text-bl">  </p>
              </div>
            </div>
           
          </div>
        </div>
        <br /> <br /> <br />
         
      </div>
      {/*= ===================  End of about text area  ==================== */}

    <ButtonRATEMOVIE idMovie={fiche.id} />


    </>
  );
};
 
export async function getServerSideProps({ params, res }) {

  const API_MOVIE_ID = `https://api.themoviedb.org/3/movie/${params.id}?api_key=7501cfea637934c594ec089031ca3983`; 
  const { data: fiche } = await axios.get(API_MOVIE_ID);

  return {
    props: {
      fiche
    },
  };

   
}

export default Movies;
