import React from "react";
import Card from "react-bootstrap/Card";
import { Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../sass/singlecart.scss";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import { addToWish, removeFromWish } from "../features/wishSlice";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleCart = ({ photo, title, price, alldata, id }) => {
  const { addItem } = useCart();
  const { addWishlistItem } = useWishlist();
  const notify = () =>
  toast.success('Product added to Cart!', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
  const dispatch = useDispatch();
  const local = localStorage.getItem("wishItems");
  const wishData = local
    ? JSON.parse(local).find((item) => item.id === id)
    : false;

  const [wishStatus, setWishStatus] = useState(wishData ? "solid" : "regular");
  const findWish = (id) => {
    const local = localStorage.getItem("wishItems");
    const wishData = local
      ? JSON.parse(local).find((item) => item.id === id)
      : false;
    return wishData ? true : false;
  };

  const wishClick = useCallback(() => {
    if (findWish(id)) {
      dispatch(removeFromWish(id));
      setWishStatus("regular");
    } else {
      dispatch(addWishlistItem({ photo, title, price, id }));
      setWishStatus("solid");
    }
  }, [id]);

  return (
    <Col sm={12} md={4}>
      <Card className="single-card">
        <Card.Img variant="top" src={photo} />
        <Card.Body className="card-body2">
          <Link
            className="more-btn"
            to={`/shop/${id}`}
            state={{ title, price, photo, alldata }}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <Card.Title className="card-title2">{title}</Card.Title>
          </Link>

          <Card.Text className="card-price2">{price} $</Card.Text>
          <div className="btn-cart-wish d-flex mx-auto"><Button
            className="btn-cart d-flex"
            onClick={() => {
              notify(addItem(alldata));
            }}
          >
            Add to cart
          </Button>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <Button
            className="btn-wish"
            onClick={() => {
              addWishlistItem(alldata);
            }}
          >
            <span>
            <i class="fa-regular fa-heart"></i>
            </span>
          </Button></div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleCart;
