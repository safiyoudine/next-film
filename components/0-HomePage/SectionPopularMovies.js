import React, { Component } from 'react';
import Link from 'next/link';
import BackendService from '../../services/Backend.service';

class SectionPopularMovies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      popularMoviesList: [],
      errorMessage: '',
      infoMessage: '',

      //   currentUser: new User(),
    };
  }

  

  render() {
    const { popularMoviesList } = this.props;
    const { infoMessage, errorMessage } = this.state;
    console.log(popularMoviesList); 
    
    const Datalist = popularMoviesList.results.map((popularMovie, i) => {
      return (
        <div className="col-lg-4 col-md-6 col-12" key={i}>
          <div className="single-feature-icon">
            <div className="single-feature-icon__image">
              
              {popularMovie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w1280${popularMovie.poster_path}`}
                  className="img-fluid radios"
                  alt="tbl"
                  style={{ maxWidth: '300px' }}
                />
              ) : (
                <img src={require(`../../images/blog/1.jpg`)} className="img-fluid radios" alt="tbl" />
              )}
            </div>


            <Link href={`/movies/${popularMovie.id}`}>
           <h2 className="single-feature-icon__title">{popularMovie.title} - {popularMovie.vote_average} </h2>
              </Link>


            
          </div>
        </div>
      );
    });

    return (
      <div>
        {/*= ===================  feature icon area ==================== */}
        <div className="feature-icon-area blue-light-bg section-space--inner--80">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* section title */}
                <div className="section-title-area text-center section-space--bottom--50">
                  <h1 className="section-title">Les films tendances !</h1>
                </div>
              </div>

              <div className="col-lg-12 specia-padding">
                <div className="feature-icon-wrapper">
                  <div className="row">{Datalist}</div>

                   
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*= ===================  End of feature icon area  ==================== */}
      </div>
    );
  }
}

export default SectionPopularMovies;
