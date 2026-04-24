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
    width: 1920,
    height: 1080,
    margin: 0.04,
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
                backgroundColor: '#0891b2',
                borderColor: '#0891b2',
                borderWidth: 3,
                pointRadius: 8,
                pointHoverRadius: 10,
            },
            {
                label: 'Google',
                data: [
                    {x: 2018, y: 72},
                    {x: 2019, y: 53},
                ],
                backgroundColor: '#ef4444',
                borderColor: '#ef4444',
                borderWidth: 3,
                pointRadius: 8,
                pointHoverRadius: 10,
            },
            {
                label: 'IonQ',
                data: [
                    {x: 2020, y: 32},
                    {x: 2023, y: 35},
                ],
                backgroundColor: '#14b8a6',
                borderColor: '#14b8a6',
                borderWidth: 3,
                pointRadius: 8,
                pointHoverRadius: 10,
            },
            {
                label: 'D-Wave (Annealing)',
                data: [
                    {x: 2011, y: 128},
                    {x: 2015, y: 1000},
                    {x: 2017, y: 2000},
                    {x: 2020, y: 5000},
                ],
                backgroundColor: '#f59e0b',
                borderColor: '#f59e0b',
                borderWidth: 3,
                pointRadius: 8,
                pointHoverRadius: 10,
            },
            {
                label: 'Rigetti',
                data: [
                    {x: 2018, y: 19},
                    {x: 2021, y: 80},
                ],
                backgroundColor: '#8b5cf6',
                borderColor: '#8b5cf6',
                borderWidth: 3,
                pointRadius: 8,
                pointHoverRadius: 10,
            },
            {
                label: 'Atom Computing',
                data: [
                    {x: 2023, y: 1000},
                ],
                backgroundColor: '#ec4899',
                borderColor: '#ec4899',
                borderWidth: 3,
                pointRadius: 8,
                pointHoverRadius: 10,
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
                        color: '#1e293b',
                        font: {
                            size: 16,
                            weight: 600
                        }
                    },
                    min: 2010,
                    max: 2024,
                    ticks: {
                        color: '#64748b',
                        stepSize: 2,
                        font: {
                            size: 14
                        }
                    },
                    grid: {
                        color: 'rgba(226, 232, 240, 0.5)',
                        lineWidth: 1
                    }
                },
                y: {
                    type: 'logarithmic',
                    title: {
                        display: true,
                        text: 'Qubit Count (log scale)',
                        color: '#1e293b',
                        font: {
                            size: 16,
                            weight: 600
                        }
                    },
                    ticks: {
                        color: '#64748b',
                        font: {
                            size: 14
                        },
                        callback: function(value) {
                            if (value === 1 || value === 10 || value === 100 || value === 1000 || value === 10000) {
                                return value;
                            }
                            return '';
                        }
                    },
                    grid: {
                        color: 'rgba(226, 232, 240, 0.5)',
                        lineWidth: 1
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'right',
                    labels: {
                        color: '#1e293b',
                        font: {
                            size: 13,
                            weight: 500
                        },
                        usePointStyle: true,
                        padding: 15,
                        boxWidth: 12,
                        boxHeight: 12
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    titleColor: '#1e293b',
                    bodyColor: '#64748b',
                    borderColor: '#e2e8f0',
                    borderWidth: 1,
                    padding: 12,
                    bodyFont: {
                        size: 13
                    },
                    titleFont: {
                        size: 14,
                        weight: 600
                    },
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + 
                                   context.parsed.y + ' qubits (' + 
                                   context.parsed.x + ')';
                        }
                    }
                }
            }
        }
    });
}
