function getTooltipOptions() {
    return {
        fontSize: '10pt',
        fontFamily: 'Montserrat',
        background: '#ffffff',
        color: '#000000',
        borderRadius: '100px',
        tooltipsEffect: 'slide',
        tooltipsFormattedKeyColorsShape: 'circle',
        tooltipsEvent: 'click'
    };
}

document.fonts.ready.then(function () {

    //1 - Graphique Rose
    data_rose = [9.2, 9.4, 8.4, 8.5, 8.5, 8.3];
    labels_rose = ['Amérique du Nord', 'Afrique', 'Union Européenne', 'Europe de l\'Est', 'Asie-Pacifique', 'Amérique Latine'];
    labels_roseSigles = ['AMN', 'AFR', 'EU', 'EUR', 'APAC', 'LAM'];

    function drawRose() {
        rose = new RGraph.Rose({
            id: 'graphic_1',
            data: data_rose,
            options: {
                tooltips: function (i) {
                    return '<b>Résultat:</b><br />' + labels_rose[i] + ' : ' + data_rose[i] + '%';
                },
                tooltipsCss: getTooltipOptions(),
                colors: ['#ed8699', '#f9ac2c', '#edc8b7'],
                labels: labels_roseSigles,
                textSize: 10,
                labelsPosition: 'edge',
                textFont: 'Montserrat',
                textAlign: 'center',
                responsive: [
                    { maxWidth: null, width: 500, height: 300, options: { textSize: 12 } },
                    { maxWidth: 768, width: 350, height: 340, options: { tooltips: false } }
                ]
            }
        }).draw().roundRobin({ frames: 60 });
    }
    drawRose();

    //2 - Graphique SVG barres verticales
    data_svgBar = [32, 40, 56, 62, 78, 80];
    labels_svgBar = ['1970', '1980', '1990', '2000', '2010', '2020'];

    function drawSvgBar() {
        new RGraph.SVG.Bar({
            id: 'graphic_2',
            data: data_svgBar,
            options: {
                yaxisPosition: 'center',
                colors: ['#8dbfc0'],
                xaxisLabels: labels_svgBar,
                textSize: 10,
                textFont: 'Montserrat',
                responsive: [
                    { maxWidth: null, width: 450, height: 300, options: { textSize: 12 }, parentCss: { 'float': 'right', textAlign: 'center' } },
                    { maxWidth: 768, width: 350, height: 200, options: { labelsAbove: true, labelsAboveUnitsPost: '%', parentCss: { 'float': 'none', textAlign: 'center' } } },
                ]
            }
        }).wave();
    }
    drawSvgBar();

    //3 - Graphic Semi-circulaire
    function drawSemiCircular() {
        const globalGenderGapScore = 68.4;

        new RGraph.SemiCircularProgress({
            id: 'graphic_3',
            min: 0,
            max: 100,
            value: globalGenderGapScore,
            options: {
                colors: ['#f9ac2c', '#f9ac2c'],
                tooltips: ['Global Gender Gap Score 2023: ' + globalGenderGapScore + '%'],
                tooltipsCss: getTooltipOptions(),
                labelsCenterSize: 20,
                labelsCenterUnitsPost: '%',
                labelsMaxUnitsPost: '%',
                labelsMinUnitsPost: '%',
                labelsCenterDecimals: 1,
                shadow: false,
                textFont: 'Montserrat',
                responsive: [
                    { maxWidth: null, width: 500, height: 300, options: { textSize: 12 } },
                    { maxWidth: 640, width: 350, height: 280, options: { tooltips: false, labelsCenterSize: 15 } }
                ]
            }
        }).grow().roundRobin({ frames: 60 });
    }

    drawSemiCircular();
});



