import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from "../components/Meta";
import {Link} from "react-router-dom";
import { MdDelete } from "react-icons/md";



function cart() {
  return (
  <>
  
  <Meta   title={"Cart"} />

<BreadCrumb title="Cart"/>


<section className="cart-wrapper home-wrapper-2 py-5">

<div className='container-xxl'>

<div  className='row'>

<div className='col-12'>


<div className='cart-header   d-flex    justify-content-between align-items-center'>


<h4   className='cart-col-1'>product</h4>

<h4  className='cart-col-2'>price</h4>

<h4  className='cart-col-3'>quantity</h4>

<h4   className='cart-col-4'>Total</h4>



</div>




<div className='cart-data   d-flex py-3  mb-2   justify-content-between align-items-center'>


<div className='cart-col-1  gap-15 d-flex align-items-center'>

<div>
<img   src='images/camera.jpg' className='img-fluid'  alt='product image'/>


</div>

<div  className='w-75'>

<p>Dslr 500</p>


<p>size:1300</p>

<p  >color:black</p>



</div>





</div>

<div  className='cart-col-2'>

<h5 className='price'>$100</h5>



</div>

<div  className='cart-col-3  d-flex align-items-center gap-15'>



<div>
<input type='number' min={1} max={10}   className='form-control'  name=" "   id=""/>
</div>

<div >

<MdDelete   className='text-danger fs-3'/>

</div>



</div>

<div className='cart-col-4'>

<h5 className='price'>$100</h5></div>



</div>







</div>






<div className='col-12  py-2  mt-4'>

<div className='d-flex justify-content-between align-items-baseline'>
<Link  to="/product" className='button'>continue to shopping</Link>

<div  className='d-flex flex-column  align-items-end'>
<h5>  Subvtotal :$1000 </h5>
<p>Taxes and Shipping calculated at checkout </p>



<Link  to="/checkout" className='button'>

 checkout
</Link>
</div>

</div>

</div>








</div>

</div>

</section>



  
  </>
  )
}

export default cart