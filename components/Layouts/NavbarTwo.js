import React, { Component } from 'react';
import Link from '../../utils/ActiveLink';
import ButtonGenerateToken from '../../components/Layouts/ButtonGenerateTocken'

class Navbar extends Component {
  // Search Form
  state = {
    searchForm: false,
  };

  handleSearchForm = () => {
    this.setState((prevState) => {
      return {
        searchForm: !prevState.searchForm,
      };
    });
  };

  // Navbar
  _isMounted = false;

  state = {
    display: false,
    collapsed: true,
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  componentDidMount() {
    const elementId = document.getElementById('navbar');
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        elementId.classList.add('is-sticky');
      } else {
        elementId.classList.remove('is-sticky');
      }
    });
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { collapsed } = this.state;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed
      ? 'navbar-toggler navbar-toggler-right collapsed'
      : 'navbar-toggler navbar-toggler-right';

    return (
      <>
        <div id="navbar" className="navbar-area">
          <div className="main-nav">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link href="/">
                  <a className="navbar-brand">
                    {/* <img src={require("../../images/logo/logo-color.png")} className="main-logo" alt="logo" width="150" />
                                        <img src={require("../../images/logo/logo-color.png")} className="optional-logo" alt="logo"  width="100" /> */}
                  </a>
                </Link>

                <button
                  onClick={this.toggleNavbar}
                  className={classTwo}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar top-bar" />
                  <span className="icon-bar middle-bar" />
                  <span className="icon-bar bottom-bar" />
                </button>

                <div className={classOne} id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link href="/" activeClassName="active">
                        <a className="nav-link">Accueil</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/"  >
                        <a className="nav-link">Films</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/"  >
                        <a className="nav-link">Séries</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/wishlist"  >
                        <a className="nav-link">Mes favoris</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/list"> 
                        <a className="nav-link">Mes likes</a>
                      </Link>
                    </li>
                  </ul>

                  <ButtonGenerateToken buttonStyle="ht-btn ht-btn--round-min"   />
                </div>
              </nav>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
