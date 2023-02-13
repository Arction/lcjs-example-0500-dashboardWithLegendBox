/*
 * LightningChartJS example that showcases a dashboard with LegendBox.
 */
// Import LightningChartJS
const lcjs = require('@arction/lcjs')

// Import xydata
const xydata = require('@arction/xydata')

// Extract required parts from LightningChartJS.
const { lightningChart, AxisScrollStrategies, PointShape, AxisTickStrategies, Themes } = lcjs

// Import data-generators from 'xydata'-library.
const { createProgressiveRandomGenerator } = xydata

// Create Dashboard and stand-alone LegendBox.
const db = lightningChart().Dashboard({
    // theme: Themes.darkGold
    numberOfRows: 2,
    numberOfColumns: 2,
})

// Create a legendBox docked to the Dashboard.
const legend = db.createLegendBoxPanel({
    columnIndex: 0,
    rowIndex: 1,
    columnSpan: 1,
    rowSpan: 1,
})

// Spline
{
    const dateOrigin = new Date()
    const dataFrequency = 1000
    const chart = db
        .createChartXY({
            columnIndex: 0,
            rowIndex: 0,
            columnSpan: 1,
            rowSpan: 1,
        })
        .setTitle('Live sales')
        .setPadding({ right: 30 })

    const series = chart
        .addSplineSeries({ pointShape: PointShape.Circle })
        .setName('Product')
        .setStrokeStyle((strokeStyle) => strokeStyle.setThickness(2))
        .setPointSize(5)
        .setCursorInterpolationEnabled(false)
        .setCursorResultTableFormatter((tableBuilder, series, x, y) =>
            tableBuilder
                .addRow(series.getName())
                .addRow('Time : ', series.axisX.formatValue(x))
                .addRow('Sold : ', y.toFixed(0) + ' pieces'),
        )

    chart
        .getDefaultAxisX()
        .setInterval({ start: -61 * 1000, end: 0, animate: 0, stopAxisAfter: false })
        .setScrollStrategy(AxisScrollStrategies.progressive)
        .setTickStrategy(AxisTickStrategies.DateTime, (tickStrategy) => tickStrategy.setDateOrigin(dateOrigin))
    chart
        .getDefaultAxisY()
        .setTitle('Units sold')
        .setInterval({ start: 0, end: 500, stopAxisAfter: false })
        .setScrollStrategy(AxisScrollStrategies.expansion)

    // Stream some random data.
    createProgressiveRandomGenerator()
        .setNumberOfPoints(10000)
        .generate()
        .setStreamBatchSize(1)
        .setStreamInterval(500)
        .setStreamRepeat(true)
        .toStream()
        .forEach((point) => {
            point.x = point.x * dataFrequency
            point.y = point.y * 500
            series.add(point)
        })

    // Add to LegendBox
    legend.add(chart)
}

// Spider
{
    const chart = db
        .createSpiderChart({
            columnIndex: 1,
            rowIndex: 0,
            columnSpan: 1,
            rowSpan: 2,
        })
        .setTitle('Product development costs vs. sales profits')
        .setScaleLabelFont((font) => font.setSize(12))
        .setAxisLabelFont((font) => font.setSize(14).setStyle('italic'))

    chart
        .addSeries(PointShape.Circle)
        .setName('Sales Profits')
        .addPoints(
            { axis: 'January', value: 100 },
            { axis: 'February', value: 200 },
            { axis: 'March', value: 300 },
            { axis: 'April', value: 400 },
            { axis: 'May', value: 500 },
            { axis: 'June', value: 650 },
            { axis: 'July', value: 800 },
            { axis: 'August', value: 990 },
            { axis: 'September', value: 1200 },
            { axis: 'October', value: 1100 },
            { axis: 'November', value: 1400 },
            { axis: 'December', value: 1500 },
        )
        .setCursorResultTableFormatter((tableContentBuilder, series, value, axis, formatValue) =>
            tableContentBuilder
                .addRow(series.getName())
                .addRow(axis)
                .addRow('$' + value),
        )

    chart
        .addSeries(PointShape.Circle)
        .setName('Development Costs')
        .addPoints(
            { axis: 'January', value: 0 },
            { axis: 'February', value: 100 },
            { axis: 'March', value: 300 },
            { axis: 'April', value: 400 },
            { axis: 'May', value: 500 },
            { axis: 'June', value: 600 },
            { axis: 'July', value: 700 },
            { axis: 'August', value: 900 },
            { axis: 'September', value: 1000 },
            { axis: 'October', value: 1100 },
            { axis: 'November', value: 1300 },
            { axis: 'December', value: 1400 },
        )
        .setCursorResultTableFormatter((tableContentBuilder, series, value, axis, formatValue) =>
            tableContentBuilder
                .addRow(series.getName())
                .addRow(axis)
                .addRow('$' + value),
        )

    // Add to LegendBox
    legend.add(chart)

    // Set the row height
    db.setRowHeight(0, 3)
}
