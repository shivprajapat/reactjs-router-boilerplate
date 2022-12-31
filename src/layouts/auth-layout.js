import React from "react";

const AuthLayout = ({ childComponent }) => {
  return (
    <div>
      <h1>AuthLayout</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima delectus
        voluptates obcaecati autem debitis ipsa quia aspernatur, asperiores
        similique illum aut explicabo ab vitae assumenda libero excepturi minus
        animi dignissimos.
      </p>
      <h2>{childComponent}</h2>
    </div>
  );
};

export default AuthLayout;
