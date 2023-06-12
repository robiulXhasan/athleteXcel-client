import React from "react";
import SectionHeading from "../../Shared/SectionHeading";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  const location = useLocation();
  const data = location.state;

  return (
    <div>
      <Helmet>
        <title>Payment | AthleteXcel </title>
      </Helmet>
      <SectionHeading subHeading={"Payment"} heading={"Payment"} />
      <Elements stripe={stripePromise}>
        <CheckoutForm data={data} />
      </Elements>
    </div>
  );
};

export default Payment;
