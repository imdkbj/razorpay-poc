import { useState } from "react";
import { initiateTxn } from "./api";

const App = () => {
  const [loading, setLoading] = useState(false);
  const handlePay = (packageId) => {
    return async () => {
      setLoading(true);
      const resp = await initiateTxn({ packageId }).catch((err) => {
        console.log(err);
      });
      setLoading(false);
      const paymentURL = resp?.data?.paymentURL;

      if (!paymentURL) {
        return alert("Something went wrong");
      }

      window.location.href = paymentURL;
    };
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 100,
          gap: 20,
        }}
      >
        <button
          style={{ height: 40, width: 100 }}
          onClick={handlePay(1)}
          disabled={loading}
        >
          Pay 100
        </button>
        <button
          style={{ height: 40, width: 100 }}
          onClick={handlePay(2)}
          disabled={loading}
        >
          Pay 200
        </button>
      </div>
      <center>{loading && "Loading..."}</center>
    </div>
  );
};

export default App;
