import React, { useEffect, useState } from "react";
import "../pageStyles/Products.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import { getProduct, removeErrors } from "../features/products/productSlice";
import Loader from "../components/Loader";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import NoProducts from "../components/NoProducts";
import Pagination from "../components/Pagination";
import { Button, Container } from "@mui/material";

function Products() {
  const { loading, error, products, resultsPerPage, productCount } =
    useSelector((state) => state.product);
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const keyword = searchParams.get("keyword");
  const category = searchParams.get("category");
  const pageFromURL = parseInt(searchParams.get("page"), 10) || 1;
  const [currentPage, setCurrentPage] = useState(pageFromURL);
  const navigate = useNavigate();
  const categories = ["Mangoes", "Others"];

  useEffect(() => {
    dispatch(getProduct({ keyword, page: currentPage, category }));
  }, [dispatch, keyword, currentPage, category]);
  useEffect(() => {
    if (error) {
      toast.error(error.message, { position: "bottom-center", autoClose: 3000 });
      dispatch(removeErrors());
    }
  }, [dispatch, error]);


  const handleCategoryClick = (category) => {
    const newSearchParams = new URLSearchParams(location.search);
    newSearchParams.set("category", category);
    newSearchParams.delete("page");
    navigate(`?${newSearchParams.toString()}`);
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
<Container>
          <div className="filter-section">
            <ul className="flex items-center gap-7">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                 className={`btn-category ${category === category ? "active" : ""}`}>
                  {category}
                </button>
              ))}
            </ul>
          </div>
          </Container>
          <div>
            {products.length > 0 ? (
              
                <div className="home-container">
                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {products.map((product, index) => (
                      <Product product={product} key={index} />
                    ))}
                  </div>
                </div>
              
            ) : (
              <>
              <br/><br/>
              <NoProducts />
              </>
            )}

           
          </div>

          <Footer />
        </>
      )}
    </>
  );
}

export default Products;
