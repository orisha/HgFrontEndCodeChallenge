/**
 * @author: Diego Favero <diego.g.favero@gmail.com>
 * @since : Jun 2020
 */

import React from 'react';
import Reactdom from 'react-dom';
import App from './app.jsx';

/* Hard Coded, but, could came from an API */

/* Offers Periods */
const Offers = ["triennially", "annually", "monthly"]

/* Offers Periods Labels*/
var  OffersLabels = []
OffersLabels["triennially"] = ["3 anos"]
OffersLabels["annually"] = ["1 ano"]
OffersLabels["monthly"] = ["1 mês"]

/* Plans Benefit */
var Benefits = []
Benefits["Plano Turbo"] = []
Benefits["Plano Turbo"][0] = "Sites Ilimitados"
Benefits["Plano Turbo"][1] = "<strong>150 GB</strong> de Armazenamento"
Benefits["Plano Turbo"][2] = "Contas de E-mail <strong>Ilimitadas</strong>"
Benefits["Plano Turbo"][3] = "Criador de Sites <strong>Grátis</strong>"
Benefits["Plano Turbo"][4] = "Certificado SSL <strong>Grátis</strong> (https)"

Benefits["Plano M"] = []
Benefits["Plano M"][0] = "Sites Ilimitados"
Benefits["Plano M"][1] = "<strong>100 GB</strong> de Armazenamento"
Benefits["Plano M"][2] = "Contas de E-mail <strong>Ilimitadas</strong>"
Benefits["Plano M"][3] = "Criador de Sites <strong>Grátis</strong>"
Benefits["Plano M"][4] = "Certificado SSL <strong>Grátis</strong> (https)"

Benefits["Plano P"] = []
Benefits["Plano P"][0] = "Para 1 Site"
Benefits["Plano P"][1] = "<strong>100 GB</strong> de Armazenamento"
Benefits["Plano P"][2] = "Contas de E-mail <strong>Ilimitadas</strong>"
Benefits["Plano P"][3] = "Criador de Sites <strong>Grátis</strong>"
Benefits["Plano P"][4] = "Certificado SSL <strong>Grátis</strong> (https)"

/* Discount to offer ( in % ) */
const Discount = 40;
const PromoCode = "PROMOHG"


/** Starts App with pre-set params */
Reactdom.render(
    <App
        Discount={Discount}
        Offers={Offers}
        OffersLabels={OffersLabels}
        Benefits={Benefits}
        PromoCode={PromoCode}
        FirstChecked={Offers[0]}
    />
    , document.getElementById("app")
)
