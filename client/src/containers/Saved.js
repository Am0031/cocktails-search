import React from "react";
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

const OrderHistory = () => {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <div className="container my-1">
        <Link to="/">← Back to Browse</Link>

        {user ? (
          <>
            <h2>
              Saved Cocktails for {user.firstName} {user.lastName}
            </h2>
            <p>Some data to map here to display all saved cocktails</p>
          </>
        ) : null}
      </div>
    </>
  );
};

export default OrderHistory;
