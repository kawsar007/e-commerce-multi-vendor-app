import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const SellerProtectedRoute = ({ children }) => {
  const { loading, isSeller } = useSelector((state) => state.seller);
  if (loading === false) {
    if (!isSeller) {
      return <Navigate to={`/`} replace />;
    }
  }
  return children;
};

export default SellerProtectedRoute;
