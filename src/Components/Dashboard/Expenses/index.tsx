import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';
import { Container } from './styles';

const data = [
  {data: 4500},
  {data: 5000},
  {data: 5500},
  {data: 6000},
  {data: 6500},
  {data: 4000},
  {data: 8500},
  {data: 4200},
  {data: 7500},
  {data: 6800},
  {data: 4500},
  {data: 5000},
  {data: 5500},
]


const DashboardExpenses = () => {
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
                            stroke="#28C76F"
                            fill="#2380373c"
                            strokeWidth={4}
                        />
                </AreaChart>
            </ResponsiveContainer>
          </div>
      </Container>
  );
}

export default DashboardExpenses;