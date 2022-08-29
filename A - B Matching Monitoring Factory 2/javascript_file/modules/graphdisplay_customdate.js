import { datastructure_preparing } from './datastructure_preparing.js';
import chart_creation from './chart_creation.js';

function changeDateformat(html_element)
{
    let date_awal = document.querySelector(html_element);
    let temporary_data = date_awal.value.toString().split('-');
    let date_akhir = temporary_data[2] + "-" + temporary_data[1] + "-" + temporary_data[0];

    return date_akhir;
}

async function dropdown_ringsize_target(html_element, startdate, enddate, linenumber, ringtype)
{
    await fetch('http://ajsvr1901-001:8085/api/traceability/ring_size_target?startdate=' + startdate + '&enddate=' + enddate + '&line_number=' + linenumber + '&ring_type=' + ringtype)
        .then(response1 => response1.json())
        .then(data1 =>
        {
            let value_ring_target = [];
            data1.map(value_target =>
            {
                for (let index_value in value_target)
                {
                    value_ring_target.push(value_target[index_value]);
                }
            });

            value_ring_target.map(the_value =>
            {
                html_element.insertAdjacentHTML("beforeend", `<li><a class="dropdown-item" href="#"> ${the_value} </a></li>`);
            });
        });
}

var chart_created;
//function to execute display graph for custom date monitoring
async function execute_to_display_graph(startdate, enddate, linenumber, ringtype, ring_size_target)
{
    let datastructure = [];
    let value_of_target;
    let index_max_freq;

    [datastructure, value_of_target, index_max_freq] = await datastructure_preparing(linenumber, ringtype, 'custom date', startdate, enddate, ring_size_target);

    chart_created = await chart_creation(`${linenumber}L - ${ringtype}`, datastructure, '#graph_customdate', (value_of_target - 0.5).toString() + " - " + (value_of_target + 0.5).toString(), index_max_freq, chart_created);
}

