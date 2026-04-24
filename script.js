// Initialize Reveal.js
Reveal.initialize({
    hash: true,
    center: true,
    transition: 'slide',
    transitionSpeed: 'default',
    controls: true,
    progress: true,
    slideNumber: true,
    history: true,
    keyboard: true,
    overview: true,
    width: 1200,
    height: 700,
    margin: 0.1,
    minScale: 0.2,
    maxScale: 2.0
});

// Create hardware development chart
Reveal.on('slidechanged', event => {
    if (event.currentSlide.querySelector('#hardwareChart')) {
        createHardwareChart();
    }
});

// Also try to create chart on load if we're on that slide
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const currentSlide = Reveal.getCurrentSlide();
        if (currentSlide && currentSlide.querySelector('#hardwareChart')) {
            createHardwareChart();
        }
    }, 500);
});

function createHardwareChart() {
    const canvas = document.getElementById('hardwareChart');
    if (!canvas || canvas.dataset.initialized) return;
    
    canvas.dataset.initialized = 'true';
    
    const ctx = canvas.getContext('2d');
    
    // Hardware development data (approximations based on public information)
    const data = {
        datasets: [
            {
                label: 'IBM',
                data: [
                    {x: 2016, y: 5},
                    {x: 2017, y: 20},
                    {x: 2019, y: 53},
                    {x: 2021, y: 127},
                    {x: 2022, y: 433},
                    {x: 2023, y: 1121},
                ],
                backgroundColor: 'rgba(59, 130, 246, 0.7)',
                borderColor: 'rgba(59, 130, 246, 1)',
                borderWidth: 2,
                pointRadius: 6,
            },
            {
                label: 'Google',
                data: [
                    {x: 2018, y: 72},
                    {x: 2019, y: 53},
                ],
                backgroundColor: 'rgba(239, 68, 68, 0.7)',
                borderColor: 'rgba(239, 68, 68, 1)',
                borderWidth: 2,
                pointRadius: 6,
            },
            {
                label: 'IonQ',
                data: [
                    {x: 2020, y: 32},
                    {x: 2023, y: 35},
                ],
                backgroundColor: 'rgba(16, 185, 129, 0.7)',
                borderColor: 'rgba(16, 185, 129, 1)',
                borderWidth: 2,
                pointRadius: 6,
            },
            {
                label: 'D-Wave (Annealing)',
                data: [
                    {x: 2011, y: 128},
                    {x: 2015, y: 1000},
                    {x: 2017, y: 2000},
                    {x: 2020, y: 5000},
                ],
                backgroundColor: 'rgba(251, 191, 36, 0.7)',
                borderColor: 'rgba(251, 191, 36, 1)',
                borderWidth: 2,
                pointRadius: 6,
            },
            {
                label: 'Rigetti',
                data: [
                    {x: 2018, y: 19},
                    {x: 2021, y: 80},
                ],
                backgroundColor: 'rgba(139, 92, 246, 0.7)',
                borderColor: 'rgba(139, 92, 246, 1)',
                borderWidth: 2,
                pointRadius: 6,
            },
            {
                label: 'Atom Computing',
                data: [
                    {x: 2023, y: 1000},
                ],
                backgroundColor: 'rgba(236, 72, 153, 0.7)',
                borderColor: 'rgba(236, 72, 153, 1)',
                borderWidth: 2,
                pointRadius: 6,
            },
        ]
    };
    
    new Chart(ctx, {
        type: 'scatter',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    title: {
                        display: true,
                        text: 'Year',
                        color: '#fff',
                        font: {
                            size: 14
                        }
                    },
                    min: 2010,
                    max: 2024,
                    ticks: {
                        color: '#fff',
                        stepSize: 2
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                y: {
                    type: 'logarithmic',
                    title: {
                        display: true,
                        text: 'Qubit Count (log scale)',
                        color: '#fff',
                        font: {
                            size: 14
                        }
                    },
                    ticks: {
                        color: '#fff',
                        callback: function(value) {
                            if (value === 1 || value === 10 || value === 100 || value === 1000 || value === 10000) {
                                return value;
                            }
                            return '';
                        }
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'right',
                    labels: {
                        color: '#fff',
                        font: {
                            size: 11
                        },
                        usePointStyle: true,
                        padding: 10
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + 
                                   context.parsed.y + ' qubits (' + 
                                   context.parsed.x + ')';
                        }
                    }
                },
                annotation: {
                    annotations: {
                        nisq: {
                            type: 'box',
                            xMin: 2016,
                            xMax: 2024,
                            yMin: 50,
                            yMax: 10000,
                            backgroundColor: 'rgba(59, 130, 246, 0.05)',
                            borderColor: 'rgba(59, 130, 246, 0.3)',
                            borderWidth: 2,
                        },
                        utility: {
                            type: 'line',
                            xMin: 2023,
                            xMax: 2023,
                            yMin: 1,
                            yMax: 10000,
                            borderColor: 'rgba(16, 185, 129, 0.7)',
                            borderWidth: 2,
                            borderDash: [5, 5],
                            label: {
                                display: true,
                                content: 'Utility Era',
                                position: 'start',
                                color: '#10b981'
                            }
                        },
                        advantage: {
                            type: 'line',
                            xMin: 2019,
                            xMax: 2019,
                            yMin: 1,
                            yMax: 10000,
                            borderColor: 'rgba(251, 191, 36, 0.7)',
                            borderWidth: 2,
                            borderDash: [5, 5],
                            label: {
                                display: true,
                                content: 'Quantum Supremacy',
                                position: 'start',
                                color: '#fbbf24'
                            }
                        }
                    }
                }
            }
        }
    });
}
