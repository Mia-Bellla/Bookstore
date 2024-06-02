import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, NavDropdown, Form, Button, Carousel, Card, Modal, Row, Col } from 'react-bootstrap';

function App() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleCloseSignUp = () => setShowSignUp(false);
  const handleShowSignUp = () => setShowSignUp(true);

  const handleCloseSignIn = () => setShowSignIn(false);
  const handleShowSignIn = () => setShowSignIn(true);

  const handleCloseContact = () => setShowContact(false);
  const handleShowContact = () => setShowContact(true);

  const handleShowBookDetails = (book) => setSelectedBook(book);
  const handleCloseBookDetails = () => setSelectedBook(null);

  const books = [
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      price: "$32",
      description: "This novel, first published in 1813, is a romantic comedy about the manners and matrimonial machinations among the British gentry of the early 19th century. The story focuses on Elizabeth Bennet, one of five sisters, and her evolving relationship with the wealthy and aloof Mr. Darcy.",
      cover: "https://rukminim2.flixcart.com/image/850/1000/kkec4280/book/d/h/d/pride-prejudice-original-imafzra6pfewjjwb.jpeg?q=90&crop=false"
    },
    {
      title: "1984",
      author: "George Orwell",
      price: "$28",
      description: "Published in 1949, this dystopian novel is set in a totalitarian society under the constant surveillance of Big Brother. It follows Winston Smith, a low-ranking member of the ruling Party, who becomes disillusioned with the oppressive regime and begins to rebel against it.",
      cover: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/a4557793312907.5e6139cf2b2b6.jpg"
    },
    {
      title: "Moby-Dick",
      author: "Herman Melville",
      price: "$25",
      description: "This 1851 novel tells the adventures of Ishmael, a sailor aboard the whaling ship Pequod, commanded by the obsessive Captain Ahab. Ahab is on a relentless quest to hunt down Moby Dick, a giant white whale that had previously destroyed Ahab's ship and severed his leg.",
      cover: "https://cdnb.artstation.com/p/assets/images/images/028/032/393/large/tyler-lockett-moby-dick.jpg?1593289696"
    },
    {
      title: "The Diary of a Young Girl",
      author: "Anne Frank",
      price: "$20",
      description: "This is the poignant and powerful diary of Anne Frank, a Jewish girl who went into hiding with her family during the Nazi occupation of the Netherlands. Written between 1942 and 1944, the diary documents her thoughts, fears, and experiences as she navigates life in hiding.",
      cover: "https://m.media-amazon.com/images/I/71qeWx83sxL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      title: "Walden",
      author: "Henry David Thoreau",
      price: "$24",
      description: "Published in 1854, Walden is Thoreau's reflection on simple living in natural surroundings. The book details his experiment of living in a small cabin near Walden Pond in Massachusetts for two years, emphasizing self-sufficiency, simplicity, and introspection.",
      cover: "https://m.media-amazon.com/images/I/71P99VDL7cL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      title: "The Art of War",
      author: "Sun Tzu",
      price: "$25",
      description: "Written over two millennia ago, The Art of War is an ancient Chinese military treatise attributed to Sun Tzu, a military strategist and philosopher. The book is a compilation of strategies and tactics for warfare, emphasizing the importance of adaptability, strategic planning, and psychological warfare. Its principles have been applied not only in military contexts but also in business, sports, and personal development.",
      cover: "https://m.media-amazon.com/images/I/71qlLVWKltL._AC_UF1000,1000_QL80_.jpg"
    }
  ];

  return (
    <div>
      {/* Header with Navbar */}
      <Navbar expand="lg" className="navbar">
        <Container fluid>
          <Navbar.Brand href="#">Book Nook</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#books">Books</Nav.Link>
              <NavDropdown title="Categories" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#fiction">Fiction</NavDropdown.Item>
                <NavDropdown.Item href="#nonfiction">Non-Fiction</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#bestsellers">Best Sellers</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#contact" onClick={handleShowContact}>Contact</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Button variant="primary" className="ms-2" onClick={handleShowSignIn}>
              Sign In
            </Button>
            <Button variant="secondary" className="ms-2" onClick={handleShowSignUp}>
              Sign Up
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Carousel */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/67192467773215.5b45be0506794.jpeg"
            alt="First slide"
          />
          </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://getwalls.io/wallpapers/340306/2021--12--library-aesthetic-wallpapers-632422843-pc.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i1.wp.com/first10em.com/wp-content/uploads/2018/12/2018-book-list.jpg?fit=1024%2C576&ssl=1"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      {/* Filter and Sort */}
      <Container className="mt-4">
        <div className="filter-sort-container">
          <Form.Select aria-label="Filter by category">
            <option>Filter by category</option>
            <option value="1">Fiction</option>
            <option value="2">Non-Fiction</option>
            <option value="3">Science Fiction</option>
            <option value="4">Biography</option>
          </Form.Select>
          <Form.Select aria-label="Sort by">
            <option>Sort by</option>
            <option value="1">Relevance</option>
            <option value="2">Price</option>
            <option value="3">Publication Date</option>
          </Form.Select>
        </div>

        {/* Book Cards */}
        <Row>
          {books.map((book, index) => (
            <Col key={index} sm={12} md={6} lg={4} className="mb-4">
              <Card onClick={() => handleShowBookDetails(book)}>
                <Card.Img variant="top" src={book.cover} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>by {book.author}</Card.Text>
                  <Card.Text>{book.price}</Card.Text>
                  <Button variant="primary" className="me-2">Add to Cart</Button>
                  <Button variant="secondary">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Book Details Modal */}
      <Modal show={!!selectedBook} onHide={handleCloseBookDetails} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedBook?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedBook?.cover} alt={selectedBook?.title} />
          <h4>{selectedBook?.author}</h4>
          <p>{selectedBook?.price}</p>
          <p>{selectedBook?.description}</p>
          <Button variant="primary" className="me-2">Add to Cart</Button>
          <Button variant="secondary">Close</Button>
        </Modal.Body>
      </Modal>

      {/* Sign In Modal */}
      <Modal show={showSignIn} onHide={handleCloseSignIn}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign In
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Sign Up Modal */}
      <Modal show={showSignUp} onHide={handleCloseSignUp}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Contact Modal */}
      <Modal show={showContact} onHide={handleCloseContact}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Footer */}
      <footer className="footer mt-auto py-3">
        <div className="container">
          <Row>
            <Col lg={3} md={6} className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-dark">Privacy Policy</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Terms of Service</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">FAQ</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Contact</a>
                </li>
              </ul>
            </Col>
            <Col lg={3} md={6} className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Follow Us</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-dark">Facebook</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Twitter</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Instagram</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">LinkedIn</a>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          © 2024 Book Nook
        </div>
      </footer>
    </div>
  );
}

export default App;
