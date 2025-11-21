import React from 'react';
import '../componentStyles/NoProducts.css'
import { Loader2 } from 'lucide-react';
import { Container } from '@mui/material';

function NoProducts() {
  return (
    <>
    
    <Container>
    <div className="no-product-container">
  <div className="fade-in">
    <h2 className="no-product-title">No Product Available</h2>
  </div>

  <div className="pulse-loader">
    <Loader2 className="loader-icon" />
    <span>We're restocking shortly</span>
  </div>

  <p className="no-product-desc">
    Please check back later or explore our other product categories.
  </p>
</div>
</Container>
<br/><br/>
</>
  )
}

export default NoProducts
