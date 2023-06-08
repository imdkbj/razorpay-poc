import { useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";
import { getPaymentStatus } from "./api";

const RzpCallBack = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const pgId = searchParams.get("razorpay_payment_link_id");
  const status = searchParams.get("razorpay_payment_link_status");

  const handleVerifyPayment = useCallback(
    async (props) => {
      const resp = await getPaymentStatus(props).catch((err) => {
        console.log(err);
      });
      const isSuccess = resp?.data?.status === "paid";
      if (!isSuccess) {
        return alert("Invalid txn id");
      }
      alert("Success");
      navigate("/success");
    },
    [navigate]
  );

  useEffect(() => {
    if (!pgId) {
      return alert("Invalid callback data");
    }
    if (status !== "paid") {
      return alert(`Payment : ${status}`);
    }
    handleVerifyPayment({ pgId });
  }, [status, pgId, handleVerifyPayment]);

  return (
    <div>
      <center>Processing...</center>
    </div>
  );
};

export default RzpCallBack;
