import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { server } from "../server";

const SellerActivationPage = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState(false);

  // useEffect(() => {
  //   if (activation_token) {
  //     const activationEmail = async () => {
  //       try {
  //         const res = await axios.post(`${server}/shop/activation`, {
  //           activation_token,
  //         });
  //       } catch (error) {
  //         setError(true);
  //       }
  //     };
  //     activationEmail();
  //   }
  // }, []);

  useEffect(() => {
    if (activation_token) {
      const activationEmail = async () => {
        await axios
          .post(`${server}/shop/activation`, {
            activation_token,
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err, "Error");
            setError(true);
          });
        activationEmail();
      };
    }
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error ? (
        <p>Your token is expired!</p>
      ) : (
        <p>Your account has been created successfully!</p>
      )}
    </div>
  );
};

export default SellerActivationPage;
