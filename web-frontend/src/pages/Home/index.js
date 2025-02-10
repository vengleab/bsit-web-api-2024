import React from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

class Home extends React.Component {
  state = {};

  async componentDidMount() {
    fetch("http://localhost:8080/users")
      .then((res) => res.json())
      .then((data) => {
        console.log("users data", data);
      })
      .catch(console.error);
  }

  render() {
    const { articles = [] } = this.state;

    return (
      <Row>
        <h1>Home Page</h1>
        {/* <img src="http://localhost:8080/assets/nodejs.jpeg" alt="logo" /> */}
        <Col md={8}>
          {articles.map((article) => (
            <Card
            >
              {/* <Card.Img variant="top" src={article.} /> */}
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.description}</Card.Text>
                <Card.Link href={`/view-article/${article._id}`}>Card Link</Card.Link>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    );
  }
}

export default Home;
