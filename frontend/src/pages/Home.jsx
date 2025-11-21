import React, { useEffect } from "react";
import "../pageStyles/Home.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ImageSlider from "../components/ImageSlider";
import Product from "../components/Product";
import PageTitle from "../components/PageTitle";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, removeErrors } from "../features/products/productSlice";
import { toast } from "react-toastify";
import { Button, Container } from "@mui/material";
import { ArrowDownward, ArrowRight } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Homebanner from "../components/Homebanner";
import NoProducts from "../components/NoProducts";
import BulkForm from "../components/BulkForm";

function Home() {
  const { loading, error, products, productCount } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct({ keyword: "" }));
  }, [dispatch]);
  useEffect(() => {
    if (error) {
      toast.error(error.message, { position: "bottom-center", autoClose: 3000 });
      dispatch(removeErrors());
    }
  }, [dispatch, error]);
  return (
    <>
    <Navbar />
    <br/><br/><br/>
      {loading ? (
        <Loader />
      ) : (
        <>
          <PageTitle title="salemAKmangoes" />
         <Container>
          <Homebanner/>
         </Container>
          <br/><br/>
          <div className="flex items-center mt-12 flex-col">
            <h2 className="home-heading">Mangoes</h2>
            {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
              {products.slice(0, 4).map((product, index) => (
                <Product product={product} key={index} />
              ))}
            </div>
             ) : (
              <NoProducts />
            )}
          </div>
          <br/>
          <div className="filter-section2">
            <ul className="flex items-center gap-7">
              <button link={"/products"} className="btn-category"><Link to={`/products/`}>See More</Link></button>
            </ul>
            
          </div>
          <hr className="custom-hr"/>
          <br/>
          <div className="newdiv">
           <h2 className="text-center text-2xl md:text-3xl font-bol">
 FOR BULK ORDER BOOKING
</h2>

<p className="text-center text-sm md:text-base text-gray-700">
  Please fill out this form to place bulk orders above 20 kg. 
  Our team will contact you shortly.
</p>
             <BulkForm/>
          </div>

        </>
      )}
       <Footer />
    </>
  );
}

export default Home;
