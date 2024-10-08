import One from "../assets/01.png";
import { ChartConfig, ChartContainer } from "../components/ui/chart";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const chartData = [
  { name: "Tab 1", value: 90 },
  { name: "Tab 2", value: 30 },
  { name: "Tab 3", value: 50 },
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

  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fillColor}
      radius={0}
    />
  );
};

export default function YourGoal() {
  return (
    <div className='mt-[124px]'>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col items-center justify-center gap-[31px]'>
          <img src={One} className='w-[158px] h-[128px]' alt='01' />
          <p className='text-[42px] bg-[linear-gradient(91.73deg,#1B2EA1_48.22%,#090F34_127.67%)] bg-clip-text text-transparent text-[42px] font-bold'>
            {" "}
            Identify your Goal
          </p>
        </div>
        <div className='text-[35px] w-3/4 mt-[51px] text-center font-light text-[#535252]'>
          List of your goals with details of how much you need to achieve the
          goal, how much you have invested for that goal, and how much you will
          need at the current inflation rate
        </div>
      </div>

      <div className='flex mt-[74px] mb-[56px] justify-center items-center'>
        <div className='w-5/6'>
          <div className='w-[400px] h-[312px] rounded bg-white shadow-lg  border border-gray-100  p-5'>
            <div>
              <p className='text-[18px] font-medium'>Emergency Fund (1Y)</p>
            </div>
            <div>
              <div className=' mt-[60px]'>
                <ChartContainer
                  config={chartConfig}
                  className='min-h-[200px] w-full'>
                  <BarChart data={chartData} width={400} height={300}>
                    <defs>
                      <linearGradient
                        id='gradient1'
                        x1='0'
                        y1='0'
                        x2='1'
                        y2='0'>
                        <stop offset='29.17%' stopColor='#2552C5' />
                        <stop offset='70.83%' stopColor='#1E5FFF' />
                      </linearGradient>
                      <linearGradient
                        id='gradient2'
                        x1='0'
                        y1='0'
                        x2='1'
                        y2='0'>
                        <stop offset='29.17%' stopColor='#288528' />
                        <stop offset='70.83%' stopColor='#23B923' />
                      </linearGradient>
                      <linearGradient
                        id='gradient3'
                        x1='0'
                        y1='0'
                        x2='1'
                        y2='0'>
                        <stop offset='29.17%' stopColor='#C52525' />
                        <stop offset='70.83%' stopColor='#EB5F5F' />
                      </linearGradient>
                    </defs>
                    <XAxis
                      dataKey='name'
                      tickLine={false}
                      axisLine={{ stroke: "#000" }}
                    />{" "}
                    {/* Show X-axis */}
                    <YAxis domain={[0, 100]} hide /> {/* Hide Y-axis */}
                    {/* Use Bar with customized rendering */}
                    <Bar
                      dataKey='value'
                      radius={4}
                      barSize={40}
                      shape={renderCustomBarShape} // Custom bar rendering
                    />
                    {/* Custom horizontal baseline (X-axis line) */}
                    <line
                      x1='0'
                      y1={290}
                      x2='400'
                      y2={290}
                      stroke='#000'
                      strokeWidth='2'
                    />{" "}
                    {/* Baseline */}
                    {/* <ChartTooltip /> */}
                  </BarChart>
                </ChartContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
