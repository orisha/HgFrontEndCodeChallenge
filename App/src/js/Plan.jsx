/**
 * @author: Diego Favero <diego.g.favero@gmail.com>
 * @since : Jun 2020
 */
import React from "react";
import ReactHtmlParser from 'react-html-parser';
import IImg from "react-svg-loader!../images/Componente4.svg";
import PlanoTurbo from 'react-svg-loader!../images/PlanoTurbo.svg';
import PlanoM from 'react-svg-loader!../images/PlanoM.svg';
import PlanoP from 'react-svg-loader!../images/PlanoP.svg';


/**
 * Generates the Plan Box
 */
class Plan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

    }


    /** DoTheMaths **/
    setDiscountMonthly( price, _number ){

        var ret = Number(this.setDiscount(price)) / Number(_number)
        return ret.toFixed(2)
    }
    setDiscount( price ){

        var numVal1 = Number(price);
        var numVal2 = this.props.discount / 100;
        var totalValue = numVal1 - (numVal1 * numVal2)
        return totalValue.toFixed(2);
    }
    displaySavedAmount(price){

        var ret = Number(price) - Number(this.setDiscount(price))
        return ret.toFixed(2)
    }

    /**
     * Images
     */

    setImage(who){

        switch (who) {
            case "Plano P":
                return (
                    <PlanoP/>
                )
            case "Plano M":
                return (
                    <PlanoM/>
                )
            case "Plano Turbo":
                return (
                    <PlanoTurbo/>
                )

        }

    }


    render(){

        // unwrap
        const {Rates, item, Benefits, OrderLink, active, discount} = this.props

        return(


            <div id={"plan" + item} className={"plan-package-box " }  >
                <div className={"plan-package-box-highlight plan-package-box-highlight-top"}></div>
                <div className={"image-header-plan"}>
                    {this.setImage(item)}
                </div>
                <div className={"plan-package-inner "}   >
                    <div className="plan-header">
                        <h4 className="title">{item}</h4>
                    </div>
                    <div className="equivalent">
                                        <span className="default-price">
                             R$ <span className="price">{Rates[item][active].priceOrder}</span>
                                        </span>
                        <strong>
                            R$ <span className="current-price" id="">{this.setDiscount(Rates[item][active].priceOrder)}</span>
                        </strong>

                        <br />
                        <span className="text">equivalente a</span>
                    </div>
                    <div className="featured-price">
                        R$ <span className="price price-big">{this.setDiscountMonthly(Rates[item][active].priceOrder, Rates[item][active].months )}</span>
                        <span className="period">/mês*</span>
                    </div>

                    <div className="OrderNow">
                        <a href={OrderLink[item][active]}>Contrate Agora</a>
                    </div>


                    <div className="free-domain"  data-cycles="annually triennially"
                         data-discount-annually="137,22" data-discount-triennially="256,39">
                                        <span className="domain-save-money-content">
                                            <strong>1 ano de Domínio Grátis</strong>
                                            <a href="#" className={"info-gratis"} data-toggle="modal" data-target="#free-domain" tabIndex="0">
                                                <IImg/>
                                            </a>
                                        </span>
                        <br />
                        <span className="domain-save-money">
                                            economize R$
                                            <span className="price">{this.displaySavedAmount(Rates[item][active].priceOrder)}</span>
                                            <span className="discount">{discount}% Off</span>
                                        </span>
                    </div>

                    <ul className="content-list">


                        {Benefits[item].map( benefit => (
                            <li key={Math.random()}>
                                                <span className="tooltip-handler" data-toggle="tooltip">
                                                    {ReactHtmlParser (benefit)}
                                                </span>
                            </li>

                        ))}



                    </ul>

                </div>
                <div className={"plan-package-box-highlight plan-package-box-highlight-bottom"}></div>
            </div>
        )

    }
}
export default Plan
