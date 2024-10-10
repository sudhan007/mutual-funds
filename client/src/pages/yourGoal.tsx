import { useEffect, useRef, useState } from "react";
import One from "../assets/01.png";
import {
    ChartConfig,
    ChartContainer,
} from "../components/ui/chart";
import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";
// @ts-ignore
import { XAxisTickProps } from "recharts"; 

interface GradientRectProps {
  x: number;
  y: number;
  gradientId: string;
}
const chartDataList = [
    [
        {
            "title": "Emergency Fund (1Y)",
            "data": [
                {
                    "name": "Required Today",
                    "percentage": 90,
                    "value": "₹54,00,000"
                },
                {
                    "name": "Invested For Goal",
                    "percentage": 45,
                    "value": "₹18,00,000"
                },
                {
                    "name": "Needed in Future",
                    "percentage": 70,
                    "value": "₹39,24,000"
                }
            ]
        },
        {
            "title": "Retirement (20Y)",
            "data": [
                {
                    "name": "Required Today",
                    "percentage": 70,
                    "value": "₹1,20,00,000"
                },
                {
                    "name": "Invested For Goal",
                    "percentage": 30,
                    "value": "₹70,00,000"
                },
                {
                    "name": "Needed in Future",
                    "percentage": 90,
                    "value": "₹1,47,78,078"
                }
            ]
        },
        {
            "title": "Cash Reserves to invest during Crashes (1Y)",
            "data": [
                {
                    "name": "Required Today",
                    "percentage": 60,
                    "value": "₹3,05,523"
                },
                {
                    "name": "Invested For Goal",
                    "percentage": 20,
                    "value": "₹50,000"
                },
                {
                    "name": "Needed in Future",
                    "percentage": 80,
                    "value": "₹2,73,910"
                }
            ]
        },
        {
            "title": "Vacancy (1Y)",
            "data": [
                {
                    "name": "Required Today",
                    "percentage": 80,
                    "value": "₹1,00,000"
                },
                {
                    "name": "Invested For Goal",
                    "percentage": 50,
                    "value": "₹60,000"
                },
                {
                    "name": "Needed in Future",
                    "percentage": 20,
                    "value": "₹36,400"
                }
            ]
        },
        {
            "title": "Electronic Gadget / Clothes (1Y)",
            "data": [
                {
                    "name": "Required Today",
                    "percentage": 85,
                    "value": "₹20,000"
                },
                {
                    "name": "Invested For Goal",
                    "percentage": 30,
                    "value": "₹5000"
                },
                {
                    "name": "Needed in Future",
                    "percentage": 65,
                    "value": "₹14,852"
                }
            ]
        },
        {
            "title": "Car (15Y)",
            "data": [
                {
                    "name": "Required Today",
                    "percentage": 90,
                    "value": "₹25,00,000"
                },
                {
                    "name": "Invested For Goal",
                    "percentage": 50,
                    "value": "₹15,00,000"
                },
                {
                    "name": "Needed in Future",
                    "percentage": 0,
                    "value": ""
                }
            ]
        },
        {
            "title": "Kids Education (25Y)",
            "data": [
                {
                    "name": "Required Today",
                    "percentage": 90,
                    "value": "₹50,00,000"
                },
                {
                    "name": "Invested For Goal",
                    "percentage": 55,
                    "value": "₹14,00,000"
                },
                {
                    "name": "Needed in Future",
                    "percentage": 0,
                    "value": ""
                }
            ]
        },
        {
            "title": "Kid’s marriage (35Y)",
            "data": [
                {
                    "name": "Required Today",
                    "percentage": 90,
                    "value": "₹25,00,000"
                },
                {
                    "name": "Invested For Goal",
                    "percentage": 40,
                    "value": "₹5000"
                },
                {
                    "name": "Needed in Future",
                    "percentage": 70,
                    "value": "₹22,81,248"
                }
            ]
        }
    ]
];

const chartConfig = {
    value: {
        label: "Value",
        color: "#60a5fa",
    },
} satisfies ChartConfig;

const renderCustomBarShape = (props: any) => {
    const { x, y, width, height, index } = props;

    const fillColor = (() => {
        if (index === 0) return "url(#gradient1)";
        if (index === 1) return "url(#gradient2)";
        if (index === 2) return "url(#gradient3)";
        return "#60a5fa";
    })();

    return <rect x={x} y={y} width={width} height={height} fill={fillColor} radius={0} />;
};

const GradientRect: React.FC<GradientRectProps> = ({ x, y, gradientId }) => (
  <rect x={x} y={y} width={4} height={15} fill={gradientId} />
);
const CustomXAxisTick: React.FC<XAxisTickProps> = ({ x, y, payload }) => {
  const gradientId = (() => {
      if (payload.index === 0) return "url(#gradient1)";
      if (payload.index === 1) return "url(#gradient2)";
      if (payload.index === 2) return "url(#gradient3)";
      return "#60a5fa"; 
  })();

  return (
      <g>
          
          <GradientRect  x={x - 42} y={y} gradientId={gradientId} /> 
         
          <text x={x - 36} y={y + 12} fill="#535252" className="md:text-xs text-[8px]" textAnchor="start">
              {payload.value}
          </text>
      </g>
  );
};


