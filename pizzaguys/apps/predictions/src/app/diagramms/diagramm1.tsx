
import { useState, useEffect, Component } from 'react';
import ReactECharts from 'echarts-for-react'; // or var ReactECharts = require('echarts-for-react');
import Diagrammdata from '../../interfaces/diagramm1';
import React from 'react';


type MyProps = {
  // using `interface` is also ok

};
type MyState = {
  data: Diagrammdata[]; // like this
};
class Diagramm1 extends React.Component<MyProps, MyState> {
  override state: MyState = {
    // optional second annotation for better type inference
    data: [],
  };

  override componentDidMount() {
    const apiUrl = `assets/diagramm1.json`;
        fetch(apiUrl)
          .then((res) => res.json())
          .then((repos: Diagrammdata[]) => {
            this.setState({ data: repos });
          });
  }



  getSeries(data: Diagrammdata[]){
    
    //group by topic 
    //get topic 
  
    const seriesPerTopic:any[]= [];
    data.forEach((e) => {
      const topicExists = seriesPerTopic.find(x => x.topic === e.topic );
      if(topicExists === undefined){
        seriesPerTopic.push(
          {
          name: e.topic,
          data: [e.views],
          type: 'line',
          areaStyle: {},
          category: e.topic,
          topic: e.topic
            
          }
        )
      }
      else{
        topicExists.data.push(e.views);
      }
    })
    return seriesPerTopic; 
  }



  getCategories(data: Diagrammdata[]): string[] {
    const dates: string[] = [];
    data.forEach((element) => {
      if (dates.indexOf(element.date) == -1) {
        dates.push(element.date);
      }
    });
    
    return dates;
  }

  override render() {

   if(this.state.data != undefined){
    const options = {
      xAxis: {
      type: 'category',
      boundaryGap: false,
      data: this.getCategories(this.state.data),
      },
    legend: {
    },
    yAxis: {
      type: 'value',
    },
    series: this.getSeries(this.state.data),}

    return (
      <div>
        <ReactECharts option={options} />
      </div>
    );

   }

    
    return (
      <div>
        {/* <ReactECharts option={option} /> */}
      </div>
    );
  }
  getSeriesNames(data: Diagrammdata[]) : string[]{
           
      //group by topic 
      //get topic 
    
      const topics:string[]= [];
      data.forEach((e) => {
        const topicExists = topics.find(x => x === e.topic );
        if(topicExists === undefined){
          topics.push(e.topic)
        }
      })
      return topics; 
  }
}


export default Diagramm1;