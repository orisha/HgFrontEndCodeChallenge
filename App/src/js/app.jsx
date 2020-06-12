/**
 * @author: Diego Favero <diego.g.favero@gmail.com>
 * @since : Jun 2020
 */

import React, { useState } from 'react';
import PriceApi from './PriceApi.jsx'
import Logo from 'react-svg-loader!../images/hostgator-logo.svg';
import MainBanner from "./MainBanner.jsx";


/**
 * App Class is the main class
 * It builds the structure of main page.
 * Basically, 4 blocks :
 * Header
 * Section Banner
 * Section Plans
 * Footer
 */
export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            triggerResize : false
        }
        var that = this
        var ReRenderTO;

        window.addEventListener('resize',  () =>{

            clearTimeout(ReRenderTO);
            ReRenderTO = setTimeout(
                function () {

                    that.setState({triggerResize : true} )
                }
                ,100
            )

        } );

    }



    render(){

        return(
            <React.Fragment>

                <header className="header">
                    <div className="container">
                        <div className="logo">
                            <a href="#" className="icon icon-logo" >
                                <Logo />
                            </a>
                        </div>
                    </div>


                </header>

                <MainBanner />

                <section className="plans-block" key={"PlansBlock"}>
                    <PriceApi
                        discount={this.props.Discount}
                        Offers={this.props.Offers}
                        OffersLabels={this.props.OffersLabels}
                        Benefits={this.props.Benefits}
                        PromoCode={this.props.PromoCode}
                        FirstChecked={this.props.FirstChecked}
                    />
                </section>

                <footer>

                    <div className={"footer-note footer-note-pos"}> <a href={"#"}> *Confira as condições da promoção </a></div>

                    <br />

                </footer>
            </React.Fragment>
        )
    }
}
