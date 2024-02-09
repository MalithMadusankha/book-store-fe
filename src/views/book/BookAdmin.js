import {
  Card,
  CardHeader,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import { useEffect, useState } from "react";
import { GetBooks } from "./service/BookService";
import NewInvestigatorModal from "./componet/NewBookModal";
import ViewInvestigatorModal from "./componet/UpdateBookModal";
import DeleteInvestigatorModal from "./componet/DeleteBookModal";

const BookAdmin = () => {
  const [data, setData] = useState([]);

  const fetchBooks = async () => {
    const books = await GetBooks();
    setData(books.data.result);
  };

  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row>
                  <div className="col">
                    <h3 className="mb-0 ">Book Details</h3>
                  </div>
                  <div className="col d-flex justify-content-end">
                    <NewInvestigatorModal />
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col" />
                    <th scope="col">Title</th>
                    <th scope="col">Author</th>
                    <th scope="col">Availabl eQuantity</th>
                    <th scope="col">Sold Quantity</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {data.map((book, index) => (
                    <tr key={index}>
                      <td>
                        <img
                          alt="..."
                          style={{ width: 50, height: 70 }}
                          src={book.bookImage}
                        />
                      </td>
                      <td>{book.title}</td>
                      <td>{book.author}</td>
                      <td>{book.availableQuantity}</td>
                      <td>{book.soldQuantity}</td>
                      <td>
                        <Row>
                          <ViewInvestigatorModal book={book} />
                        </Row>
                        <Row className="mt-2">
                          <DeleteInvestigatorModal book={book} />
                        </Row>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default BookAdmin;
