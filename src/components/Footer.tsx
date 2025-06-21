import { Container, Row, Col, Stack, } from "react-bootstrap";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-4 mt-8">
      <Container>
        <Row className="bg-primary text-white p-4 ">
            <Col className="mx-4">
              <Stack>
                <h2>Sony Blame</h2>
                <p>Sony blame tag</p>
              </Stack>
            </Col>
            <Col>
                <h4>Contato</h4>
                <p>bruno.kirovs@gmail.com</p>
            </Col>
        </Row>
      </Container>
      <p className="text-center">
        @{new Date().getFullYear()} Deesenvolvido por Bruno Juan - Enginner Developer.
      </p>
    </footer>
  );
}


