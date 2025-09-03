import { useState } from "react";
import { Card, Table, Form } from "react-bootstrap";

const TaxonomyTable = () => {
  const initialData = [
    { species: "Fish A", abundance: 40, novelty: 0.1 },
    { species: "Fish B", abundance: 25, novelty: 0.7 },
    { species: "Fish C", abundance: 15, novelty: 0.5 },
    { species: "Fish D", abundance: 55, novelty: 0.2 },
  ];

  const [data] = useState(initialData);
  const [filter, setFilter] = useState("");

  const filteredData = data.filter((row) =>
    row.species.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>Taxonomy Table</Card.Title>

        <Form.Control
          type="text"
          placeholder="Filter by species..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="mb-3"
        />

        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Species</th>
              <th>Abundance</th>
              <th>Novelty Score</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, idx) => (
              <tr key={idx}>
                <td>{row.species}</td>
                <td>{row.abundance}</td>
                <td>{row.novelty}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default TaxonomyTable;
