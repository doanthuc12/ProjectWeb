import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/product/Product.service";
import { RootState, useAppDispatch } from "../../../redux/Store";
import { fetchUser } from "../../../redux/user/User.service";
import InputCommon from "../../common/Input/InputCommon/InputCommon";

const Home: React.FC = () => {
  const { loading, error } = useSelector((state: RootState) => state.common);

  const { user } = useSelector((state: RootState) => state.user);

  const { products } = useSelector((state: RootState) => state.product);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUser("1"));
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    console.log(products, loading, error);
  }, [products]);

  return (
    <div className="App">
      name : {user?.name}
      {/* <form>
        <div className="mb-3">
          <InputCommon label="Username" />
        </div>
        <div className="mb-3">
          <InputCommon label="Password" isInputPassword={true} />
        </div>
        <div className="mb-3">
          <InputCommon label="Email" type="email" isInputPassword={false} />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form> */}
    </div>
  );
};

export default Home;
