import React, { useEffect } from "react";
import "../CartStyles/OrderConfirm.css";
import PageTitle from "../components/PageTitle";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import CheckoutPath from "./CheckoutPath";
import { useNavigate } from "react-router-dom";
import { refreshCartPrices } from "../features/cart/cartSlice";

function OrderConfirm() {
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shippingCharges = cartItems.quantity >= 7 ? 25 : 35;
  const total = subtotal + (shippingCharges*item.quantity); // here tax and shipping to assign
  const navigate = useNavigate();
  const proceedToPayment = () => {
    const data = {
      subtotal,
      shippingCharges,
      total,
    };
    sessionStorage.setItem("orderItem", JSON.stringify(data));
    navigate("/process/payment");
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshCartPrices());
  }, []);

  return (
    <section className="bg-white">
      <PageTitle title="salemAKmangoes" />
      <Navbar />
      <CheckoutPath activePath={1} />
      <div className="confirm-container">
        <h1 className="confirm-header">Order Summary</h1>
        <div className="confirm-table-container">
          <table className="confirm-table">
            <caption>Shipping Details</caption>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody className="bodyadd">
              <tr>
                {/* The data-label attribute is used by CSS to show the label on mobile */}
                <td data-label="Name">{user.name}</td>
                <td data-label="Phone">{shippingInfo.phoneNumber}</td>
                <td data-label="Address">
                  {shippingInfo.address}, {shippingInfo.city},{" "}
                  {shippingInfo.state}, {shippingInfo.country}-
                  {shippingInfo.pinCode}
                </td>
              </tr>
            </tbody>
          </table>

          <table className="confirm-table cart-table">
            <caption>Cart Items</caption>
            <thead>
              <tr>
                <th>Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.product}>
                  <td>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="order-product-image"
                    />
                  </td>
                  <td>{item.name} </td>
                  <td>₹ {item.price}/-</td>
                  <td>{item.quantity} </td>
                  <td>₹ {item.quantity * item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <table className="confirm-table">
            <caption>Order Summary</caption>
            <thead>
              <tr>
                <th>Subtotal</th>
                <th>Shipping Charges</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>₹ {subtotal}/-</td>
                <td>₹ {shippingCharges}/-</td>
                <td>₹ {total}/-</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button className="proceed-button" onClick={proceedToPayment}>
          Proceed to Payment
        </button>
      </div>
      <Footer />
    </section>
  );
}

export default OrderConfirm;
