import { Modal, Button } from "react-bootstrap";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell, Legend
} from "recharts";

const DetailModal = ({ show, handleClose, cardTitle }) => {
  // Example dummy data for each metric
  const dataMap = {
    "Total Species": [
      { name: "Jan", value: 200 },
      { name: "Feb", value: 210 },
      { name: "Mar", value: 230 },
    ],
    "Novel Species": [
      { name: "Known", value: 172 },
      { name: "Novel", value: 58 },
    ],
    "Samples Processed": [
      { name: "Jan", value: 800 },
      { name: "Feb", value: 1000 },
      { name: "Mar", value: 1200 },
    ],
    "Avg. Novelty Score": [
      { name: "Jan", value: 0.6 },
      { name: "Feb", value: 0.65 },
      { name: "Mar", value: 0.68 },
    ],
  };

  const chartData = dataMap[cardTitle] || [];
  const COLORS = ["#0d6efd", "#198754", "#ffc107", "#dc3545"];

  // Decide chart type dynamically
  const renderChart = () => {
    switch (cardTitle) {
      case "Total Species":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#0d6efd" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );

      case "Novel Species":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        );

      case "Samples Processed":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#198754" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        );

      case "Avg. Novelty Score":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis domain={[0, 1]} />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#6f42c1" strokeWidth={3} dot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        );

      default:
        return <p>No chart available.</p>;
    }
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Details: {cardTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{renderChart()}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DetailModal;
