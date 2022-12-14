import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
// import { useRouter } from 'next/router';
import { useStateContext } from "../context/stateContext";
import { runFireWork } from "../lib/utils";
const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  // const [order, setOrder] = useState(null);
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireWork();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for you order!</h2>
        <p className="email-msg">Check your email inbox for the receipt.</p>
        <p className="description">
          If you have any question please email us,
          <a href="mailto:abdullahalhilfi21@gmail.com" className="email">
            EMAIL
          </a>
        </p>
        <Link href="/">
          <button className="btn" width="300px">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
