$(function() {
    $('#chart').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: '1 year span (6/2015-6/2016) of violent crime categories'
        },
        subtitle: {
            text: 'Source: <a href="http://crimearound.us/#obs_date__ge=2004%2F06%2F01&obs_date__le=2016%2F06%2F01&date__time_of_day_ge=0&date__time_of_day_le=23&primary_type__in=ASSAULT%2CBATTERY%2CCRIM+SEXUAL+ASSAULT%2CHOMICIDE%2CROBBERY">Crimearound.us</a>'
        },
        xAxis: {
            categories: ['Top 10 Location Descriptions'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Cases Reported',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' cases'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            // layout: 'vertical',
            // align: 'left',
            // verticalAlign: 'top',
            // x: -40,
            // y: 220,
            // floating: true,
            // borderWidth: 1,
            // backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            // shadow: true
        },
        credits: {
            enabled: false
        },
        series:
[{"data":[166],"name":"APARTMENT"},{"data":[117],"name":"RESIDENCE"},{"data":[44],"name":"SIDEWALK"},{"data":[34],"name":"STREET"},{"data":[11],"name":"RESIDENCE PORCH/HALLWAY"},{"data":[9],"name":"RESIDENTIAL YARD (FRONT/BACK)"},{"data":[9],"name":"VEHICLE NON-COMMERCIAL"},{"data":[5],"name":"ALLEY"},{"data":[4],"name":"PARKING LOT/GARAGE(NON.RESID.)"},{"data":[2],"name":"CTA BUS STOP"}]
    });
});
