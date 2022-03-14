import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Chart = ({
    timestamp,
    prises,
    currency,
    loading,
}) => {

    return (
        <div>
            {loading ? <h1>loading...</h1> :
                <Line
                    options={{
                        responsive: true,
                        animations: {

                            radius: {
                                duration: 400,
                                easing: 'linear',
                                loop: (context) => context.active
                            },
                            tension: {
                                duration: 2000,
                                easing: 'linear',
                                from: 1,
                                to: 0,
                                loop: false
                            }
                        },
                        hoverBackgroundColor: '#e80074',
                        plugins: {
                            legend: {
                                position: 'top',
                            },
                            // title: {
                            //     display: true,
                            //     text: `The prises of last month for ${currency} `,
                            // },
                        },
                        scales: {
                            x: {
                                display: true,
                            },
                            y: {
                                display: true,
                            }
                        },
                        aspectRatio: 2.5,
                    }}
                    data={{
                        labels: timestamp.map((item) => item),
                        datasets: [
                            {
                                label: "",
                                data: prises.map((item) => item),
                                backgroundColor: '#ffcc00',
                                borderColor: '#18164f',
                                borderWidth: 3,
                                pointStyle: 'circle',
                                pointRadius: 8,
                                pointHoverRadius: 15
                            }
                        ]
                    }}
                />}
        </div>
    )
}

export default Chart;
