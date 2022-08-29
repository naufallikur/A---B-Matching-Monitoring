//function to mapping data structure for chartjs
function datastructure_mapping(structured_data, value_target, value_center, value_tolerance_positive, value_tolerance_negative, value_tolerance_positive_label, value_tolerance_negative_label)
{
    for (let i = 0; i < 23; i++)
    {

        if (i >= 0 && i <= 10)
        {
            let structureddata_child = {};
            structureddata_child.label_x_axis = value_tolerance_negative_label[(10 + (i * (-1)))];
            structureddata_child.y_axis_value = value_tolerance_negative[(10 + (i * (-1)))];

            structured_data.push(structureddata_child);
        }
        else if (i === 11)
        {
            let structureddata_child = {};
            structureddata_child.label_x_axis = (value_target - 0.5).toString() + " - " + (value_target + 0.5).toString();
            structureddata_child.y_axis_value = value_center;

            structured_data.push(structureddata_child);
        }
        else if (i > 11 && i <= 22)
        {
            let structureddata_child = {};
            structureddata_child.label_x_axis = value_tolerance_positive_label[(i - 12)];
            structureddata_child.y_axis_value = value_tolerance_positive[(i - 12)];

            structured_data.push(structureddata_child);
        }
    }

    return structured_data;
}

