import { Card } from "react-bootstrap";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const sampleData = [
  { species: "Fish A", abundance: 40 },
  { species: "Fish B", abundance: 25 },
  { species: "Fish C", abundance: 15 },
];

const AbundanceChart = () => {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <Card.Title>Abundance Bar Chart</Card.Title>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={sampleData}>
            <XAxis dataKey="species" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="abundance" fill="grey" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card.Body>
    </Card>
  );
};

export default AbundanceChart;
