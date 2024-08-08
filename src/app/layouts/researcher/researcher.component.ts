import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';


// Register the necessary Chart.js components
Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './researcher.component.html',
  styleUrls: ['./researcher.component.css']
})
export class ResearcherComponent implements OnInit {
  constructor() { }
  showComponent: boolean = true;
  pat : any = '/researcher';
  
  ngOnInit(): void {
   
    this.createPieChart();
  }
 

  toggleComponent(): void {

    this.showComponent = !this.showComponent;
    if(this.showComponent){
      this.createPieChart();
    }
  }
  createPieChart(): void {
    const ctx = (document.getElementById('myPieChart') as HTMLCanvasElement).getContext('2d');
    if (ctx) {
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Normal', 'Cancer'],
          datasets: [{
            label: 'Data Distribution',
            data: [49, 51],
            backgroundColor: ['#4B8BF5', '#FF6F61'],
            borderColor: ['#ffffff', '#ffffff'],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              callbacks: {
                label: function(tooltipItem) {
                  const label = tooltipItem.label || '';
                  const value = tooltipItem.raw || 0;
                  return `${label}: ${value}%`;
                }
              }
            }
          }
        }
      });
    }
  }

  downloadCSV() {
    const csvFileUrl = 'assets/merged_data.csv';
    const link = document.createElement('a');
    link.href = csvFileUrl;
    link.download = 'data.csv'; // Specify the file name to be downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  

  
}

