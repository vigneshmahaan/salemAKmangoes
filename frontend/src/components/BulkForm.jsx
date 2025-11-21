import { useState } from "react";
import "../componentStyles/BulkForm.css";

export default function BulkForm() {
  const [result, setResult] = useState("");
const [quantity, setQuantity] = useState("");

const onSubmit = async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  // REQUIRED for Web3Forms
  formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (data.success) {
    setResult("Success!");
    event.target.reset();  // CLEAR FORM
    setQuantity(""); 
          // Clear quantity state
  } else {
    setResult("Error: " + data.message);
  }
};


  return (
    <form className="bulk-form" onSubmit={onSubmit}>
      <h2>Bulk Order Form</h2>
      <input type="hidden" name="subject" value="New Bulk Order Request" />
      <label>Name</label>
      <input type="text" name="name" placeholder="Full Name" required />
      <label id="bulk-section">Email</label>
      <input type="email" name="email" placeholder="Email Address" required />
      <label>Mobile.no</label>
      <input type="text" name="mobile" placeholder="Mobile Number" required />
      <label>Address</label>
      <textarea name="address" placeholder="Full Address" required />
      <label>Quantity in kg</label>
      <input
        type="number"
        name="quantity"
        placeholder="Quantity in kg"
        value={quantity}
        kg
        onChange={(e) => setQuantity(e.target.value)}
        required
        min="1"
      />
      <button type="submit" disabled={quantity <= 20}>
        Submit
      </button>


      {quantity <= 20 && quantity !== "" && (
        <p className="warning-text">Minimum 21 kg required for bulk booking</p>
      )}

      <p className="result">{result}</p>
    </form>
  );
}
