import { Outlet } from "react-router-dom";

const SharedProductLayout = () => {
  return (
    <section className="section">
      <h2>Products</h2>
      <Outlet />
    </section>
  );
};

export default SharedProductLayout;
