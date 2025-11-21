import React, { useEffect, useState } from "react";
import "../AdminStyles/ReviewsList.css";
import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import Footer from "../components/Footer";
import { Delete } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  clearMessage,
  deleteReview,
  fetchAdminProducts,
  fetchProductReviews,
  removeErrors,
  removeSuccess,
} from "../features/admin/adminSlice";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";
function ReviewsList() {
  const { products, loading, error, reviews, success, message } = useSelector(
    (state) => state.admin
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
const [showDeleteModal, setShowDeleteModal] = useState(false);
const [deleteData, setDeleteData] = useState({ productId: null, reviewId: null });
  // Load all products
  useEffect(() => {
    dispatch(fetchAdminProducts());
  }, [dispatch]);

  // Handle view reviews
  const handleViewReviews = (productId) => {
    setSelectedProduct(productId);
    dispatch(fetchProductReviews(productId));
    setShowModal(true); // ✅ open popup
  };

  const openDeleteModal = (productId, reviewId) => {
  setDeleteData({ productId, reviewId });
  setShowDeleteModal(true);
};

  // Handle delete review
  const handleDeleteReview = (productId, reviewId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this review?"
    );
    if (confirmDelete) {
      dispatch(deleteReview({ productId, reviewId })).then(() => {
        dispatch(fetchProductReviews(productId)); // ✔ Refresh reviews
      });
    }
  };

  // Handle errors and success messages
  useEffect(() => {
    if (error) {
      toast.error(error, { position: "bottom-left", autoClose: 2000 });
      dispatch(removeErrors());
    }

    if (success) {
      toast.success(message, { position: "bottom-left", autoClose: 2000 });
      dispatch(removeSuccess());
      dispatch(clearMessage());
    }
  }, [dispatch, error, success, message, navigate]);

  // If no products found
  if (!products || products.length === 0) {
    return (
      <>
        <Navbar />
        <br />
        <br />
        <br />
        <div className="reviews-list-container">
          <h1 className="reviews-list-title">Admin Reviews</h1>
          <p>No Product Found</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <br />
      <br />
      {loading ? (
        <Loader />
      ) : (
        <>
          <PageTitle title="salemAKmangoes" />
          <div className="reviews-list-container">
            <h1 className="reviews-list-title">All Products</h1>

            {/* Product Table */}
            <table className="reviews-table">
              <thead>
                <tr>
                  <th>Sl No</th>
                  <th>Product Name</th>
                  <th>Product Image</th>
                  <th>Number of Reviews</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={product._id}>
                    <td>{index + 1}</td>
                    <td>{product.name}</td>
                    <td>
                      <img
                        src={product.image?.[0]?.url}
                        alt={product.name}
                        className="product-image"
                      />
                    </td>
                    <td>{product.numOfReviews}</td>
                    <td>
                      {product.numOfReviews > 0 && (
                        <button
                          className="action-btn2 view-btn"
                          onClick={() => handleViewReviews(product._id)}
                        >
                          View Reviews
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {showModal && (
              <div className="modal-overlay">
                <div className="modal-content">
                  <button
                    className="close-btn"
                    onClick={() => setShowModal(false)}
                  >
                    ×
                  </button>

                  <h2 className="font-semibold text-lg">Reviews for Product</h2>
                  <br />

                  {reviews.length === 0 ? (
                    <p>No reviews found</p>
                  ) : (
                    <table className="reviews-table">
                      <thead>
                        <tr>
                          <th>Sl No</th>
                          <th>Reviewer Name</th>
                          <th>Rating</th>
                          <th>Comment</th>
                          <th>Action</th>
                        </tr>
                      </thead>

                      <tbody>
                        {reviews.map((review, index) => (
                          <tr key={review._id}>
                            <td>{index + 1}</td>
                            <td>{review.name}</td>
                            <td>
                              {review.rating}{" "}
                              {review.rating > 1 ? "Stars" : "Star"}
                            </td>
                            <td>{review.comment}</td>
                            <td>
                              <button
                                className="action-btn delete-btn"
                                onClick={() =>
                                  handleDeleteReview(
                                    selectedProduct,
                                    review._id
                                  )
                                }
                              >
                                <Delete />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default ReviewsList;
