/**
 * @author: Diego Favero <diego.g.favero@gmail.com>
 * @since : Jun 2020
 */

import React, { useRef, useState,  Component, PropTypes  } from 'react';
import RadioChosePlan from "./RadioChosePlan.jsx";
import RadioGroup from "@material-ui/core/RadioGroup";
import Plan from "./Plan.jsx";
import MyCarousel from "./MyCarousel.jsx";


/**
 * This component will fetch data from API
 * Format reponse as needed Params
 * Call Components for each plan
 * Control State when changes period
 */
class PriceApi extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            Rates: [],
            Products: [],
            active: this.props.FirstChecked,


        };

    }

    /**
     * It will fetch data from api and format response properly, then, changes state for re-render
     */
    GetApiData(){

        fetch("https://7ac2b8ab-f3e5-4534-863d-90dd424a6405.mock.pstmn.io/prices")
            .then(res => res.json())
            .then(
                (result) => {


                    const products = result.shared.products
                    let Products = [];
                    let Rates = [];
                    let OrderLink = [];


                    // loop over products
                    Object.values(products).forEach((product,obj) => {

                        // store names to be used as main key
                        Products[obj] = product.name;


                        // loop over plans
                        Object.values(product).forEach(


                            (period) => {

                                // this.props.Offers
                                // Offers set on index.js
                                for ( let n in this.props.Offers){

                                    if ( period[this.props.Offers[n]] ){

                                        // store all rates, so, no need to fetch api again
                                        if ( !Rates[product.name]){
                                            Rates[product.name] = []
                                        }
                                        Rates[product.name][this.props.Offers[n]] = period[this.props.Offers[n]]

                                        // build order links, so, no need to fetch api again
                                        if ( !OrderLink[product.name]){
                                            OrderLink[product.name] = []
                                        }
                                        const link = "?a=add&pid="
                                                    + product.id
                                                    + "billingcycle="
                                                    + this.props.Offers[n]
                                                    + "&promocode="
                                                    + this.props.PromoCode
                                                    + this.props.discount

                                        OrderLink[product.name][this.props.Offers[n]] = link

                                    }
                                }

                            }
                        )
                    })

                    // once we have all our responde properly formatted, lets trigger a state change
                    this.setState({

                            isLoaded: true,
                            OrderLink : OrderLink,
                            Rates : Rates,
                            Products : Products,
                            error: null,
                            active: this.props.FirstChecked

                        }
                    );

                },

                // handle errors
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    // fetch api Data on load component
    componentDidMount() {
        this.GetApiData()

    }

    // no actions need
    componentWillUnmount(){

    }


    /**
     * MatchScreen
     *
     * @param n integer
     * @param comparison string
     * @return boolean
     *
     * returns true if n is max|min|equal to n ">
     *
     */
    MatchScreen(n, comparison){



        switch (comparison) {
            case 'max':
                return n < window.innerWidth;
            case 'min':
                return n > window.innerWidth;
            case 'equal':
                return n == window.innerWidth;
            // max
            default:
                return n < window.innerWidth;

        }

    }


    render() {


        // unwrap
        const {error, isLoaded, Products, Rates, OrderLink, active} = this.state;
        const {Offers, OffersLabels, discount, FirstChecked, Benefits} = this.props;


        // build an array within plans gotten on API
        let PlansComponents = []
        {Products.map( item  => (

            PlansComponents.push(

                <Plan
                    item={item}
                    discount={discount}
                    Rates={Rates}
                    OrderLink={OrderLink}
                    Benefits={Benefits}
                    key={item + Math.random()}
                    active={active}
                />
            )

        ))}


        let DisplayPlans;
        if ( this.MatchScreen(960)){
            DisplayPlans = PlansComponents;
        }
        else {
            // carrousel will be started only if screen is smaller than 3 plans boxes
            DisplayPlans = <MyCarousel Plans={PlansComponents} />
        }




        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {

            return (
                <section className={"plans-header"}>
                    <div className={"period-header"}> Quero pagar a cada: </div>

                    <div className={"radio-o-gaga"}>
                        <RadioGroup aria-label="quiz" name="quiz" value={1}
                            onChange={event => {
                                const { value } = event.target;
                                this.setState({ active: value });
                            }}
                        >
                                <RadioChosePlan
                                    Offers={Offers}
                                    OffersLabels={OffersLabels}
                                    FirstChecked={FirstChecked}
                                />
                        </RadioGroup>
                    </div>

                    <div id={"plans"} className={"carousel-plans"}>


                        { DisplayPlans }


                    </div>
                </section>
            )
        }
    }
}
export default PriceApi







// data api response



/**
 {
    "shared":
    {
        "products":
            {
                "planoP":
                    {
                        "name": "Plano P",
                         "id": 5,
                         "cycle":
                            {
                                "monthly":{ "priceRenew": "24.19", "priceOrder": "24.19", "months": 1 },
                                "semiannually": { "priceRenew": "128.34", "priceOrder": "128.34", "months": 6 },
                                "biennially": { "priceRenew": "393.36", "priceOrder": "393.36", "months": 24 },
                                "triennially": { "priceRenew": "561.13", "priceOrder": "561.13", "months": 36 },
                                "quarterly": { "priceRenew": "67.17", "priceOrder": "67.17", "months": 3 },
                                "annually": { "priceRenew": "220.66", "priceOrder": "220.66", "months": 12 }
                            }
                    }

                ,"planoM":
                    {
                        "name": "Plano M",
                         "id": 6,
                         "cycle":
                            {
                                "monthly": { "priceRenew": "29.69", "priceOrder": "29.69", "months": 1 },
                                "semiannually": { "priceRenew": "159.54", "priceOrder": "159.54", "months": 6 },
                                "biennially": { "priceRenew": "532.56", "priceOrder": "532.56", "months": 24 },
                                "triennially": { "priceRenew": "764.22", "priceOrder": "764.22", "months": 36 },
                                "quarterly": { "priceRenew": "82.77", "priceOrder": "82.77", "months": 3 },
                                "annually": { "priceRenew": "286.66", "priceOrder": "286.66", "months": 12 }
                            }
                    }

                ,"planoTurbo":
                    {
                        "name": "Plano Turbo",
                        "id": 335,
                        "cycle": {
                            "monthly": { "priceRenew": "44.99", "priceOrder": "44.99", "months": 1 },
                            "semiannually": { "priceRenew": "257.94", "priceOrder": "257.94", "months": 6 },
                            "biennially": { "priceRenew": "983.76", "priceOrder": "983.76", "months": 24 },
                            "triennially": { "priceRenew": "1439.64", "priceOrder": "1439.64", "months": 36 },
                            "quarterly": { "priceRenew": "131.97", "priceOrder": "131.97", "months": 3 },
                            "annually": { "priceRenew": "503.88", "priceOrder": "503.88", "months": 12 }
                        }
                    }
            }
    }
}
 */


/**
 *

 a=add
 &pid=plano.id
 billingcycle=&lt;triennially|annually|monthly&gt;&amp;
 promocode=PROMOHG40"

 * **/
