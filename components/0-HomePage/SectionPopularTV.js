import React, { Component } from 'react';
import Link from 'next/link';
import BackendService from '../../services/Backend.service';

class SectionPopularTV extends Component {
  constructor(props) {
    super(props);

    this.state = {
      popularTVList: [],
   
    };
  }

   

  render() {
    const { popularTVList } = this.props;
  
    const Fichelist = popularTVList.results.map((popularTV, i) => {
      return (
        <div className="col-lg-4 col-sm-6 col-12 section-space--bottom--30" key={i}>
           
            {popularTV.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w1280/${popularTV.poster_path}`}
                className="img-fluid"
                alt=""
                style={{ maxWidth: '300px' }}
              />
            ) : (
              <img src={require(`../../images/blog/1.jpg`)} className="img-fluid" alt="tbl" />
            )}
         
          <div className="service-grid-item__content">
            <h3 className="title">
              <Link href={`/series/${popularTV.id}`}>
                <a>
                  {popularTV.name} - {popularTV.vote_average}
                </a>
              </Link>
            </h3>
           </div>
        </div>
      );
    });

    return (
      <div>
        <div className="page-wrapper section-space--inner--special">
          <div className="project-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title-area text-center">
                    <h1 className="section-title section-space--bottom--50">Les séries tendances !</h1>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="project-item-wrapper">
                    <div className="row">{Fichelist}</div>
                  </div>
                </div>
              </div>
            </div>{' '}
            <br />
            <br />
            <div className="row">
              <div className="col-lg-12">
                 
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionPopularTV;