//function to mapping json data from API
function mapping_json_data(data1, number_line, type_ring)
{
    let ring_size_target;
    let tolerance_positive = [];
    let tolerance_negative = [];
    let tolerance_positive_label = [];
    let tolerance_negative_label = [];
    let number_of_center_value;

    if (number_line === '213')
    {
        if (type_ring === 'A')
        {
            ring_size_target = data1[0].value_target_213L_A;
            number_of_center_value = data1[0].number_of_target_213L_A;

            for (let i = 0; i < 11; i++)
            {
                if (i === 10)
                {
                    tolerance_negative_label[i] = "<" + (ring_size_target - 11.5).toFixed(1);
                    tolerance_positive_label[i] = ">" + (ring_size_target + 11.5).toFixed(1);
                }
                else
                {
                    tolerance_negative_label[i] = ((ring_size_target - (0.6 + (i * 1.1))) - 1).toFixed(1) + " - " + (ring_size_target - (0.6 + (i * 1.1))).toFixed(1);
                    tolerance_positive_label[i] = ((ring_size_target + (0.5 + ((i + 1) * 1.1))) - 1).toFixed(1) + " - " + (ring_size_target + (0.5 + ((i + 1) * 1.1))).toFixed(1);
                }
            }

            tolerance_negative[10] = data1[0].number_of_minus_over_213L_A;
            tolerance_negative[9] = data1[0].number_of_minus_10_213L_A;
            tolerance_negative[8] = data1[0].number_of_minus_9_213L_A;
            tolerance_negative[7] = data1[0].number_of_minus_8_213L_A;
            tolerance_negative[6] = data1[0].number_of_minus_7_213L_A;
            tolerance_negative[5] = data1[0].number_of_minus_6_213L_A;
            tolerance_negative[4] = data1[0].number_of_minus_5_213L_A;
            tolerance_negative[3] = data1[0].number_of_minus_4_213L_A;
            tolerance_negative[2] = data1[0].number_of_minus_3_213L_A;
            tolerance_negative[1] = data1[0].number_of_minus_2_213L_A;
            tolerance_negative[0] = data1[0].number_of_minus_1_213L_A;
            tolerance_positive[0] = data1[0].number_of_plus_1_213L_A;
            tolerance_positive[1] = data1[0].number_of_plus_2_213L_A;
            tolerance_positive[2] = data1[0].number_of_plus_3_213L_A;
            tolerance_positive[3] = data1[0].number_of_plus_4_213L_A;
            tolerance_positive[4] = data1[0].number_of_plus_5_213L_A;
            tolerance_positive[5] = data1[0].number_of_plus_6_213L_A;
            tolerance_positive[6] = data1[0].number_of_plus_7_213L_A;
            tolerance_positive[7] = data1[0].number_of_plus_8_213L_A;
            tolerance_positive[8] = data1[0].number_of_plus_9_213L_A;
            tolerance_positive[9] = data1[0].number_of_plus_10_213L_A;
            tolerance_positive[10] = data1[0].number_of_plus_over_213L_A;
        }
        else if (type_ring === 'B')
        {
            ring_size_target = data1[0].value_target_213L_B;
            number_of_center_value = data1[0].number_of_target_213L_B;

            for (let i = 0; i < 11; i++)
            {
                if (i === 10)
                {
                    tolerance_negative_label[i] = "<" + (ring_size_target - 11.5).toFixed(1);
                    tolerance_positive_label[i] = ">" + (ring_size_target + 11.5).toFixed(1);
                }
                else
                {
                    tolerance_negative_label[i] = ((ring_size_target - (0.6 + (i * 1.1))) - 1).toFixed(1) + " - " + (ring_size_target - (0.6 + (i * 1.1))).toFixed(1);
                    tolerance_positive_label[i] = ((ring_size_target + (0.5 + ((i + 1) * 1.1))) - 1).toFixed(1) + " - " + (ring_size_target + (0.5 + ((i + 1) * 1.1))).toFixed(1);
                }
            }

            tolerance_negative[10] = data1[0].number_of_minus_over_213L_B;
            tolerance_negative[9] = data1[0].number_of_minus_10_213L_B;
            tolerance_negative[8] = data1[0].number_of_minus_9_213L_B;
            tolerance_negative[7] = data1[0].number_of_minus_8_213L_B;
            tolerance_negative[6] = data1[0].number_of_minus_7_213L_B;
            tolerance_negative[5] = data1[0].number_of_minus_6_213L_B;
            tolerance_negative[4] = data1[0].number_of_minus_5_213L_B;
            tolerance_negative[3] = data1[0].number_of_minus_4_213L_B;
            tolerance_negative[2] = data1[0].number_of_minus_3_213L_B;
            tolerance_negative[1] = data1[0].number_of_minus_2_213L_B;
            tolerance_negative[0] = data1[0].number_of_minus_1_213L_B;
            tolerance_positive[0] = data1[0].number_of_plus_1_213L_B;
            tolerance_positive[1] = data1[0].number_of_plus_2_213L_B;
            tolerance_positive[2] = data1[0].number_of_plus_3_213L_B;
            tolerance_positive[3] = data1[0].number_of_plus_4_213L_B;
            tolerance_positive[4] = data1[0].number_of_plus_5_213L_B;
            tolerance_positive[5] = data1[0].number_of_plus_6_213L_B;
            tolerance_positive[6] = data1[0].number_of_plus_7_213L_B;
            tolerance_positive[7] = data1[0].number_of_plus_8_213L_B;
            tolerance_positive[8] = data1[0].number_of_plus_9_213L_B;
            tolerance_positive[9] = data1[0].number_of_plus_10_213L_B;
            tolerance_positive[10] = data1[0].number_of_plus_over_213L_B;
        }
    }
    if (number_line === '214')
    {
        if (type_ring === 'A')
        {
            ring_size_target = data1[0].value_target_214L_A;
            number_of_center_value = data1[0].number_of_target_214L_A;

            for (let i = 0; i < 11; i++)
            {
                if (i === 10)
                {
                    tolerance_negative_label[i] = "<" + (ring_size_target - 11.5).toFixed(1);
                    tolerance_positive_label[i] = ">" + (ring_size_target + 11.5).toFixed(1);
                }
                else
                {
                    tolerance_negative_label[i] = ((ring_size_target - (0.6 + (i * 1.1))) - 1).toFixed(1) + " - " + (ring_size_target - (0.6 + (i * 1.1))).toFixed(1);
                    tolerance_positive_label[i] = ((ring_size_target + (0.5 + ((i + 1) * 1.1))) - 1).toFixed(1) + " - " + (ring_size_target + (0.5 + ((i + 1) * 1.1))).toFixed(1);
                }
            }

            tolerance_negative[10] = data1[0].number_of_minus_over_214L_A;
            tolerance_negative[9] = data1[0].number_of_minus_10_214L_A;
            tolerance_negative[8] = data1[0].number_of_minus_9_214L_A;
            tolerance_negative[7] = data1[0].number_of_minus_8_214L_A;
            tolerance_negative[6] = data1[0].number_of_minus_7_214L_A;
            tolerance_negative[5] = data1[0].number_of_minus_6_214L_A;
            tolerance_negative[4] = data1[0].number_of_minus_5_214L_A;
            tolerance_negative[3] = data1[0].number_of_minus_4_214L_A;
            tolerance_negative[2] = data1[0].number_of_minus_3_214L_A;
            tolerance_negative[1] = data1[0].number_of_minus_2_214L_A;
            tolerance_negative[0] = data1[0].number_of_minus_1_214L_A;
            tolerance_positive[0] = data1[0].number_of_plus_1_214L_A;
            tolerance_positive[1] = data1[0].number_of_plus_2_214L_A;
            tolerance_positive[2] = data1[0].number_of_plus_3_214L_A;
            tolerance_positive[3] = data1[0].number_of_plus_4_214L_A;
            tolerance_positive[4] = data1[0].number_of_plus_5_214L_A;
            tolerance_positive[5] = data1[0].number_of_plus_6_214L_A;
            tolerance_positive[6] = data1[0].number_of_plus_7_214L_A;
            tolerance_positive[7] = data1[0].number_of_plus_8_214L_A;
            tolerance_positive[8] = data1[0].number_of_plus_9_214L_A;
            tolerance_positive[9] = data1[0].number_of_plus_10_214L_A;
            tolerance_positive[10] = data1[0].number_of_plus_over_214L_A;
        }
        else if (type_ring === 'B')
        {
            ring_size_target = data1[0].value_target_214L_B;
            number_of_center_value = data1[0].number_of_target_214L_B;

            for (let i = 0; i < 11; i++)
            {
                if (i === 10)
                {
                    tolerance_negative_label[i] = "<" + (ring_size_target - 11.5).toFixed(1);
                    tolerance_positive_label[i] = ">" + (ring_size_target + 11.5).toFixed(1);
                }
                else
                {
                    tolerance_negative_label[i] = ((ring_size_target - (0.6 + (i * 1.1))) - 1).toFixed(1) + " - " + (ring_size_target - (0.6 + (i * 1.1))).toFixed(1);
                    tolerance_positive_label[i] = ((ring_size_target + (0.5 + ((i + 1) * 1.1))) - 1).toFixed(1) + " - " + (ring_size_target + (0.5 + ((i + 1) * 1.1))).toFixed(1);
                }
            }

            tolerance_negative[10] = data1[0].number_of_minus_over_214L_B;
            tolerance_negative[9] = data1[0].number_of_minus_10_214L_B;
            tolerance_negative[8] = data1[0].number_of_minus_9_214L_B;
            tolerance_negative[7] = data1[0].number_of_minus_8_214L_B;
            tolerance_negative[6] = data1[0].number_of_minus_7_214L_B;
            tolerance_negative[5] = data1[0].number_of_minus_6_214L_B;
            tolerance_negative[4] = data1[0].number_of_minus_5_214L_B;
            tolerance_negative[3] = data1[0].number_of_minus_4_214L_B;
            tolerance_negative[2] = data1[0].number_of_minus_3_214L_B;
            tolerance_negative[1] = data1[0].number_of_minus_2_214L_B;
            tolerance_negative[0] = data1[0].number_of_minus_1_214L_B;
            tolerance_positive[0] = data1[0].number_of_plus_1_214L_B;
            tolerance_positive[1] = data1[0].number_of_plus_2_214L_B;
            tolerance_positive[2] = data1[0].number_of_plus_3_214L_B;
            tolerance_positive[3] = data1[0].number_of_plus_4_214L_B;
            tolerance_positive[4] = data1[0].number_of_plus_5_214L_B;
            tolerance_positive[5] = data1[0].number_of_plus_6_214L_B;
            tolerance_positive[6] = data1[0].number_of_plus_7_214L_B;
            tolerance_positive[7] = data1[0].number_of_plus_8_214L_B;
            tolerance_positive[8] = data1[0].number_of_plus_9_214L_B;
            tolerance_positive[9] = data1[0].number_of_plus_10_214L_B;
            tolerance_positive[10] = data1[0].number_of_plus_over_214L_B;
        }
    }
    if (number_line === '215')
    {
        if (type_ring === 'A')
        {
            ring_size_target = data1[0].value_target_215L_A;
            number_of_center_value = data1[0].number_of_target_215L_A;

            for (let i = 0; i < 11; i++)
            {
                if (i === 10)
                {
                    tolerance_negative_label[i] = "<" + (ring_size_target - 11.5).toFixed(1);
                    tolerance_positive_label[i] = ">" + (ring_size_target + 11.5).toFixed(1);
                }
                else
                {
                    tolerance_negative_label[i] = ((ring_size_target - (0.6 + (i * 1.1))) - 1).toFixed(1) + " - " + (ring_size_target - (0.6 + (i * 1.1))).toFixed(1);
                    tolerance_positive_label[i] = ((ring_size_target + (0.5 + ((i + 1) * 1.1))) - 1).toFixed(1) + " - " + (ring_size_target + (0.5 + ((i + 1) * 1.1))).toFixed(1);
                }
            }

            tolerance_negative[10] = data1[0].number_of_minus_over_215L_A;
            tolerance_negative[9] = data1[0].number_of_minus_10_215L_A;
            tolerance_negative[8] = data1[0].number_of_minus_9_215L_A;
            tolerance_negative[7] = data1[0].number_of_minus_8_215L_A;
            tolerance_negative[6] = data1[0].number_of_minus_7_215L_A;
            tolerance_negative[5] = data1[0].number_of_minus_6_215L_A;
            tolerance_negative[4] = data1[0].number_of_minus_5_215L_A;
            tolerance_negative[3] = data1[0].number_of_minus_4_215L_A;
            tolerance_negative[2] = data1[0].number_of_minus_3_215L_A;
            tolerance_negative[1] = data1[0].number_of_minus_2_215L_A;
            tolerance_negative[0] = data1[0].number_of_minus_1_215L_A;
            tolerance_positive[0] = data1[0].number_of_plus_1_215L_A;
            tolerance_positive[1] = data1[0].number_of_plus_2_215L_A;
            tolerance_positive[2] = data1[0].number_of_plus_3_215L_A;
            tolerance_positive[3] = data1[0].number_of_plus_4_215L_A;
            tolerance_positive[4] = data1[0].number_of_plus_5_215L_A;
            tolerance_positive[5] = data1[0].number_of_plus_6_215L_A;
            tolerance_positive[6] = data1[0].number_of_plus_7_215L_A;
            tolerance_positive[7] = data1[0].number_of_plus_8_215L_A;
            tolerance_positive[8] = data1[0].number_of_plus_9_215L_A;
            tolerance_positive[9] = data1[0].number_of_plus_10_215L_A;
            tolerance_positive[10] = data1[0].number_of_plus_over_215L_A;
        }
        else if (type_ring === 'B')
        {
            ring_size_target = data1[0].value_target_215L_B;
            number_of_center_value = data1[0].number_of_target_215L_B;

            for (let i = 0; i < 11; i++)
            {
                if (i === 10)
                {
                    tolerance_negative_label[i] = "<" + (ring_size_target - 11.5).toFixed(1);
                    tolerance_positive_label[i] = ">" + (ring_size_target + 11.5).toFixed(1);
                }
                else
                {
                    tolerance_negative_label[i] = ((ring_size_target - (0.6 + (i * 1.1))) - 1).toFixed(1) + " - " + (ring_size_target - (0.6 + (i * 1.1))).toFixed(1);
                    tolerance_positive_label[i] = ((ring_size_target + (0.5 + ((i + 1) * 1.1))) - 1).toFixed(1) + " - " + (ring_size_target + (0.5 + ((i + 1) * 1.1))).toFixed(1);
                }
            }

            tolerance_negative[10] = data1[0].number_of_minus_over_215L_B;
            tolerance_negative[9] = data1[0].number_of_minus_10_215L_B;
            tolerance_negative[8] = data1[0].number_of_minus_9_215L_B;
            tolerance_negative[7] = data1[0].number_of_minus_8_215L_B;
            tolerance_negative[6] = data1[0].number_of_minus_7_215L_B;
            tolerance_negative[5] = data1[0].number_of_minus_6_215L_B;
            tolerance_negative[4] = data1[0].number_of_minus_5_215L_B;
            tolerance_negative[3] = data1[0].number_of_minus_4_215L_B;
            tolerance_negative[2] = data1[0].number_of_minus_3_215L_B;
            tolerance_negative[1] = data1[0].number_of_minus_2_215L_B;
            tolerance_negative[0] = data1[0].number_of_minus_1_215L_B;
            tolerance_positive[0] = data1[0].number_of_plus_1_215L_B;
            tolerance_positive[1] = data1[0].number_of_plus_2_215L_B;
            tolerance_positive[2] = data1[0].number_of_plus_3_215L_B;
            tolerance_positive[3] = data1[0].number_of_plus_4_215L_B;
            tolerance_positive[4] = data1[0].number_of_plus_5_215L_B;
            tolerance_positive[5] = data1[0].number_of_plus_6_215L_B;
            tolerance_positive[6] = data1[0].number_of_plus_7_215L_B;
            tolerance_positive[7] = data1[0].number_of_plus_8_215L_B;
            tolerance_positive[8] = data1[0].number_of_plus_9_215L_B;
            tolerance_positive[9] = data1[0].number_of_plus_10_215L_B;
            tolerance_positive[10] = data1[0].number_of_plus_over_215L_B;
        }
    }
    if (number_line === '216')
    {
        if (type_ring === 'A')
        {
            ring_size_target = data1[0].value_target_216L_A;
            number_of_center_value = data1[0].number_of_target_216L_A;

            for (let i = 0; i < 11; i++)
            {
                if (i === 10)
                {
                    tolerance_negative_label[i] = "<" + (ring_size_target - 11.5).toFixed(1);
                    tolerance_positive_label[i] = ">" + (ring_size_target + 11.5).toFixed(1);
                }
                else
                {
                    tolerance_negative_label[i] = ((ring_size_target - (0.6 + (i * 1.1))) - 1).toFixed(1) + " - " + (ring_size_target - (0.6 + (i * 1.1))).toFixed(1);
                    tolerance_positive_label[i] = ((ring_size_target + (0.5 + ((i + 1) * 1.1))) - 1).toFixed(1) + " - " + (ring_size_target + (0.5 + ((i + 1) * 1.1))).toFixed(1);
                }
            }

            tolerance_negative[10] = data1[0].number_of_minus_over_216L_A;
            tolerance_negative[9] = data1[0].number_of_minus_10_216L_A;
            tolerance_negative[8] = data1[0].number_of_minus_9_216L_A;
            tolerance_negative[7] = data1[0].number_of_minus_8_216L_A;
            tolerance_negative[6] = data1[0].number_of_minus_7_216L_A;
            tolerance_negative[5] = data1[0].number_of_minus_6_216L_A;
            tolerance_negative[4] = data1[0].number_of_minus_5_216L_A;
            tolerance_negative[3] = data1[0].number_of_minus_4_216L_A;
            tolerance_negative[2] = data1[0].number_of_minus_3_216L_A;
            tolerance_negative[1] = data1[0].number_of_minus_2_216L_A;
            tolerance_negative[0] = data1[0].number_of_minus_1_216L_A;
            tolerance_positive[0] = data1[0].number_of_plus_1_216L_A;
            tolerance_positive[1] = data1[0].number_of_plus_2_216L_A;
            tolerance_positive[2] = data1[0].number_of_plus_3_216L_A;
            tolerance_positive[3] = data1[0].number_of_plus_4_216L_A;
            tolerance_positive[4] = data1[0].number_of_plus_5_216L_A;
            tolerance_positive[5] = data1[0].number_of_plus_6_216L_A;
            tolerance_positive[6] = data1[0].number_of_plus_7_216L_A;
            tolerance_positive[7] = data1[0].number_of_plus_8_216L_A;
            tolerance_positive[8] = data1[0].number_of_plus_9_216L_A;
            tolerance_positive[9] = data1[0].number_of_plus_10_216L_A;
            tolerance_positive[10] = data1[0].number_of_plus_over_216L_A;
        }
        else if (type_ring === 'B')
        {
            ring_size_target = data1[0].value_target_216L_B;
            number_of_center_value = data1[0].number_of_target_216L_B;

            for (let i = 0; i < 11; i++)
            {
                if (i === 10)
                {
                    tolerance_negative_label[i] = "<" + (ring_size_target - 11.5).toFixed(1);
                    tolerance_positive_label[i] = ">" + (ring_size_target + 11.5).toFixed(1);
                }
                else
                {
                    tolerance_negative_label[i] = ((ring_size_target - (0.6 + (i * 1.1))) - 1).toFixed(1) + " - " + (ring_size_target - (0.6 + (i * 1.1))).toFixed(1);
                    tolerance_positive_label[i] = ((ring_size_target + (0.5 + ((i + 1) * 1.1))) - 1).toFixed(1) + " - " + (ring_size_target + (0.5 + ((i + 1) * 1.1))).toFixed(1);
                }
            }

            tolerance_negative[10] = data1[0].number_of_minus_over_216L_B;
            tolerance_negative[9] = data1[0].number_of_minus_10_216L_B;
            tolerance_negative[8] = data1[0].number_of_minus_9_216L_B;
            tolerance_negative[7] = data1[0].number_of_minus_8_216L_B;
            tolerance_negative[6] = data1[0].number_of_minus_7_216L_B;
            tolerance_negative[5] = data1[0].number_of_minus_6_216L_B;
            tolerance_negative[4] = data1[0].number_of_minus_5_216L_B;
            tolerance_negative[3] = data1[0].number_of_minus_4_216L_B;
            tolerance_negative[2] = data1[0].number_of_minus_3_216L_B;
            tolerance_negative[1] = data1[0].number_of_minus_2_216L_B;
            tolerance_negative[0] = data1[0].number_of_minus_1_216L_B;
            tolerance_positive[0] = data1[0].number_of_plus_1_216L_B;
            tolerance_positive[1] = data1[0].number_of_plus_2_216L_B;
            tolerance_positive[2] = data1[0].number_of_plus_3_216L_B;
            tolerance_positive[3] = data1[0].number_of_plus_4_216L_B;
            tolerance_positive[4] = data1[0].number_of_plus_5_216L_B;
            tolerance_positive[5] = data1[0].number_of_plus_6_216L_B;
            tolerance_positive[6] = data1[0].number_of_plus_7_216L_B;
            tolerance_positive[7] = data1[0].number_of_plus_8_216L_B;
            tolerance_positive[8] = data1[0].number_of_plus_9_216L_B;
            tolerance_positive[9] = data1[0].number_of_plus_10_216L_B;
            tolerance_positive[10] = data1[0].number_of_plus_over_216L_B;
        }
    }
    if (number_line === '217')
    {
        if (type_ring === 'A')
        {
            ring_size_target = data1[0].value_target_217L_A;
            number_of_center_value = data1[0].number_of_target_217L_A;

            for (let i = 0; i < 11; i++)
            {
                if (i === 10)
                {
                    tolerance_negative_label[i] = "<" + (ring_size_target - 11.5).toFixed(1);
                    tolerance_positive_label[i] = ">" + (ring_size_target + 11.5).toFixed(1);
                }
                else
                {
                    tolerance_negative_label[i] = ((ring_size_target - (0.6 + (i * 1.1))) - 1).toFixed(1) + " - " + (ring_size_target - (0.6 + (i * 1.1))).toFixed(1);
                    tolerance_positive_label[i] = ((ring_size_target + (0.5 + ((i + 1) * 1.1))) - 1).toFixed(1) + " - " + (ring_size_target + (0.5 + ((i + 1) * 1.1))).toFixed(1);
                }
            }

            tolerance_negative[10] = data1[0].number_of_minus_over_217L_A;
            tolerance_negative[9] = data1[0].number_of_minus_10_217L_A;
            tolerance_negative[8] = data1[0].number_of_minus_9_217L_A;
            tolerance_negative[7] = data1[0].number_of_minus_8_217L_A;
            tolerance_negative[6] = data1[0].number_of_minus_7_217L_A;
            tolerance_negative[5] = data1[0].number_of_minus_6_217L_A;
            tolerance_negative[4] = data1[0].number_of_minus_5_217L_A;
            tolerance_negative[3] = data1[0].number_of_minus_4_217L_A;
            tolerance_negative[2] = data1[0].number_of_minus_3_217L_A;
            tolerance_negative[1] = data1[0].number_of_minus_2_217L_A;
            tolerance_negative[0] = data1[0].number_of_minus_1_217L_A;
            tolerance_positive[0] = data1[0].number_of_plus_1_217L_A;
            tolerance_positive[1] = data1[0].number_of_plus_2_217L_A;
            tolerance_positive[2] = data1[0].number_of_plus_3_217L_A;
            tolerance_positive[3] = data1[0].number_of_plus_4_217L_A;
            tolerance_positive[4] = data1[0].number_of_plus_5_217L_A;
            tolerance_positive[5] = data1[0].number_of_plus_6_217L_A;
            tolerance_positive[6] = data1[0].number_of_plus_7_217L_A;
            tolerance_positive[7] = data1[0].number_of_plus_8_217L_A;
            tolerance_positive[8] = data1[0].number_of_plus_9_217L_A;
            tolerance_positive[9] = data1[0].number_of_plus_10_217L_A;
            tolerance_positive[10] = data1[0].number_of_plus_over_217L_A;
        }
        else if (type_ring === 'B')
        {
            ring_size_target = data1[0].value_target_217L_B;
            number_of_center_value = data1[0].number_of_target_217L_B;

            for (let i = 0; i < 11; i++)
            {
                if (i === 10)
                {
                    tolerance_negative_label[i] = "<" + (ring_size_target - 11.5).toFixed(1);
                    tolerance_positive_label[i] = ">" + (ring_size_target + 11.5).toFixed(1);
                }
                else
                {
                    tolerance_negative_label[i] = ((ring_size_target - (0.6 + (i * 1.1))) - 1).toFixed(1) + " - " + (ring_size_target - (0.6 + (i * 1.1))).toFixed(1);
                    tolerance_positive_label[i] = ((ring_size_target + (0.5 + ((i + 1) * 1.1))) - 1).toFixed(1) + " - " + (ring_size_target + (0.5 + ((i + 1) * 1.1))).toFixed(1);
                }
            }

            tolerance_negative[10] = data1[0].number_of_minus_over_217L_B;
            tolerance_negative[9] = data1[0].number_of_minus_10_217L_B;
            tolerance_negative[8] = data1[0].number_of_minus_9_217L_B;
            tolerance_negative[7] = data1[0].number_of_minus_8_217L_B;
            tolerance_negative[6] = data1[0].number_of_minus_7_217L_B;
            tolerance_negative[5] = data1[0].number_of_minus_6_217L_B;
            tolerance_negative[4] = data1[0].number_of_minus_5_217L_B;
            tolerance_negative[3] = data1[0].number_of_minus_4_217L_B;
            tolerance_negative[2] = data1[0].number_of_minus_3_217L_B;
            tolerance_negative[1] = data1[0].number_of_minus_2_217L_B;
            tolerance_negative[0] = data1[0].number_of_minus_1_217L_B;
            tolerance_positive[0] = data1[0].number_of_plus_1_217L_B;
            tolerance_positive[1] = data1[0].number_of_plus_2_217L_B;
            tolerance_positive[2] = data1[0].number_of_plus_3_217L_B;
            tolerance_positive[3] = data1[0].number_of_plus_4_217L_B;
            tolerance_positive[4] = data1[0].number_of_plus_5_217L_B;
            tolerance_positive[5] = data1[0].number_of_plus_6_217L_B;
            tolerance_positive[6] = data1[0].number_of_plus_7_217L_B;
            tolerance_positive[7] = data1[0].number_of_plus_8_217L_B;
            tolerance_positive[8] = data1[0].number_of_plus_9_217L_B;
            tolerance_positive[9] = data1[0].number_of_plus_10_217L_B;
            tolerance_positive[10] = data1[0].number_of_plus_over_217L_B;
        }
    }
    if (number_line === '218')
    {
        if (type_ring === 'A')
        {
            ring_size_target = data1[0].value_target_218L_A;
            number_of_center_value = data1[0].number_of_target_218L_A;

            for (let i = 0; i < 11; i++)
            {
                if (i === 10)
                {
                    tolerance_negative_label[i] = "<" + (ring_size_target - 11.5).toFixed(1);
                    tolerance_positive_label[i] = ">" + (ring_size_target + 11.5).toFixed(1);
                }
                else
                {
                    tolerance_negative_label[i] = ((ring_size_target - (0.6 + (i * 1.1))) - 1).toFixed(1) + " - " + (ring_size_target - (0.6 + (i * 1.1))).toFixed(1);
                    tolerance_positive_label[i] = ((ring_size_target + (0.5 + ((i + 1) * 1.1))) - 1).toFixed(1) + " - " + (ring_size_target + (0.5 + ((i + 1) * 1.1))).toFixed(1);
                }
            }

            tolerance_negative[10] = data1[0].number_of_minus_over_218L_A;
            tolerance_negative[9] = data1[0].number_of_minus_10_218L_A;
            tolerance_negative[8] = data1[0].number_of_minus_9_218L_A;
            tolerance_negative[7] = data1[0].number_of_minus_8_218L_A;
            tolerance_negative[6] = data1[0].number_of_minus_7_218L_A;
            tolerance_negative[5] = data1[0].number_of_minus_6_218L_A;
            tolerance_negative[4] = data1[0].number_of_minus_5_218L_A;
            tolerance_negative[3] = data1[0].number_of_minus_4_218L_A;
            tolerance_negative[2] = data1[0].number_of_minus_3_218L_A;
            tolerance_negative[1] = data1[0].number_of_minus_2_218L_A;
            tolerance_negative[0] = data1[0].number_of_minus_1_218L_A;
            tolerance_positive[0] = data1[0].number_of_plus_1_218L_A;
            tolerance_positive[1] = data1[0].number_of_plus_2_218L_A;
            tolerance_positive[2] = data1[0].number_of_plus_3_218L_A;
            tolerance_positive[3] = data1[0].number_of_plus_4_218L_A;
            tolerance_positive[4] = data1[0].number_of_plus_5_218L_A;
            tolerance_positive[5] = data1[0].number_of_plus_6_218L_A;
            tolerance_positive[6] = data1[0].number_of_plus_7_218L_A;
            tolerance_positive[7] = data1[0].number_of_plus_8_218L_A;
            tolerance_positive[8] = data1[0].number_of_plus_9_218L_A;
            tolerance_positive[9] = data1[0].number_of_plus_10_218L_A;
            tolerance_positive[10] = data1[0].number_of_plus_over_218L_A;
        }
        else if (type_ring === 'B')
        {
            ring_size_target = data1[0].value_target_218L_B;
            number_of_center_value = data1[0].number_of_target_218L_B;

            for (let i = 0; i < 11; i++)
            {
                if (i === 10)
                {
                    tolerance_negative_label[i] = "<" + (ring_size_target - 11.5).toFixed(1);
                    tolerance_positive_label[i] = ">" + (ring_size_target + 11.5).toFixed(1);
                }
                else
                {
                    tolerance_negative_label[i] = ((ring_size_target - (0.6 + (i * 1.1))) - 1).toFixed(1) + " - " + (ring_size_target - (0.6 + (i * 1.1))).toFixed(1);
                    tolerance_positive_label[i] = ((ring_size_target + (0.5 + ((i + 1) * 1.1))) - 1).toFixed(1) + " - " + (ring_size_target + (0.5 + ((i + 1) * 1.1))).toFixed(1);
                }
            }

            tolerance_negative[10] = data1[0].number_of_minus_over_218L_B;
            tolerance_negative[9] = data1[0].number_of_minus_10_218L_B;
            tolerance_negative[8] = data1[0].number_of_minus_9_218L_B;
            tolerance_negative[7] = data1[0].number_of_minus_8_218L_B;
            tolerance_negative[6] = data1[0].number_of_minus_7_218L_B;
            tolerance_negative[5] = data1[0].number_of_minus_6_218L_B;
            tolerance_negative[4] = data1[0].number_of_minus_5_218L_B;
            tolerance_negative[3] = data1[0].number_of_minus_4_218L_B;
            tolerance_negative[2] = data1[0].number_of_minus_3_218L_B;
            tolerance_negative[1] = data1[0].number_of_minus_2_218L_B;
            tolerance_negative[0] = data1[0].number_of_minus_1_218L_B;
            tolerance_positive[0] = data1[0].number_of_plus_1_218L_B;
            tolerance_positive[1] = data1[0].number_of_plus_2_218L_B;
            tolerance_positive[2] = data1[0].number_of_plus_3_218L_B;
            tolerance_positive[3] = data1[0].number_of_plus_4_218L_B;
            tolerance_positive[4] = data1[0].number_of_plus_5_218L_B;
            tolerance_positive[5] = data1[0].number_of_plus_6_218L_B;
            tolerance_positive[6] = data1[0].number_of_plus_7_218L_B;
            tolerance_positive[7] = data1[0].number_of_plus_8_218L_B;
            tolerance_positive[8] = data1[0].number_of_plus_9_218L_B;
            tolerance_positive[9] = data1[0].number_of_plus_10_218L_B;
            tolerance_positive[10] = data1[0].number_of_plus_over_218L_B;
        }
    }

    return [tolerance_negative_label, tolerance_negative, number_of_center_value, ring_size_target, tolerance_positive, tolerance_positive_label];
}

export { datastructure_mapping, mapping_json_data };