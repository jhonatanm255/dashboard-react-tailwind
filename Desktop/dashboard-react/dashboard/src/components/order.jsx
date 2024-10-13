import React from "react";
import RecentOrders from "./recentOrders";
import Remiders from "./remiders";

function Order() {
  return (
    <div className="lg:grid lg:grid-cols-2 gap-4">
      <RecentOrders />
      <Remiders />
    </div>
  );
}

export default Order;
