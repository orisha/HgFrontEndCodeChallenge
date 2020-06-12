/**
 * @author: Diego Favero <diego.g.favero@gmail.com>
 * @since : Jun 2020
 */
import React from "react";


/** I could not use svg into scss files, so, this a way to load all need images here
* Uggly, but functional
*/

import LeftDesk from    "react-svg-loader!../images/leftDesk.svg";
import IconCheck from   "react-svg-loader!../images/icon-check.svg";
import RightDesk from   "react-svg-loader!../images/rightDesk.svg";
import BigWave from     "react-svg-loader!../images/bigwave.svg";
import ArrowDown from   "react-svg-loader!../images/ArrowDown.svg";

/**
 * Main Banner
 *
 * Returns main Banner section
 *
 * it is a static class
 */
class MainBanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

    }
    render(){

        return(
            <section key={"MainBanner"}>
            <div>


                <div className={"top-main-banner"}></div>
                <div className={"main-banner"}>
                    <div className={"left-banner"}><LeftDesk/></div>
                    <div className={"middle-banner"}>
                        <div className={"middle-text middle-text-medium"}>Hospedagem de Sites</div>
                        <div className={"middle-text middle-text-big"}>Tenha uma hospedagem de sites estável e evite perder visitantes diariamente</div>
                        <div className={"middle-text middle-text-small"}><span className={"icon-check"}> <IconCheck/> </span> 99,9% de disponibilidade: seu site sempre no ar</div>
                        <div className={"middle-text middle-text-small"}><span className={"icon-check"}> <IconCheck/> </span> Suporte 24h, todos os dias</div>
                        <div className={"middle-text middle-text-small"}><span className={"icon-check"}> <IconCheck/> </span> Painel de Controle cPanel</div>
                    </div>
                    <div className={"right-banner"}><RightDesk /></div>
                </div>
                <div className={"big-wave-hood"}>
                    <div className={"big-wave"}> <BigWave /> </div>

                    <div className={"arrow-down"} >
                        <a href="#" >
                            <ArrowDown />
                        </a>
                    </div>
                </div>

            </div>
            </section>

        )

    }
}
export default MainBanner
