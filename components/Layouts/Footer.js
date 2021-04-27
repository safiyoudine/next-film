import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
  
class Footer extends Component {


    constructor(props) {
        super(props);
        this.state = {};
        this.handleScroll = this.handleScroll.bind(this);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    handleScroll() {
        if (this.mount) {
            this.setState({ scroll: window.scrollY });
        }
    }

    scrollToTop() {
        scroll.scrollToTop();
    }
  
   

   

    componentWillUnmount() {
        this.mount = false;
    }

    render() {
        return (
            <div>
                {/*====================  footer area ====================*/}
                <div className="footer-area dark-blue-bg">
                    
                    <div className="footer-copyright-wrapper">
                        <div className="footer-copyright text-center">
                            Tous droits reservés à Safiyoudine.fr © 2021.
                        </div>
                    </div>
                </div>
                {/*====================  End of footer area  ====================*/}
                {/*====================  scroll top ====================*/}
                
                {/*====================  End of scroll top  ====================*/}
            </div>
        )
    }
}


export default Footer;