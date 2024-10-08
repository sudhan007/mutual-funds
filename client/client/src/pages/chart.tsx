import { useEffect, useRef, useState } from "react";
import { Pie, PieChart } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip } from "../components/ui/chart";

export const description = "A pie chart with gradient background";

const chartData = [
  { key: "Gold", values: 15, fill: "url(#gold-gradient)" },
  { key: "Crypto", values: 2, fill: "url(#crypto-gradient)" },
  { key: "International Equity", values: 13, fill: "url(#international-gradient)" },
  { key: "Domestic Equity", values: 35, fill: "url(#domestic-gradient)" },
  { key: "Debt", values: 5, fill: "url(#debt-gradient)" },
  { key: "Realestate", values: 30, fill: "url(#realestate-gradient)" },
];

const chartConfig = {
  values: {
    label: "values",
  },
};

export default function Chart() {
  const [isVisible, setIsVisible] = useState(false);
  const chartRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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

  useEffect(() => {
    const handleScroll = () => {
      if (chartRef.current) {
        const rect = chartRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (<>
    <div className="flex justify-around items-center">
      <div>
        <ChartContainer
          config={chartConfig}
          className="aspect-square max-h-[600px]" // Increased size for container
        >
          <div ref={chartRef}>
            <PieChart width={600} height={600}>
              <svg>
                <defs>
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
                outerRadius={180}
                labelLine={false}
                label={({ cx, cy, midAngle, innerRadius, outerRadius, value, name }) => {
                  const RADIAN = Math.PI / 180;
                  const radius = innerRadius + (outerRadius - innerRadius) * 0.80;
                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                  const y = cy + radius * Math.sin(-midAngle * RADIAN);

                  return (
                    <text
                      x={x}
                      y={y}
                      fill="black"
                      textAnchor={"middle"}
                      dominantBaseline="central"
                      fontSize={11}
                    >
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

      <div>
        <div className="flex flex-col gap-[30px]">
          {chartData.map((entry) => (
            <div key={entry.key} className="flex items-center gap-[20px] font-light ">
           
              <svg width={32} height={32} radius={180}>
              <circle cx="16" cy="16" r="16" fill={entry.fill} />
              </svg>
              <span className="text-[25px]" >{entry.key}</span> 
            </div>
          ))}
        </div>
      </div>
      
    </div>
    <div className="text-center mt-[40px]">
    <h1 className="text-[40px] font-normal text-[#6B6B6B]">Here’s the diverse portfolio</h1>
  </div>
  </>
  
    
  );
}
