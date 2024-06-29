import { Outlet } from "react-router-dom";
import Header from "./Header";

const Body: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Body;
