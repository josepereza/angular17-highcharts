import { Component, OnInit, AfterViewInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChartModule } from 'angular-highcharts';

import { Chart, StockChart } from 'angular-highcharts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ChartModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-highcharts';


  chart!: Chart;
  chart2!: Chart;
  chart3!: Chart;
  chart4!: Chart;

  stockChart!: StockChart;
  hidden = false;

  toggle() {
    this.hidden = !this.hidden;
  }

  init() {
    this.chart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Linechart'
      },
      credits: {
        enabled: false
      },
      series: [
        {
          name: 'Line 1',
          data: [1, 2, 3],
          type: 'line'
        }
      ]
    });

    this.chart2=new Chart({
      chart: {
        type: 'column'
      },
      title: {
        text: 'Corn vs wheat estimated production for 2020',
        align: 'left'
      },
      subtitle: {
        text:
          'Source: <a target="_blank" ' +
          'href="https://www.indexmundi.com/agriculture/?commodity=corn">indexmundi</a>',
        align: 'left'
      },
      xAxis: {
        categories: ['USA', 'China', 'Brazil', 'EU', 'India', 'Russia'],
        crosshair: true,
        accessibility: {
          description: 'Countries'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: '1000 metric tons (MT)'
        }
      },
      tooltip: {
        valueSuffix: ' (1000 MT)'
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: [
        {
          name: 'Corn',
          data: [406292, 260000, 107000, 68300, 27500, 14500]
        },
        {
          name: 'Wheat',
          data: [51086, 136000, 5500, 141000, 107180, 77000]
        }as any
      ]
    })
     

    this.chart4=new Chart({
      chart: {
        type: 'bar'
    },
    title: {
        text: 'Fruit Consumption'
    },
    xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
        title: {
            text: 'Fruit eaten'
        }
    },
    series: [{
        name: 'Jane',
        data: [1, 0, 4]
    }, {
        name: 'John',
        data: [5, 7, 3]
    }]as any
});
    

    this.chart3=new Chart({
      chart: {
        type: 'area'
      },
      accessibility: {
        description: 'Image description: An area chart compares the nuclear stockpiles of the USA and the USSR/Russia between 1945 and 2017. The number of nuclear weapons is plotted on the Y-axis and the years on the X-axis. The chart is interactive, and the year-on-year stockpile levels can be traced for each country. The US has a stockpile of 6 nuclear weapons at the dawn of the nuclear age in 1945. This number has gradually increased to 369 by 1950 when the USSR enters the arms race with 6 weapons. At this point, the US starts to rapidly build its stockpile culminating in 32,040 warheads by 1966 compared to the USSR’s 7,089. From this peak in 1966, the US stockpile gradually decreases as the USSR’s stockpile expands. By 1978 the USSR has closed the nuclear gap at 25,393. The USSR stockpile continues to grow until it reaches a peak of 45,000 in 1986 compared to the US arsenal of 24,401. From 1986, the nuclear stockpiles of both countries start to fall. By 2000, the numbers have fallen to 10,577 and 21,000 for the US and Russia, respectively. The decreases continue until 2017 at which point the US holds 4,018 weapons compared to Russia’s 4,500.'
      },
      title: {
        text: 'US and USSR nuclear stockpiles'
      },
      subtitle: {
        text: 'Source: <a href="https://fas.org/issues/nuclear-weapons/status-world-nuclear-forces/" ' +
          'target="_blank">FAS</a>'
      },
      xAxis: {
        allowDecimals: false,
        accessibility: {
          rangeDescription: 'Range: 1940 to 2017.'
        }
      },
      yAxis: {
        title: {
          text: 'Nuclear weapon states'
        }
      },
      tooltip: {
        pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
      },
      plotOptions: {
        area: {
          pointStart: 1940,
          marker: {
            enabled: false,
            symbol: 'circle',
            radius: 2,
            states: {
              hover: {
                enabled: true
              }
            }
          }
        }
      },
      series: [{
        name: 'USA',
        data: [
          null, null, null, null, null, 2, 9, 13, 50, 170, 299, 438, 841,
          1169, 1703, 2422, 3692, 5543, 7345, 12298, 18638, 22229, 25540,
          28133, 29463, 31139, 31175, 31255, 29561, 27552, 26008, 25830,
          26516, 27835, 28537, 27519, 25914, 25542, 24418, 24138, 24104,
          23208, 22886, 23305, 23459, 23368, 23317, 23575, 23205, 22217,
          21392, 19008, 13708, 11511, 10979, 10904, 11011, 10903, 10732,
          10685, 10577, 10526, 10457, 10027, 8570, 8360, 7853, 5709, 5273,
          5113, 5066, 4897, 4881, 4804, 4717, 4571, 4018, 3822, 3785, 3805,
          3750, 3708, 3708
        ]
      }, {
        name: 'USSR/Russia',
        data: [null, null, null, null, null, null, null, null, null,
          1, 5, 25, 50, 120, 150, 200, 426, 660, 863, 1048, 1627, 2492,
          3346, 4259, 5242, 6144, 7091, 8400, 9490, 10671, 11736, 13279,
          14600, 15878, 17286, 19235, 22165, 24281, 26169, 28258, 30665,
          32146, 33486, 35130, 36825, 38582, 40159, 38107, 36538, 35078,
          32980, 29154, 26734, 24403, 21339, 18179, 15942, 15442, 14368,
          13188, 12188, 11152, 10114, 9076, 8038, 7000, 6643, 6286, 5929,
          5527, 5215, 4858, 4750, 4650, 4600, 4500, 4490, 4300, 4350, 4330,
          4310, 4495, 4477
        ]
      }]as any
    })
    this.stockChart = new StockChart({
      rangeSelector: {
        selected: 1
      },

      title: {
        text: 'AAPL Stock Price'
      },

      series: [
        {
          name: 'AAPL Stock Price',
          data: [
            [1482935400000, 116.76],
            [1483021800000, 116.73],
            [1483108200000, 115.82],
            [1483453800000, 116.15],
            [1483540200000, 116.02],
            [1483626600000, 116.61],
            [1483713000000, 117.91],
            [1483972200000, 118.99],
            [1484058600000, 119.11],
            [1484145000000, 119.75],
            [1484231400000, 119.25],
            [1484317800000, 119.04],
            [1484663400000, 120],
            [1484749800000, 119.99],
            [1484836200000, 119.78],
            [1484922600000, 120]
          ],
          type: 'spline',
          tooltip: {
            valueDecimals: 2
          }
        }
      ]
    });
  }
  // add point to chart serie
  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }

  ngOnInit(): void {
    this.init();
    console.log('on init');
    this.chart.ref$.subscribe(chart => {
      console.log(chart);
    });
  }

  ngAfterViewInit(): void {
    console.log('after view init');
    this.chart.ref$.subscribe(chart => {
      console.log(chart);
    });
  }
}