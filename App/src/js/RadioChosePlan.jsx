/**
 * @author: Diego Favero <diego.g.favero@gmail.com>
 * @since : Jun 2020
 */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from "@material-ui/core/FormControlLabel";

// styled radio button
const BlueRadio = withStyles({
    root: {
        color: "#4480c5",
        '&$checked': {
            color: "#FFF",
        },
    },

    checked: {
        color : "#FFFFFF",
        '&$checked': {
            color: "#FFFFF",
        },
    },
})((
    props) =>
        <Radio
            color="primary"
            {...props}
        />
    );

/**
 * This class will genereate the radio buttons
 * @param radioArgs
 * @return {*}
 * @constructor
 */
export default function RadioButtons(radioArgs) {
    const [selectedValue, setSelectedValue, SelectedClass] = React.useState(radioArgs.FirstChecked);

    const handleChange = (event) => {
        setSelectedValue(event.target.value);


    };


    return (

            <div className="radio-hood">
                {radioArgs.Offers.map( offer => (

                    <FormControlLabel key={offer}

                        control={<BlueRadio color="primary" className={"sss"} />}
                        labelPlacement="end"
                        checked={selectedValue === offer }
                        onChange={handleChange}
                        value={offer}
                        name="radio-button-demo"
                        label={radioArgs.OffersLabels[offer]}
                        className={ `${selectedValue === offer ? 'radio-choose-plan-selected' : ''}`}
                />
                ) )}
            </div>

    );
}
