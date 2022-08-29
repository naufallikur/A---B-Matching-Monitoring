import { APICall_GetData } from './APICall.js';
import { datastructure_mapping } from './datamapping.js';

async function datastructure_preparing(line_number, typeofring, monitoring_mode, startdate, enddate, ring_size_target)
{
    let label_tol_negative = [];
    let label_tol_positive = [];
    let num_of_target_value;
    let value_of_target;
    let tol_negative = [];
    let tol_positive = [];

    [label_tol_negative, tol_negative, num_of_target_value, value_of_target, tol_positive, label_tol_positive] = await APICall_GetData(line_number, typeofring, monitoring_mode, startdate, enddate, ring_size_target);

    let datastructure = [];

    datastructure = datastructure_mapping(datastructure, value_of_target, num_of_target_value, tol_positive, tol_negative, label_tol_positive, label_tol_negative);

    //join the arrays of y value
    let y_value = (tol_negative.reverse()).concat(num_of_target_value, tol_positive);

    //get the size with maximum value of distribution frequency
    let max_freq = Math.max(...y_value);

    let index_max_freq = y_value.indexOf(max_freq);

    return [datastructure, value_of_target, index_max_freq];
}

export { datastructure_preparing };