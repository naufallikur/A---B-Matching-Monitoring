<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="SizeDistributionGraph.aspx.cs" Inherits="A___B_Matching_Monitoring_Factory_2.SizeDistributionGraph" %>

<!doctype html>
<html lang="en">
  <head runat="server">
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="bootstrap_file/css/bootstrap.css" rel="stylesheet" />

    <!-- Custom CSS -->
    <link href="css_custom/style-1.css" rel="stylesheet"/>

    <!-- Flatpickr CSS for datepicker library -->
    <link href="css_custom/flatpickr.min.css" rel="stylesheet"/>

    <!-- Web Icon -->
    <link rel="shortcut icon" href="image/NSKK.png" type="image/png">

    <title>Matching Monitoring [AS-G2]</title>
  </head>
  <body>
    <form id="form2" runat="server">
            <!-- navigation bar -->
            <nav class="navbar fixed-top shadow bg-primary py-0">
                <div class="container-fluid navbar-brand">
                    <a class="navbar-brand" href="#">
                        <img src="image/NSK_Logo 2.png">
                        <span class="align-middle text-light judul-header">Matching Monitoring [AS-G2]</span>
                    </a>
                    <span class="navbar-text text-light h4" id="time_container"></span>
                </div>
            </nav>
            <!-- end of navigation bar -->

            <!-- tabs -->
            <nav class="navbar_select_mode">
              <div class="nav nav-pills justify-content-center pt-3" id="nav-tab" role="tablist">
                <button class="nav-link active" id="nav-realtime_monitoring-tab" data-bs-toggle="tab" data-bs-target="#nav-rtmonitoring" type="button" role="tab" aria-controls="nav-rtmonitoring" aria-selected="true">Real Time Monitoring</button>
                <button class="nav-link" id="nav-customdate_monitoring-tab" data-bs-toggle="tab" data-bs-target="#nav-cdmonitoring" type="button" role="tab" aria-controls="nav-cdmonitoring" aria-selected="false">Custom Date Monitoring</button>
              </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">

              <!-- Content of Real Time Monitoring -->
              <div class="tab-pane fade show active" id="nav-rtmonitoring" role="tabpanel" aria-labelledby="nav-realtime_monitoring-tab" tabindex="0">
                  <div class="container-fluid pt-3">
                      <!-- First Row of Graph -->
                      <div class="row justify-content-center">
                          <div class="col-3" id="chart_realtime_213L_A">
                              <canvas id="graph_213L_A" style="height: 35vh; width: 15vw"></canvas>
                          </div>
                          <div class="col-3">
                              <canvas id="graph_213L_B" style="height: 35vh; width: 15vw"></canvas>
                          </div>
                          <div class="col-3">
                              <canvas id="graph_214L_A" style="height: 35vh; width: 15vw"></canvas>
                          </div>
                          <div class="col-3">
                              <canvas id="graph_214L_B" style="height: 35vh; width: 15vw"></canvas>
                          </div>
                      </div>
                      <!-- end of first row of graph -->

                      <!-- Second Row of Graph -->
                      <div class="row justify-content-center pt-3">
                          <div class="col-3">
                              <canvas id="graph_215L_A" style="height: 35vh; width: 15vw"></canvas>
                          </div>
                          <div class="col-3">
                              <canvas id="graph_215L_B" style="height: 35vh; width: 15vw"></canvas>
                          </div>
                          <div class="col-3">
                              <canvas id="graph_216L_A" style="height: 35vh; width: 15vw"></canvas>
                          </div>
                          <div class="col-3">
                              <canvas id="graph_216L_B" style="height: 35vh; width: 15vw"></canvas>
                          </div>
                      </div>
                      <!-- end of second row of graph -->

                      <!-- Third Row of Graph -->
                      <div class="row justify-content-center pt-3">
                          <div class="col-3">
                              <canvas id="graph_217L_A" style="height: 35vh; width: 15vw"></canvas>
                          </div>
                          <div class="col-3">
                              <canvas id="graph_217L_B" style="height: 35vh; width: 15vw"></canvas>
                          </div>
                          <div class="col-3">
                              <canvas id="graph_218L_A" style="height: 35vh; width: 15vw"></canvas>
                          </div>
                          <div class="col-3">
                              <canvas id="graph_218L_B" style="height: 35vh; width: 15vw"></canvas>
                          </div>
                      </div>
                      <!-- end of third row of graph -->
                  </div>
              </div>
              <!-- End of content of Real Time Monitoring -->

              <!-- Content of Custom Date Monitoring -->
              <div class="tab-pane fade" id="nav-cdmonitoring" role="tabpanel" aria-labelledby="nav-customdate_monitoring-tab" tabindex="0">
                  
                  <!-- wrap content of date picker and ring size target selection -->
                  <section class="container" id="container_for_customdate_monitoring">

                  </section>

              </div>
              <!-- End of Content of Custom Date Monitoring -->
              
            </div>
            <!-- end of tabs -->

        <!-- Call Chart.js library-->
        <script src="javascript_file/Chart.js"></script>

        <!-- Call Chart.js annotation plugin library-->
        <script src="javascript_file/chartjs-plugin-annotation.js"></script>

        <!-- Call bootstrap bundle library for dropdown menu -->
        <script src="bootstrap_file/js/bootstrap.bundle.js"></script>

        <!-- Call jQuery library -->
        <script src="javascript_file/jQuery.js"></script>

        <!-- Call flatpickr library for datepicker -->
        <script src="javascript_file/flatpickr.js"></script>

        <!-- Call xlsx library -->
        <script src="javascript_file/xlsx.js"></script>

        <!-- Call xlsx bundle for xlsx styling library -->
        <script lang="javascript" src="javascript_file/xlsx.bundle.js"></script>

        <!-- Call javascript custom script -->
        <script type = "module" src="javascript_file/javascript-script.js"></script>
    </form>
  </body>
</html>