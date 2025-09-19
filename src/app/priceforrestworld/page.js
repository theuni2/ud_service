"use client";

import React from "react";
import Nav from "../component/nav";
import Footer from "../component/footer";
import PricingRestWorld from "../component/worldpricing";


export default function Page() {
  return (
<div>
    <Nav/>
    <PricingRestWorld/>
    <Footer/>
</div>
  );
}