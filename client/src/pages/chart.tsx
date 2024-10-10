import { useEffect, useRef, useState } from "react";
import { Pie, PieChart } from "recharts";
import { ChartContainer, ChartTooltip } from "../components/ui/chart";

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
  const [chartSize, setChartSize] = useState({
    width: 600,
    height: 600,
    outerRadius: 180,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setChartSize({
          width: 600,
          height: 600,
          outerRadius: 180,
        });
      } else {
        setChartSize({
          width: 300,
          height: 300,
          outerRadius: 120,
        });
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
          setTimeout(() => {
            setIsVisible(true);  
          }, 100); 
        } else {
          setIsVisible(false);
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
    <>
    <div className="flex lg:flex-row flex-col justify-between items-center w-full ">
    <div className="flex lg:justify-end justify-center items-center w-full">
  <ChartContainer
    config={chartConfig}
    className="aspect-square lg:max-h-[700px] max-h-[300px] max-w-[300px] lg:max-w-[600px]"
  >
    <div ref={chartRef} className="flex  items-center justify-center relative">
      <PieChart width={chartSize.width} height={chartSize.height}>
        <svg>
        <defs>
                    <linearGradient
                      id="gold-gradient"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="1"
                    >
                      <stop offset="24.4%" stopColor="#18C5F3" />
                      <stop offset="51.91%" stopColor="#49DBDA" />
                      <stop offset="89.04%" stopColor="#94F9B3" />
                    </linearGradient>

                    <linearGradient
                      id="debt-gradient"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="1"
                    >
                      <stop offset="-44.8%" stopColor="#2C6470" />
                      <stop offset="99.27%" stopColor="#54BFD6" />
                    </linearGradient>

                    <radialGradient
                      id="crypto-gradient"
                      cx="50%"
                      cy="50%"
                      r="50%"
                      fx="50%"
                      fy="50%"
                    >
                      <stop offset="0%" stopColor="#FDFF69" />
                      <stop offset="100%" stopColor="#F7CB46" />
                    </radialGradient>

                    <linearGradient
                      id="international-gradient"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#FF4F4F" />
                      <stop offset="50%" stopColor="#D45E44" />
                      <stop offset="100%" stopColor="#D42727" />
                    </linearGradient>

                    <linearGradient
                      id="domestic-gradient"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="1"
                    >
                      <stop offset="12.1%" stopColor="#FF6444" />
                      <stop offset="56.23%" stopColor="#FFA12B" />
                      <stop offset="85.55%" stopColor="#F6C61E" />
                    </linearGradient>

                    <linearGradient
                      id="realestate-gradient"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="1"
                    >
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
          outerRadius={chartSize.outerRadius}
          cx="50%" 
          cy="50%" 
          startAngle={90} 
          endAngle={450} 
          labelLine={false}
          label={({ cx, cy, midAngle, innerRadius, outerRadius, value }) => {
            const RADIAN = Math.PI / 180;
            const radius = innerRadius + (outerRadius - innerRadius) * 0.7;
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);

            return (
              <text
                x={x}
                y={y}
                fill="black"
                textAnchor="middle"
                dominantBaseline="central"
                className="text-[12px] lg:text-[16px]"
              >
                {`${value}%`}
              </text>
            );
          }}
          isAnimationActive={isVisible}
          animationDuration={800}
          // animationEasing="ease-out"
        />
      </PieChart>
    </div>
  </ChartContainer>
</div>


  <div className="w-full flex lg:justify-start    justify-center lg:items-start ">
    <div className="flex w-full justify-center  items-center lg:ml-32 ">
      <div className="flex lg:flex-col w-5/6 flex-row justify-center lg:items-start items-center flex-wrap lg:gap-[30px] gap-3">
        {chartData.map((entry) => (
          <div key={entry.key} className="flex items-center lg:gap-[20px] gap-2 font-light">
            <svg className="lg:w-[32px] lg:h-[32px] w-[15px] h-[15px]" radius={180}>
              <circle cx="50%" cy="50%" r="50%" fill={entry.fill} />
            </svg>
            <span className="lg:text-3xl text-base">{entry.key}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>


      <div className="text-center lg:mt-[40px] mt-[29px]">
        <h1 className="md:text-[40px] text-lg font-normal text-[#6B6B6B]">
          Here’s the diverse portfolio
        </h1>
      </div>
    </>
  );
}
