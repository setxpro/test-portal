import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';
import { Container } from './styles';

const data = [
  {data: 1500},
  {data: 20000},
  {data: 10000},
  {data: 30000},
  {data: 4500},
]


const DashboardRevenue = () => {
  return (
      <Container>
          <div className='top'>
              <div className='info'>
                  <h4>This month earnings</h4>
                  <h1>$682.5</h1>
                  <div className='growth'>
                      <span>+2.45</span>
                  </div>
              </div>
          </div>
          <div className='chart'>
            <ResponsiveContainer height="100%" width="100%">
                <AreaChart 
                    width={500} 
                    height={400} 
                    data={data} 
                    margin={{top:0, left:0, right: 0, bottom:0}}>

                        <Tooltip cursor={false}/>
                        <Area
                            animationBegin={800}
                            animationDuration={2000}
                            type="monotone"
                            dataKey="data"
                            stroke="#2b28c7"
                            fill="#232c803b"
                            strokeWidth={4}
                        />
                </AreaChart>
            </ResponsiveContainer>
          </div>
      </Container>
  );
}

export default DashboardRevenue;