import { useEffect, useRef, useState } from "react";
import Two from "../assets/02.png";
import { ChartContainer } from "../components/ui/chart";
import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";

const chartDataList = [
    [
        {
            "title": "Real Estate / Reits",
            "data": [
                {
                    "name": "Current Investment",
                    "percentage": 40,
                    "value": "₹30,000"
                },
                {
                    "name": "Required Investment",
                    "percentage": 1,
                    "value": "₹0"
                }
            ]
        },
        {
            "title": "Domestic Equity",
            "data": [
                {
                    "name": "Current Investment",
                    "percentage": 50,
                    "value": "₹51,53,731"
                },
                {
                    "name": "Required Investment",
                    "percentage": 70,
                    "value": "₹64,38,250"
                }
            ]
        },
        {
            "title": "International Equity",
            "data": [
                {
                    "name": "Current Investment",
                    "percentage": 40,
                    "value": "₹9,56,732"
                },
                {
                    "name": "Required Investment",
                    "percentage": 20,
                    "value": "₹14,85,750"
                }
            ]
        },
        {
            "title": "Debt",
            "data": [
                {
                    "name": "Current Investment",
                    "percentage": 50,
                    "value": "₹24,60,262"
                },
                {
                    "name": "Required Investment",
                    "percentage": 40,
                    "value": "₹24,10,250"
                }
            ]
        },
        {
            "title": "Gold",
            "data": [
                {
                    "name": "Current Investment",
                    "percentage": 30,
                    "value": "₹10,21,200"
                },
                {
                    "name": "Required Investment",
                    "percentage": 50,
                    "value": "₹12,38,125"
                }
            ]
        },
        {
            "title": "Crypto",
            "data": [
                {
                    "name": "Current Investment",
                    "percentage": 50,
                    "value": "₹1,60,517"
                },
                {
                    "name": "Required Investment",
                    "percentage": 70,
                    "value": "₹2,47,625"
                }
            ]
        },
    ]
];
const chartConfig = {
    value: {
        label: "Value",
        color: "#60a5fa",
    },
};

const renderCustomBarShape = (props: any) => {
    const { x, y, width, height, index } = props;
    const fillColor = index === 0 ? "url(#gradient1)" : index === 1 ? "url(#gradient2)" : index === 2 ? "url(#gradient3)" : "#60a5fa";
    return <rect x={x} y={y} width={width} height={height} fill={fillColor} radius={0} />;
};


export default function Allocation_Goal() {
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
                    <img src={Two} className="w-[158px] h-[128px]" alt="01" />
                    </div>
                   
                    <p className="lg:text-[42px]  text-3xl bg-[linear-gradient(91.73deg,#1B2EA1_48.22%,#090F34_127.67%)] bg-clip-text text-transparent font-bold">
                    Allocation to your Goals
                    </p>
                </div>
                <div className="lg:text-[35px] text-[20px] lg:w-3/4 lg:mt-[51px] mt-5 lg:text-center text-left font-light text-[#535252]">
                Based on the discussion we have with you we try to keep the investment within the recommended asset allocation , (ie) how much you have invested in a certain asset and what is the required investment to stay within your determined allocation  </div>
            </div>
            <div className="flex justify-center items-center">
                {chartDataList.map((chartGroup, groupIndex) => (
                    <div key={groupIndex} className="flex flex-wrap mt-5 lg:mt-0 justify-center items-center gap-5">
                        {chartGroup.map((chartData, chartIndex) => {
                            const uniqueIndex = groupIndex * chartGroup.length + chartIndex;
                            return (
                                <div className="flex  lg:mt-[74px] lg:mb-[56px] justify-center items-center" key={chartIndex}>
                                    <div className="lg:w-5/6 w-full justify-center flex items-center" ref={(el) => (chartRefs.current[uniqueIndex] = el)} data-index={uniqueIndex}>
                                        <div className="lg:w-[400px] w-[90%] lg:h-[330px] rounded bg-white shadow-lg border border-gray-100 flex flex-col gap-5 lg:gap-[40px] p-5">
                                            <div>
                                                <p className="text-[18px] font-medium">{chartData.title}</p>
                                            </div>
                                            <div>
                                                {isVisible[uniqueIndex] && (
                                                    <ChartContainer config={chartConfig} className="min-h-[150px] w-full">
                                                        <BarChart 
                                                            data={chartData.data} 
                                                            layout="vertical" 
                                                            width={400} 
                                                            height={200} 
                                                            margin={{ top: 0, right: 0, bottom: 0, left: -90 }}
                                                        >
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
                                                                type="number" 
                                                                tickLine={false}
                                                                axisLine={false}
                                                                domain={[0, 100]} 
                                                                hide
                                                            />
                                                            <YAxis 
                                                                type="category" 
                                                                axisLine={true} 
                                                                tick={false} 
                                                                width={100} 
                                                            />
                                                            <Bar
                                                                dataKey="percentage"
                                                                radius={0}
                                                                barSize={40} 
                                                                shape={renderCustomBarShape} 
                                                            >
                                                                <LabelList 
                                                                    dataKey="value" 
                                                                    position="right" 
                                                                    offset={10} 
                                                                    fill="#000" 
                                                                    fontSize={14} 
                                                                />
                                                            </Bar>
                                                        </BarChart>
                                                    </ChartContainer>
                                                )}
                                             
                                                <div style={{ position: 'relative' }} className="flex gap-10 mt-5 items-center justify-center">
                                                {chartData.data.map((entry, index) => (
                                                    <div key={index} className="flex items-center">
                                                        <div
                                                            className={`w-[4px] h-[15px] ${entry.name === "Current Investment" ? "bg-gradient-to-r from-[#2552C5] to-[#1E5FFF]" : "bg-gradient-to-r from-[#288528] to-[#23B923]"}`}
                                                            style={{ marginRight: '8px' }} 
                                                        />
                                                        <span className="text-[#535252] text-[12px]">{entry.name}</span>
                                                    </div>
                                                ))}
                                            </div>
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
