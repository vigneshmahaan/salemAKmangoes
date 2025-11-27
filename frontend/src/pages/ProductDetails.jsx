import React, { useEffect, useState } from "react";
import "../pageStyles/ProductDetails.css";
import PageTitle from "../components/PageTitle";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Rating from "../components/Rating";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  createReview,
  getProductDetails,
  removeErrors,
  removeSuccess,
} from "../features/products/productSlice";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import { addItemsToCart, removeMessage } from "../features/cart/cartSlice";
import { Container } from "@mui/material";

function ProductDetails() {
  const [userRating, setUserRating] = useState(0);
  const [comment, setComment] = useState("");
  const [quantity, setQuantity] = useState(3);
  const [selectedImage, setSelectedImage] = useState("");
  const handleRatingChange = (newRating) => {
    setUserRating(newRating);
  };
  const { loading, error, product, reviewSuccess, reviewLoading } = useSelector(
    (state) => state.product
  );

  const {
    loading: cartLoading,
    error: cartError,
    success,
    message,
    cartItems,
  } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      dispatch(getProductDetails(id));
    }
    return () => {
      dispatch(removeErrors());
    };
  }, [dispatch, id]);

  useEffect(() => {
    if (error) {
      toast.error(error.message, { position: "bottom-left", autoClose: 2000 });
      dispatch(removeErrors());
    }
    if (cartError) {
      toast.error(cartError, { position: "bottom-left", autoClose: 2000 });
    }
  }, [dispatch, error, cartError]);

  useEffect(() => {
    if (success) {
      toast.success(message, { position: "bottom-left", autoClose: 2000 });
      dispatch(removeMessage());
    }
  }, [dispatch, success, message]);

  const decreaseQuantity = () => {
    if (quantity <= 3) {
      toast.error("Quantity cannot be less than 3kg", {
        position: "bottom-left",
        autoClose: 2000,
      });
      dispatch(removeErrors());
      return;
    }
    setQuantity((qty) => qty - 1);
  };
  const increaseQuantity = () => {
    if (product.stock <= quantity) {
      toast.error("Cannot exceed available Stock!", {
        position: "bottom-left",
        autoClose: 2000,
      });
      dispatch(removeErrors());
      return;
    }
    setQuantity((qty) => qty + 1);
  };

  const addToCart = () => {
    dispatch(addItemsToCart({ id, quantity }));
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!userRating) {
      toast.error("Please Select a rating", {
        position: "bottom-left",
        autoClose: 2000,
      });
      return;
    }
    dispatch(
      createReview({
        rating: userRating,
        comment,
        productId: id,
      })
    );
  };
  useEffect(() => {
    if (reviewSuccess) {
      toast.success("Review Submitted Successfully", {
        position: "bottom-left",
        autoClose: 2000,
      });
      setUserRating(0);
      setComment("");
      dispatch(removeSuccess());
      dispatch(getProductDetails(id));
    }
  }, [reviewSuccess, id, dispatch]);
  useEffect(() => {
    if (product && product.image && product.image.length > 0) {
      setSelectedImage(product.image[0].url);
    }
  }, [product]);
  if (loading) {
    return (
      <>
        <Navbar />
        <Loader />
        <Footer />
      </>
    );
  }
  if (error || !product) {
    return (
      <>
        <Navbar />
        <Footer />
      </>
    );
  }
  return (
    <>
      <PageTitle title={`${product.name} - Details`} />
      <Navbar />
      <div className="product-details-container">
        <div className="product-detail-container">
          <div className="product-image-container">
            <img
              src={selectedImage}
              alt={product.name}
              className="product-detail-image"
            />
            {product.image.length > 1 && (
              <div className="product-thumbnails">
                {product.image.map((img, index) => (
                  <img
                    src={img.url}
                    alt={`Thumbnail ${index + 1}`}
                    className="thumbnail-image"
                    onClick={() => setSelectedImage(img.url)}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="product-info">
            <h2>{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">
              Price : ₹ {product.price} /<strong> per kg</strong>
            </p>

            <div className="product-rating">
              <Rating value={product.ratings} disabled={true} />
              <span className="productCardSpan">
                {" "}
                ( {product.numOfReviews}{" "}
                {product.numOfReviews === 1 ? "Review" : "Reviews"} )
              </span>
            </div>

            <div className="stock-status">
              <span
                className={
                  product.stock > 3 ? (
                    <h6 className="text-green-600">In Stock</h6>
                  ) : product.stock >= 0 ? (
                    <h6 className="text-red-600">Out of Stock</h6>
                  ) : (
                    <h6 className="text-red-600">Season Over</h6>
                  )
                }
              >
                {product.stock > 3 ? (
                  `In Stock (available)`
                ) : (
                  <h6 className="text-red-600">Season over</h6>
                )}
              </span>
            </div>
            <p className="text-gray-600 text-sm">Minimum 3kg</p>
            {product.stock > 0 && (
              <>
                {" "}
                <div className="quantity-controls">
                  <span className="quantity-label">Quantity:</span>
                  <button
                    className="quantity-button2"
                    onClick={decreaseQuantity}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={quantity}
                    className="quantity-value"
                    readOnly
                  />
                  kg
                  <button
                    className="quantity-button2"
                    onClick={increaseQuantity}
                  >
                    +
                  </button>
                </div>
                <div className="gap1">
                  <button
                    className="add-to-cart-btn font-semibold text-lg uppercase"
                    onClick={addToCart}
                    disabled={cartLoading}
                  >
                    {cartLoading ? "Adding" : "Add to Cart"}
                  </button>

                  <Link
                    to={"/cart"}
                    className="add-to-cart-btn text-center hov font-semibold text-lg uppercase"
                    onClick={addToCart}
                    disabled={cartLoading}
                    href={"/cart"}
                  >
                    Buy Now
                  </Link>
                </div>
              </>
            )}

            <form className="review-form" onSubmit={handleReviewSubmit}>
              <h3>Write a Review</h3>
              <Rating
                value={0}
                disabled={false}
                onRatingChange={handleRatingChange}
              />
              <textarea
                placeholder="Write your review here.."
                className="review-input"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              ></textarea>
              <button className="submit-review-btn" disabled={reviewLoading}>
                {reviewLoading ? "Submitting" : "Submit Review"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <h3 className="flex items-center justify-center font-semibold font-xl">
        Customer Reviews
      </h3>
      {product.reviews && product.reviews.length > 0 ? (
        <div className="flex items-center justify-center flex-col gap-5 p-5 mb-8">
          {product.reviews.map((review, index) => (
            <div className="container flex flex-col gap-3 w-full max-w-3xl p-9 mx-auto divide-y rounded-md  dark:text-gray-800">
              <div className="flex justify-between  p-4">
                <div className="flex space-x-4 " key={index}>
                  <div>
                    <span className="text-xs dark:text-gray-600">
                      Review by
                    </span>
                    <h4 className="font-bold">{review.name}</h4>
                  </div>
                </div>
                <div className="flex items-center space-x-2 dark:text-yellow-700">
                  <Rating value={review.rating} disabled={true} />
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                <p>{review.comment}</p>
              </div>
            </div>
          ))}
          <br />
        </div>
      ) : (
        <div className="m-4">
          <br />
          <p className="no-reviews text-lg font-semibold text-center">
            No reviews yet. Be the first to review this product!
          </p>
          <br />
        </div>
      )}

      <Footer />
    </>
  );
}

export default ProductDetails;