async function customdate_monitoring()
{
    //display the content of container
    let container_customdate_monitoring = document.querySelector('#container_for_customdate_monitoring');
    container_customdate_monitoring.innerHTML = `<div class="h4 text-center mt-4 judul-temp-hum">Choose the Date!</div>

                    <!-- Container for date picker -->
                    <div class="container row gx-3 mt-2 mb-3 justify-content-center" id="baris_datepicker1">
                        <div class="col-3 align-items-center" id="kol1_datepicker1">
                            <label class="h6" for="datestart">Start Date</label>
                            <div class="input-group input-group-sm" id="datepicker1">
                            <input type="text" class="form-control border-end-0 bg-white" id="datestart1" placeholder="Start Date">
                            <span class="input-group-text bg-white">
                                <img src="image/calendar-icon.svg" alt="calendar icon">
                            </span>
                            </div>
                        </div>
                        <div class="col-3 align-items-center" id="kol2_datepicker1">
                            <label class="h6" for="dateend">End Date</label>
                            <div class="input-group input-group-sm">
                            <input type="text" class="form-control border-end-0 bg-white" id="dateend1" placeholder="End Date">
                            <span class="input-group-text bg-white">
                                <img src="image/calendar-icon.svg" alt="calendar icon">
                            </span>
                            </div>
                        </div>
                        <div class="col-1 align-self-end" id="kol3_datepicker1">
                                <button type="button" class="btn btn-primary btn-success" id="button_customdate_download"> Search </button>
                        </div>
                    </div>
                    <!-- end of container for date picker -->

                    <!-- Container for line selection -->
                    <div class="container row gx-3 mt-1 mb-3 justify-content-center" id="container_machine_line">
                    </div>
                    <!-- end of container for line selection -->

                    <!-- Container for ring type selection -->
                    <div class="container row gx-3 mt-1 mb-3 justify-content-center" id="container_ringtype">
                    </div>
                    <!-- end of container ring type selection -->

                    <!-- Container for ring size target selection -->
                    <div class="container row gx-3 mt-1 mb-3 justify-content-center" id="container_ringsize_target">
                    </div>
                    <!-- end of container ring type selection -->

                    <!-- Container for graph displaying -->
                    <div class="container-fluid row mt-1 mb-3 justify-content-center" id="container_graph_customdate">
                        <canvas id="graph_customdate" style="height: 35vh; width: 35vw">
                    </div>
                    <!-- end of container for graph displaying -->`;

    //display datepicker
    $("#datestart1, #dateend1").flatpickr
        (
            {
                dateFormat: "d-m-Y"
            }
        );

    //event when "search" button (on 'choose the date section') on click
    $("#button_customdate_download").on('click', async function ()
    {
        let start_date = document.querySelector('#datestart1').value;
        let end_date = document.querySelector('#dateend1').value;

        //prepare the date to send to API
        let datestart = changeDateformat('#datestart1');
        let dateend = changeDateformat('#dateend1');
        let ring_type;
        let line_number;
        let ring_size_target_before;
        let ring_size_target;

        //get the container line selection
        let line_selection_container = document.querySelector('#container_machine_line');

        //get the container ring type selection
        let ring_type_selection_container = document.querySelector('#container_ringtype');

        //get the container ring size target selection
        let ring_size_target_selection_container = document.querySelector('#container_ringsize_target');

        if (start_date === "" && end_date === "")
        {
            alert("Choose the Date!");
        }
        else if (start_date === "")
        {
            alert("Choose the Start Date!");
        }
        else if (end_date === "")
        {
            alert("Choose the End Date!");
        }
        else
        {
            //display the line selection
            line_selection_container.innerHTML = `<div class="h4 text-center mt-1 judul-temp-hum">Choose the Line!</div>

                        <div class="dropdown text-center">
                            <a class="btn btn-secondary dropdown-toggle" id="btn_linenumber" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Line Number
                            </a>
                            <ul class="dropdown-menu" id="dropdown_linenumber">
                                <li><a class="dropdown-item" href="#">213L</a></li>
                                <li><a class="dropdown-item" href="#">214L</a></li>
                                <li><a class="dropdown-item" href="#">215L</a></li>
                                <li><a class="dropdown-item" href="#">216L</a></li>
                                <li><a class="dropdown-item" href="#">217L</a></li>
                                <li><a class="dropdown-item" href="#">218L</a></li>
                            </ul>
                        </div>`;
        }

        //display the selected value on dropdown line number selection
        $("#dropdown_linenumber li a").on('click', async function ()
        {
            $("#btn_linenumber").text($(this).text());
            $("#btn_linenumber").val($(this).text());

            let line_number_before = ($(this).text());

            if (line_number_before === '213L')
            {
                line_number = '213';
            }
            else if (line_number_before === '214L')
            {
                line_number = '214';
            }
            else if (line_number_before === '215L')
            {
                line_number = '215';
            }
            else if (line_number_before === '216L')
            {
                line_number = '216';
            }
            else if (line_number_before === '217L')
            {
                line_number = '217';
            }
            else if (line_number_before === '218L')
            {
                line_number = '218';
            }

            ring_type_selection_container.innerHTML = `<div class="h4 text-center mt-1 judul-temp-hum">Choose the Ring Type!</div>

                        <div class="dropdown text-center">
                            <button class="btn btn-secondary dropdown-toggle" id="btn_ringtype" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Ring Type
                            </button>
                                <ul class="dropdown-menu" id="dropdown_ringtype">
                                    <li><a class="dropdown-item" href="#">Ring A</a></li>
                                    <li><a class="dropdown-item" href="#">Ring B</a></li>
                                </ul>
                        </div>`;

            //display the selected value on dropdown ring type selection
            $("#dropdown_ringtype li a").on('click', async function ()
            {
                $("#btn_ringtype").text($(this).text());
                $("#btn_ringtype").val($(this).text());

                let ring_type_before = ($(this).text());

                if (ring_type_before === 'Ring A') {
                    ring_type = 'A';
                }
                else if (ring_type_before === 'Ring B') {
                    ring_type = 'B';
                }

                ring_size_target_selection_container.innerHTML = `<div class="h4 text-center mt-1 judul-temp-hum">Choose the Ring Size Target!</div>

                            <div class="dropdown text-center">
                                <button class="btn btn-secondary dropdown-toggle" id="btn_ringsize_target" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Ring Size Target
                                </button>
                                    <ul class="dropdown-menu" id="dropdown_ringsize_target">
                                    </ul>
                            </div>`;

                //get the html element with id "dropdown_ringsize_target"
                let dropdown_ringsize_target_element = document.querySelector('#dropdown_ringsize_target')

                //function to fill the dropdown list of ring size target
                await dropdown_ringsize_target(dropdown_ringsize_target_element, datestart, dateend, line_number, ring_type);

                //get the value of ring size target that is choosen
                $("#dropdown_ringsize_target li a").on('click', async function ()
                {
                    $("#btn_ringsize_target").text($(this).text());
                    $("#btn_ringsize_target").val($(this).text());

                    ring_size_target_before = ($(this).text());

                    ring_size_target = ring_size_target_before.replace(/\s+/g, '');

                    await execute_to_display_graph(datestart, dateend, line_number, ring_type, ring_size_target);
                });
            });
        });
    });
}

export { customdate_monitoring };