import React from 'react';
import { VictoryAxis,VictoryPie,VictoryPolarAxis, VictoryBar,VictoryGroup,VictoryTheme, VictoryChart, VictoryLabel} from 'victory';


const SkillChart = React.createClass({
    render () {
        return (
            <div className="skills negativevspace">
                <svg width={500} height={450}>
                    <VictoryChart polar
                                  width={450}
                                  height={450}
                                  theme={VictoryTheme.material}
                    >
                        {
                            ["REACT\n","HTML/CSS\n","JAVASCRIPT","PYTHON\n","\nJAVA","\nC++","\nBASH",].map((d, i) => {
                                return (
                                    <VictoryPolarAxis dependentAxis
                                                      key={i}
                                                      label={d}
                                                      labelPlacement="perpendicular"
                                                      style={{tickLabels: { fill: "none" } }}
                                                      axisValue={i}
                                    />
                                );
                            })
                        }
                        <VictoryBar

                            style={{ data: { fill: "tomato", width: 75 , stroke: "#fff"} }}
                            data={[
                                { x: 0, y: 50 },
                                { x: 1, y: 90 },
                                { x: 2, y: 75 },
                                { x: 3, y: 80 },
                                { x: 4, y: 50 },
                                { x: 5, y: 70 },
                                { x: 6, y: 60 },
                            ]}
                        />
                    </VictoryChart>
                </svg>
            </div>
        );
    }
})


export default SkillChart;