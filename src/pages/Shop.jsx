import axios from "axios";
import React from "react";
import "../sass/shop.scss";
import { Row, Container, Col, InputGroup, Form, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import SingleCart from "../components/SingleCart";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import Pagination from "./Pagination";
import "../sass/filter.scss";
import "../sass/_homemedia.scss"

const Shop = (props) => {
  const [allData, setAllData] = useState([]);
  const [shop, setShop] = useState([]);
  const [query, setQuery] = useState("");
  const [sortType, setSortType] = useState("");

  // this is for pagination

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      axios
        .get("https://run.mocky.io/v3/d676e3d5-c61a-49c4-8db9-a1fdcc35adb2")
        .then((res) => {
          setShop(res.data);
          setAllData(res.data);
          setLoading(false);
        });
    } catch (error) {
      console.log("error: ", error);
    }
  }, []);

  // this is for filtering

  const filterResult = (catItem) => {
    setQuery("");
    setCurrentPage(1);
    if (catItem !== "") {
      const result = allData.filter((item) => {
        return item.category === catItem;
      });

      setShop(result);
    } else {
      setShop(allData);
    }
  };

  const handleSearchFilter = (e) => {
    setQuery(e.target.value);
    setCurrentPage(1);
    const searchableShop = allData.filter((item) =>
      item.title.toLocaleLowerCase().includes(e.target.value)
    );
    setShop(searchableShop);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSort = (type) => {
    setCurrentPage(1);
    setSortType(type);
    let sortedShop = [...shop];

    switch (type) {
      case "priceLowToHigh":
        sortedShop.sort((a, b) => a.price - b.price);
        break;
      case "priceHighToLow":
        sortedShop.sort((a, b) => b.price - a.price);
        break;
      default:
        // No sorting or default sorting
        break;
    }

    setShop(sortedShop);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  if (loading) return null;

  return (
    <div className="shop-page">
      <Container className="con-shop">
        <div className="products-text px-4 py-5  text-center ">
          <h1>All Products</h1>
        </div>

        {/* <Row>
          <Col sm={12} md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Sale!</Card.Title>
                <Card.Text>Love More Discount 15% Off</Card.Text>
                <Button variant="primary">MORE INFO</Button>
              </Card.Body>
              <Card.Img variant="top" src="holder.js/100px180" />
            </Card>
          </Col>

          <Col sm={12} md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Sale!</Card.Title>
                <Card.Text>Love More Discount 15% Off</Card.Text>
                <Button variant="primary">MORE INFO</Button>
              </Card.Body>
              <Card.Img variant="top" src="holder.js/100px180" />
            </Card>
          </Col>

          <Col sm={12} md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Sale!</Card.Title>
                <Card.Text>Love More Discount 15% Off</Card.Text>
                <Button variant="primary">MORE INFO</Button>
              </Card.Body>
              <Card.Img variant="top" src="holder.js/100px180" />
            </Card>
          </Col>
        </Row> */}
        <div className="d-flex">
          <Row className="cards-row g-4 m-0 ">
            {shop.length > 0 ? (
              <>
                {shop
                  .slice(indexOfFirstPost, indexOfLastPost)
                  .map((item, i) => {
                    return (
                      <SingleCart
                        photo={item.photo}
                        title={item.title}
                        price={item.price}
                        key={item}
                        alldata={item}
                        id={item.id}
                      />
                    );
                  })}

                <Pagination
                  currentPage={currentPage}
                  postsPerPage={postsPerPage}
                  totalPosts={shop.length}
                  onPageChange={handlePageChange}
                />
              </>
            ) : (
              <p>No any item</p>
            )}
          </Row>

          <div className="filter-wrapper ">
            <InputGroup className="input-search mb-3 my-5">
              <Form.Control
                className="input-search"
                placeholder="Search product"
                onChange={handleSearchFilter}
                value={query}
              />
              <Button className="btn-search" variant="success">
                Search
              </Button>
            </InputGroup>
            <Row className="filter-row ">
              <Col sm={12} md={6}>
                
                  <Button
                  className="btn-sort"
                    variant="secondary"
                    onClick={() => handleSort("priceLowToHigh")}
                  >
                    Sort by Price: <br />
                     Low to High
                  </Button>
                  </Col>
                  <Col sm={12} md={6}>
                  <Button
                  className="btn-sort"
                    variant="secondary"
                    onClick={() => handleSort("priceHighToLow")}
                  >
                    Sort by Price: <br />
                    High to Low
                  </Button>
               
              </Col>
              <Col sm={12} md={6}>
                <img
                  className="filter-imgs"
                  src="https://cdn.discordapp.com/attachments/1091845697462083585/1134176728558862376/interior-of-modern-living-room-with-armchair-and-furniture-3d-rendering-e1673417233167-300x300_1.jpg"
                  alt=""
                />
                <Button
                  className="btn-filter"
                  onClick={() => {
                    filterResult("");
                  }}
                >
                  All Products
                </Button>
              </Col>
              <Col sm={12} md={6}>
                <img
                  className="filter-imgs"
                  src="https://cdn.discordapp.com/attachments/1091845697462083585/1134178021079797760/modern-sofa-isolated-e1673417271181-300x300.jpg"
                  alt=""
                />
                <Button
                  className="btn-filter"
                  onClick={() => {
                    filterResult("Sofa");
                  }}
                >
                  Sofa
                </Button>
              </Col>
              <Col sm={12} md={6}>
                <img
                  className="filter-imgs"
                  src="https://cdn.discordapp.com/attachments/1091845697462083585/1134177049519591484/armchair-isolated-on-white-background-3d-rendering-e1673417248279-300x300.jpg"
                  alt=""
                />
                <Button
                  className="btn-filter"
                  onClick={() => {
                    filterResult("Chair");
                  }}
                >
                  Chair
                </Button>
              </Col>
              <Col sm={12} md={6}>
                <img
                  className="filter-imgs"
                  src="https://cdn.discordapp.com/attachments/1091845697462083585/1134177373638627440/empty-wardrobe-with-sliding-doors-e1673417256418-300x300.jpg"
                  alt=""
                />
                <Button
                  className="btn-filter"
                  onClick={() => {
                    filterResult("Cupboard");
                  }}
                >
                  Cupboard
                </Button>
              </Col>
              <Col sm={12} md={6}>
                <img
                  className="filter-imgs"
                  src="https://cdn.discordapp.com/attachments/1091845697462083585/1134177769840980098/three-hanging-lamps-e1673417264433-300x300.jpg"
                  alt=""
                />
                <Button
                  className="btn-filter"
                  onClick={() => {
                    filterResult("Lamp");
                  }}
                >
                  Lamp
                </Button>
              </Col>
              <Col sm={12} md={6}>
                <img
                  className="filter-imgs"
                  src="https://cdn.discordapp.com/attachments/1091845697462083585/1134178221676572772/black-table-isolated-on-white-e1673417282170-300x300.jpg"
                  alt=""
                />
                <Button
                  className="btn-filter"
                  onClick={() => {
                    filterResult("Table");
                  }}
                >
                  Table
                </Button>
              </Col>
              <div className="icon-box-shop mt-5">
                <div>
                  <h3 className="ms-3">Follow Us</h3>
                </div>
                <div className="icon-box mt-2 ">
                  <Button className="icon-button-shop">
                    <i class="fa-brands fa-facebook">
                      {" "}
                      <span className="ms-2">Facebook</span>
                    </i>
                  </Button>
                  <Button className="icon-button-shop">
                    <i class="fa-brands fa-instagram">
                      {" "}
                      <span className="ms-2">Instagram</span>
                    </i>
                  </Button>
                  <Button className="icon-button-shop">
                    <i class="fa-brands fa-twitter">
                      {" "}
                      <span className="ms-2">Twitter</span>
                    </i>
                  </Button>
                  <Button className="icon-button-shop">
                    <i class="fa-brands fa-telegram">
                      {" "}
                      <span className="ms-2">Telegram</span>
                    </i>
                  </Button>
                  <Button className="icon-button-shop">
                    <i class="fa-brands fa-youtube">
                      {" "}
                      <span className="ms-2">Youtube</span>
                    </i>
                  </Button>
                </div>
              </div>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
