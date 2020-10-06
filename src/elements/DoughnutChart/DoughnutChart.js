import React from 'react'
import {Doughnut} from 'react-chartjs-2'

function DoughnutChart() {
    const data = {
        labels: [
            'Cement',
            'Steel',
            'ACC Blocks',
            'Bricks',
            'Maintenance',
            'Worker\'s wages',
            'Other',
        ],
        datasets: [
            {
                label: 'Expence of 2020 (Lakes)',
                data: [30, 14, 7, 21, 11.5, 14.25, 2.25],
                backgroundColor: ['rgba(255,99,132,1)','rgba(255,205,86,1)','rgba(54,162,235,1)','rgba(255,159,64,1)','rgba(153,102,255,1)','#3c8dbc','#d2d6df'],
                // borderColor: ['#343a40'],
                // pointBackgroundColor: '#007bff',
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
        <Doughnut data={data} options={options} />
    )
}

export default DoughnutChart
