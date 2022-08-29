export default async function chart_creation(line_name, data_for_graph, canvas_id, target_value_threshold, maximum_distribution_thresold, chart_input)
{
    const data =
    {
        datasets:
            [{
                type: 'line',
                label: line_name,
                data: data_for_graph,
                backgroundColor: "rgba(15, 38, 191, 1)",
                borderColor: "rgba(15, 38, 191, 1)",
                tension: 0.2,
                parsing:
                {
                    yAxisKey: "y_axis_value"
                }
            }]
    };

    //Chart.defaults.color = "#ffffff";

    const config =
    {
        data,
        options:
        {
            parsing:
            {
                xAxisKey: "label_x_axis"
            },
            scales:
            {
                x:
                {
                    title:
                    {
                        display: true,
                        text: "Ring Size",
                        font:
                        {
                            size: 12,
                            weight: 'bold'
                        },
                        color: "#058a20"
                    },
                },
                y:
                {
                    beginAtZero: true,
                    title:
                    {
                        display: true,
                        text: "Frequency",
                        font:
                        {
                            size: 12,
                            weight: 'bold'
                        },
                        color: "#058a20"
                    }
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            plugins:
            {
                legend:
                {
                    labels:
                    {
                        color: "#bf0f72",
                        font:
                        {
                            size: 12,
                            weight: 'bold'
                        }
                    }
                },
                autocolors: false,
                annotation:
                {
                    annotations:
                    {
                        line1:
                        {
                            type: 'line',
                            xMin: target_value_threshold,
                            xMax: target_value_threshold,
                            borderColor: 'rgb(255, 0, 0)',
                            borderWidth: 5
                        },
                        line2:
                        {
                            type: 'line',
                            xMin: maximum_distribution_thresold,
                            xMax: maximum_distribution_thresold,
                            borderColor: 'rgb(6, 153, 31)',
                            borderWidth: 5
                        }
                    }
                }
            }
        }
    };

    if (chart_input === '')
    {
        const myChart = await new Chart(document.querySelector(canvas_id), config);
        return myChart;
    }
    else if (chart_input === undefined)
    {
        chart_input = await new Chart(document.querySelector(canvas_id), config);
        return chart_input;
    }
    else
    {
        chart_input.destroy();
        chart_input = await new Chart(document.querySelector(canvas_id), config);
        return chart_input;
    }
}