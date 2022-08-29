import { datastructure_preparing } from './datastructure_preparing.js';
import chart_creation from './chart_creation.js';

async function first_execution_graph_display(line_number, typeofring)
{
    let datastructure = [];
    let value_of_target;
    let index_max_freq;

    [datastructure, value_of_target, index_max_freq] = await datastructure_preparing(line_number, typeofring, 'realtime', '', '', '');

    let chart_created = await chart_creation(`${line_number}L - ${typeofring}`, datastructure, `#graph_${line_number}L_${typeofring}`, (value_of_target - 0.5).toString() + " - " + (value_of_target + 0.5).toString(), index_max_freq, '');

    return chart_created;
}

async function data_chart_update(line_number, typeofring, chart)
{
    let datastructure = [];
    let value_of_target;
    let index_max_freq;

    [datastructure, value_of_target, index_max_freq] = await datastructure_preparing(line_number, typeofring, 'realtime');

    //get the thresold for target size
    let target_ring_size = (value_of_target - 0.5).toString() + " - " + (value_of_target + 0.5).toString();

    chart.data.datasets.map((dataset) =>
    {
        dataset.data = datastructure;
    });

    chart.options.plugins.annotation.annotations.line1.xMin = target_ring_size;
    chart.options.plugins.annotation.annotations.line1.xMax = target_ring_size;
    chart.options.plugins.annotation.annotations.line2.xMin = index_max_freq;
    chart.options.plugins.annotation.annotations.line2.xMax = index_max_freq;

    chart.update();
}

async function realtime_monitoring_first(chart_displays_array)
{
    chart_displays_array[0] = await first_execution_graph_display('213', 'A');
    chart_displays_array[1] = await first_execution_graph_display('213', 'B');
    chart_displays_array[2] = await first_execution_graph_display('214', 'A');
    chart_displays_array[3] = await first_execution_graph_display('214', 'B');
    chart_displays_array[4] = await first_execution_graph_display('215', 'A');
    chart_displays_array[5] = await first_execution_graph_display('215', 'B');
    chart_displays_array[6] = await first_execution_graph_display('216', 'A');
    chart_displays_array[7] = await first_execution_graph_display('216', 'B');
    chart_displays_array[8] = await first_execution_graph_display('217', 'A');
    chart_displays_array[9] = await first_execution_graph_display('217', 'B');
    chart_displays_array[10] = await first_execution_graph_display('218', 'A');
    chart_displays_array[11] = await first_execution_graph_display('218', 'B');
    
    realtime_monitoring_update(chart_displays_array);
}

async function realtime_monitoring_update(chart_displays_array)
{
    setInterval(async function ()
    {
        await data_chart_update('213', 'A', chart_displays_array[0]);
        await data_chart_update('213', 'B', chart_displays_array[1]);
        await data_chart_update('214', 'A', chart_displays_array[2]);
        await data_chart_update('214', 'B', chart_displays_array[3]);
        await data_chart_update('215', 'A', chart_displays_array[4]);
        await data_chart_update('215', 'B', chart_displays_array[5]);
        await data_chart_update('216', 'A', chart_displays_array[6]);
        await data_chart_update('216', 'B', chart_displays_array[7]);
        await data_chart_update('217', 'A', chart_displays_array[8]);
        await data_chart_update('217', 'B', chart_displays_array[9]);
        await data_chart_update('218', 'A', chart_displays_array[10]);
        await data_chart_update('218', 'B', chart_displays_array[11]);
    }, 60000);
    
    setInterval(function ()
    {
        //get the current time
        let timeNow = new Date();
        let yearNow = timeNow.getFullYear();
        let monthNow = timeNow.getMonth() + 1;
        let dateNow = timeNow.getDate();
        let hoursNow = timeNow.getHours();
        let minuteNow = timeNow.getMinutes();
        let secondNow = timeNow.getSeconds();

        document.querySelector("#time_container").innerHTML = dateNow + "-" + monthNow + "-" + yearNow + "   " + hoursNow + ":" + minuteNow + ":" + secondNow;
    }, 1000);
}

export { realtime_monitoring_first, realtime_monitoring_update };