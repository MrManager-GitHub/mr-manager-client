import React from 'react'
import {Line} from 'react-chartjs-2'

function LineChart() {
    const data = {
        labels: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Agu',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ],
        datasets: [
            {
                label: 'Expence of 2020 (Lakes)',
                data: [30, 21, 12, 5, 10, 50, 36, 8.6, 37.12, 10.5, 45, 59.70],
                backgroundColor: ['#3c8dbc'],
                // borderColor: ['#343a40'],
                pointBackgroundColor: '#007bff',
            }
        ]
    }
    const options = {
        title: {
            display: true,
            text: 'Project 1'
        }
    }
    return (
        <Line data={data} options={options} />
    )
}

export default LineChart
