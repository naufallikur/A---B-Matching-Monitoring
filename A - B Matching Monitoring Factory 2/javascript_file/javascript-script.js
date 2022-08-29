import { realtime_monitoring_first, realtime_monitoring_update } from './modules/graphdisplay_realtime.js';
import { customdate_monitoring } from './modules/graphdisplay_customdate.js';

$(document).ready(async function ()
{
    //prepare empty array for canvas chart in real time monitoring
    let chart_displays = []

    //execute realtime_monitoring function when the loading process of the page has finished
    await realtime_monitoring_first(chart_displays);

    //event when real time monitoring is choosen
    $("#nav-realtime_monitoring-tab").click(async function ()
    {
        await realtime_monitoring_update(chart_displays);
    });

    //event when real time monitoring is choosen
    $("#nav-customdate_monitoring-tab").click(async function ()
    {
        await customdate_monitoring();
    });
});