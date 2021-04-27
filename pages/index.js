import React, { PureComponent } from 'react';
import DocumentMeta from 'react-document-meta';
import NavBar from '../components/Layouts/NavbarTwo';
import HeroSliderThree from '../components/0-HomePage/HeroSliderThree';
import SectionPopularMovies from '../components/0-HomePage/SectionPopularMovies';
import SectionPopularTV from '../components/0-HomePage/SectionPopularTV';
import CookiesModalSimple from '../components/Layouts/CookiesModalSimple';
import BackendService from '../services/Backend.service';
import Footer from '../components/Layouts/Footer';

class Index extends PureComponent {
  render() {
    const { popularMoviesList, popularTVList } = this.props;
    const meta = {
      title: 'Safiyoudine',
      description: 'Safiyoudine',
      canonical: 'https://www.safiyoudine.fr/',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'Safiyoudine',
        },
      },
    };

    return (
      <>
        <DocumentMeta {...meta} />

        <NavBar />

         <HeroSliderThree />
        <SectionPopularMovies popularMoviesList={popularMoviesList} background="grey-bg" />
          <SectionPopularTV popularTVList={popularTVList} />

          <Footer />
      </>
    );
  }
}

/**
 * Récupération des informations nécessaires à la page
 * https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
 */
export async function getServerSideProps() {
  const { data: popularMoviesList } = await BackendService.discoverAllMoviesLatests();
  const { data: popularTVList } = await BackendService.discoverAllTVLatests();
  return {
    props: {
      popularMoviesList,
      popularTVList,
    },
  };
}

export default Index;
