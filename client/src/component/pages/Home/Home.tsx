import React from "react";
import InputCommon from "../../common/InputCommon/InputCommon";

const Home: React.FC = () => {
  return (
    <div className="App">
      <form>
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
      </form>
    </div>
  );
};

export default Home;
