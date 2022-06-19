import { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react'; // or var ReactECharts = require('echarts-for-react');
import Diagrammdata from '../../interfaces/diagramm1';

export interface State {
  data: Diagrammdata[] | undefined;
}
const option = {
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: [],
  },
  yAxis: {
    type: 'value',
  },
  series: [],
};
const series = {
  data: [],
  type: 'line',
  areaStyle: {},
  category: '',
};

export function Diagramm1() {
  option.series;

  const [appState, setAppState] = useState<State>({
    data: undefined,
  });

  useEffect(() => {
    // setAppState({ loading: true });
    const apiUrl = `assets/diagramm1.json`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos: Diagrammdata[]) => {
        setAppState({ data: repos });
      });
  }, [setAppState]);

  if (appState.data != undefined) {
    const dates = [''];

    console.log(appState.data);

    appState.data.forEach((element) => {
      if (dates.indexOf(element.date) == -1) {
        dates.push(element.date);
      }
    });

    dates.forEach((x) => {
      option.xAxis.data.push(x);
    });

    appState.data.forEach((element) => {
      let topic = option.series.find((x) => x.category === element.topic);
      if (topic === undefined) {
        option.series.push({
          data: [],
          type: 'line',
          areaStyle: {},
          category: 'as',
        });
        topic = option.series.find((x) => x.category === element.topic);
      }
      topic.data.push(element.views);
    });
    series.data.push();
    option.series.push();

    return <ReactECharts option={option} />;
  } else {
    return <></>;
  }
}

export default Diagramm1;
