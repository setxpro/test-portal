import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Janeiro",
    Revenue: 2025,
    Expenses: 1172,
    balance: 2400,
  },
  {
    name: "Fevereiro",
    Revenue: 2507,
    Expenses: 1253,
    balance: 2210,
  },
  {
    name: "Março",
    Revenue: 3518,
    Expenses: 1018,
    balance: 2290,
  },
  {
    name: "Abril",
    Revenue: 2780,
    Expenses: 989,
    balance: 4529,
  },
  {
    name: "Maio",
    Revenue: 1890,
    Expenses: 989,
    balance: 5540,
  },
  {
    name: "Junho",
    Revenue: 2390,
    Expenses: 867,
    balance: 6673,
  },
  {
    name: "Julho",
    Revenue: 7937,
    Expenses: 736,
    balance: 2100,
  },
  {
    name: "Agosto",
    Revenue: 10251,
    Expenses: 1186,
    balance: 2100,
  },
  {
    name: "Setembro",
    Revenue: 12565,
    Expenses: 1186,
    balance: 2100,
  },
  {
    name: "Outubro",
    Revenue: 14935,
    Expenses: 1130,
    balance: 2100,
  },
  {
    name: "Novembro",
    Revenue: 17305,
    Expenses: 1130,
    balance: 2100,
  },
  {
    name: "Dezembro",
    Revenue: 19675,
    Expenses: 1130,
    balance: 2100,
  },
];

// import { Container } from './styles';

const TwoLeaveChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Revenue" stroke="#82ca9d" />
        <Line
          type="monotone"
          dataKey="Expenses"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="balance"
          stroke="#444ddd"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TwoLeaveChart;
