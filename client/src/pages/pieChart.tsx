import { useEffect, useRef, useState } from "react";
import { Pie, PieChart } from "recharts";
import { ChartContainer, ChartTooltip } from "../components/ui/chart";

export const description = "A donut chart";

const chartData = [
  { key: "Real Estate / Reits", values: 29, fill: "url(#realestate-gradient)" },
  { key: "Crypto", values: 1, fill: "url(#crypto-gradient)" },
  { key: "Gold", values: 19, fill: "url(#gold-gradient)" },
  { key: "Debt", values: 15, fill: "url(#debt-gradient)" },
  { key: "International Equity", values: 6, fill: "url(#international-gradient)" },
  { key: "Domestic Equity", values: 30, fill: "url(#domestic-gradient)" },
];

const chartConfig = {
  values: {
    label: "values",
  },
};

export default function Piechart() {
  const [isVisible, setIsVisible] = useState(false);
  const chartRef = useRef(null);
  const [chartSize, setChartSize] = useState(300);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setChartSize(450);
      } else {
        setChartSize(300);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false)
        }
      },
      { threshold: 0.1 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-col lg:flex-row justify-around items-center lg:gap-[100px]"> {/* Adjusted gap */}
        <div className="flex justify-center items-center mb-4">
          <ChartContainer
            config={chartConfig}
            className="aspect-square lg:max-h-[450px] max-h-[300px] max-w-[450px]"
          >
            <div ref={chartRef} className="flex items-center justify-center">
              <PieChart width={chartSize} height={chartSize}>
                <svg>
                  <defs>
                    {/* Define gradients */}
                    <linearGradient id="gold-gradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="24.4%" stopColor="#18C5F3" />
                      <stop offset="51.91%" stopColor="#49DBDA" />
                      <stop offset="89.04%" stopColor="#94F9B3" />
                    </linearGradient>
                    <linearGradient id="debt-gradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="-44.8%" stopColor="#2C6470" />
                      <stop offset="99.27%" stopColor="#54BFD6" />
                    </linearGradient>
                    <radialGradient id="crypto-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                      <stop offset="0%" stopColor="#FDFF69" />
                      <stop offset="100%" stopColor="#F7CB46" />
                    </radialGradient>
                    <linearGradient id="international-gradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#FF4F4F" />
                      <stop offset="50%" stopColor="#D45E44" />
                      <stop offset="100%" stopColor="#D42727" />
                    </linearGradient>
                    <linearGradient id="domestic-gradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="12.1%" stopColor="#FF6444" />
                      <stop offset="56.23%" stopColor="#FFA12B" />
                      <stop offset="85.55%" stopColor="#F6C61E" />
                    </linearGradient>
                    <linearGradient id="realestate-gradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="22.14%" stopColor="#6C26E8" />
                      <stop offset="48.72%" stopColor="#7D5BF9" />
                      <stop offset="75.24%" stopColor="#9193E9" />
                    </linearGradient>
                  </defs>
                </svg>

                <ChartTooltip
                  content={({ payload }) => {
                    if (payload && payload.length > 0) {
                      const { key, values } = payload[0].payload;
                      return (
                        <div className="bg-white px-2 py-1 rounded">
                          <p>{`${key}: ${values}%`}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Pie
                  data={chartData}
                  dataKey="values"
                  nameKey="key"
                  innerRadius={chartSize * 0.15} // Reduced inner circle size
                  outerRadius={chartSize * 0.4} 
                  labelLine={false}
                  label={({ cx, cy, midAngle, innerRadius, outerRadius, value }) => {
                    const RADIAN = Math.PI / 180;
                    const radius = innerRadius + (outerRadius - innerRadius) * 0.6; // Reduced to bring text closer
                    const x = cx + radius * Math.cos(-midAngle * RADIAN);
                    const y = cy + radius * Math.sin(-midAngle * RADIAN);

                    return (
                      <text x={x} y={y} fill="black" textAnchor="middle" dominantBaseline="central" 
                      className="text-[12px] lg:text-[14px]">
                        {`${value}%`}
                      </text>
                    );
                  }}
                  isAnimationActive={isVisible}
                />
              </PieChart>
            </div>
          </ChartContainer>
        </div>

        <div className="flex flex-wrap  lg:flex-col  justify-center lg:items-start gap-[30px]">
          {chartData.map((entry) => (
            <div key={entry.key} className="flex  items-center gap-[20px] font-light">
              <svg className="lg:w-[32px] lg:h-[32px] w-[15px] h-[15px]">
                <circle cx="50%" cy="50%" r="50%" fill={entry.fill} />
              </svg>
              <span className="md:text-3xl text-base">{entry.key}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
