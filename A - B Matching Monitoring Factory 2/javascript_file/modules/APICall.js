import { mapping_json_data } from './datamapping.js';

//function to call REST API Server and get json response
async function APICall_GetData(number_line, type_ring, monitoring_mode, startdate, enddate, ring_size_target)
{
    let target_value;
    let tolerance_positive_value = [];
    let tolerance_negative_value = [];
    let tolerance_positive_value_label = [];
    let tolerance_negative_value_label = [];
    let center_value;
    let API_address;

    if (monitoring_mode === 'realtime')
    {
        API_address = 'http://ajsvr1901-001:8085/api/traceability/ab_ring_size_fact_2_realtime?line_number=' + number_line + '&ring_type=' + type_ring;
    }
    else if (monitoring_mode === 'custom date')
    {
        API_address = 'http://ajsvr1901-001:8085/api/traceability/ab_ring_size_fact_2?startdate=' + startdate + '&enddate=' + enddate + '&line_number=' + number_line + '&ring_type=' + type_ring + '&ring_size_target=' + ring_size_target;
    }

    await fetch(API_address)
        .then(response1 => response1.json())
        .then(data1 =>
        {
            [tolerance_negative_value_label, tolerance_negative_value, center_value, target_value, tolerance_positive_value, tolerance_positive_value_label] = mapping_json_data(data1, number_line, type_ring);
        });

    return [tolerance_negative_value_label, tolerance_negative_value, center_value, target_value, tolerance_positive_value, tolerance_positive_value_label];
}

export { APICall_GetData };