export default function YourGoal() {
  const chartRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isVisible, setIsVisible] = useState<boolean[]>(Array(chartDataList.length).fill(false));

  useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
              const index = Number(entry.target.getAttribute("data-index"));
              if (entry.isIntersecting) {
                  setIsVisible((prev) => {
                      const newVisible = [...prev];
                      newVisible[index] = true; 
                      return newVisible;
                  });
              } else {
                  setIsVisible((prev) => {
                      const newVisible = [...prev];
                      newVisible[index] = false; 
                      return newVisible;
                  });
              }
          });
      }, { threshold: 0.1 });

      chartRefs.current.forEach((chartRef) => {
          if (chartRef) {
              observer.observe(chartRef); 
          }
      });

      return () => {
          observer.disconnect(); 
      };
  }, []);

  return (
      <div className="mt-[124px]">
          <div className="flex flex-col  lg:items-center px-5 lg:p-0 lg:justify-center">
              <div className="flex flex-col lg:items-center  lg:justify-center gap-[31px]">
                <div className="w-full flex justify-center items-center">
                <img src={One} className="w-[158px] h-[128px]" alt="01" />
                </div>
                  
                  <p className="lg:text-[42px]  text-[30px] bg-[linear-gradient(91.73deg,#1B2EA1_48.22%,#090F34_127.67%)] bg-clip-text text-transparent font-bold">
                      Identify your Goal
                  </p>
              </div>
              <div className="lg:text-[35px]  text-[20px] lg:w-3/4 lg:mt-[51px] mt-5 lg:text-center text-left font-light text-[#535252]">
                <p>
                List of your goals with details of how much you need to achieve the goal, how much you have invested for that goal, and how much you will need at the current inflation rate.
                </p>
                 
              </div>
          </div>
          <div className="flex justify-center items-center">
              {chartDataList.map((chartGroup, groupIndex) => (
                  <div key={groupIndex} className="flex mt-5   lg:mt-0 flex-wrap justify-center items-center gap-[20px]">
                      {chartGroup.map((chartData, chartIndex) => {
                          const uniqueIndex = groupIndex * chartGroup.length + chartIndex; 
                          return (
                              <div className="flex  lg:mt-[74px]  lg:mb-[56px] justify-center items-center" key={chartIndex}>
                                  <div className="lg:w-5/6 w-full justify-center flex items-center" ref={(el) => (chartRefs.current[uniqueIndex] = el)} data-index={uniqueIndex}>
                                      <div className="lg:w-[460px] w-[300px] lg:h-[312px] rounded shadow-lg border border-gray-100 flex flex-col gap-5 lg:gap-[40px] p-5">
                                          <div>
                                              <p className="text-[18px] font-medium w-3/4 ">{chartData.title}</p>
                                          </div>
                                          <div>
                                              {isVisible[uniqueIndex] && ( 
                                                  <ChartContainer config={chartConfig} className="min-h-[150px] w-full">
                                                      <BarChart data={chartData.data} width={400} height={300}>
                                                          <defs>
                                                              <linearGradient id="gradient1" x1="0" y1="0" x2="1" y2="0">
                                                                  <stop offset="29.17%" stopColor="#2552C5" />
                                                                  <stop offset="70.83%" stopColor="#1E5FFF" />
                                                              </linearGradient>
                                                              <linearGradient id="gradient2" x1="0" y1="0" x2="1" y2="0">
                                                                  <stop offset="29.17%" stopColor="#288528" />
                                                                  <stop offset="70.83%" stopColor="#23B923" />
                                                              </linearGradient>
                                                              <linearGradient id="gradient3" x1="0" y1="0" x2="1" y2="0">
                                                                  <stop offset="29.17%" stopColor="#C52525" />
                                                                  <stop offset="70.83%" stopColor="#EB5F5F" />
                                                              </linearGradient>
                                                          </defs>
                                                          <XAxis
                                                              dataKey="name"
                                                              tickLine={false}
                                                              axisLine={{ stroke: "#000" }}
                                                              interval={0}
                                                              fontSize={12}
                                                              color="#535252"
                                                              tick={<CustomXAxisTick />}
                                                          />
                                                          <YAxis domain={[0, 100]} hide />
                                                          <Bar
                                                              dataKey="percentage"
                                                              radius={4}
                                                              barSize={40}
                                                              shape={renderCustomBarShape}
                                                          >
                                                              <LabelList
                                                                  dataKey="value"
                                                                  position="top"
                                                                  fill="#000"
                                                                  fontSize={12}
                                                              />
                                                          </Bar>
                                                          <line x1="0" y1={290} x2="400" y2={290} stroke="#000" strokeWidth="2" />
                                                      </BarChart>
                                                  </ChartContainer>
                                              )}
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          );
                      })}
                  </div>
              ))}
          </div>
      </div>
  );
}