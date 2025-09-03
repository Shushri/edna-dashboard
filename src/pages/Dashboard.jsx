import { Container, Row, Col } from "react-bootstrap";
import AbundanceChart from "../components/AbundanceChart";
import TaxonomyTable from "../components/TaxonomyTable";
import MetricCard from "../components/MetricCard";
import DetailModal from "../components/DetailModal";
import { useState } from "react";

const Dashboard = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (cardTitle) => {
    setSelectedCard(cardTitle);
    setShowModal(true);
  };

  return (
    <Container className="my-4">
      <h1 className="mb-4">eDNA Biodiversity Dashboard</h1>

      {/* Row of metric boxes */}
      <Row className="mb-4">
        <Col md={3}>
          <MetricCard
            title="Total Species"
            value="230"
            change="+12% from last month"
            color="green"
            onClick={handleCardClick}
          />
        </Col>
        <Col md={3}>
          <MetricCard
            title="Novel Species"
            value="58"
            change="+8% discovered"
            color="blue"
            onClick={handleCardClick}
          />
        </Col>
        <Col md={3}>
          <MetricCard
            title="Samples Processed"
            value="1,200"
            change="+25% efficiency"
            color="orange"
            onClick={handleCardClick}
          />
        </Col>
        <Col md={3}>
          <MetricCard
            title="Avg. Novelty Score"
            value="0.68"
            change="↑ improving"
            color="purple"
            onClick={handleCardClick}
          />
        </Col>
      </Row>

      {/* Row for charts */}
      <Row>
        <Col md={6}>
          <AbundanceChart />
        </Col>
        <Col md={6}>
          <TaxonomyTable />
        </Col>
      </Row>

      {/* Modal for details */}
      <DetailModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        cardTitle={selectedCard}
      />
    </Container>
  );
};

export default Dashboard;
