import { Circles } from 'react-loader-spinner';
import ProductItem from '../ProductItem';
import { useState, useEffect } from 'react';
import './index.css';

// Declare apiStatusConstants outside of the component
const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
};

const ProductList = () => {
  const [apiResponse, setApiResponse] = useState({
    status: apiStatusConstants.initial,
    data: null,
    errorMsg: null,
  });

  useEffect(() => {
    const url = 'https://api.furrl.in/vibeList?vibe=HomeHunts';
    const options = {
      method: 'GET',
      headers: {
        Authorization: 'Bearer 1d78bd3cecbd62fe8c76a5663813fecd720f79210bb84078325b5e8379e5679d',
      },
    };

    setApiResponse({
      status: apiStatusConstants.inProgress,
      data: null,
      errorMsg: null,
    });

    const getData = async () => {
      const response = await fetch(url, options);
      const responseData = await response.json();
      if (response.ok) {
        setApiResponse((prevResponse) => ({
          ...prevResponse,
          status: apiStatusConstants.success,
          data: responseData,
        }));
      } else {
        setApiResponse({
          status: apiStatusConstants.failure,
          data: null,
          errorMsg: responseData.message,
        });
      }
    };

    getData();
  }, []); // Empty dependency array

  const renderLoadingView = () => (
    <div className="load">
      <Circles color="#E90B0B" height="50" width="50" />
    </div>
  );

  const renderSuccessView = () => {
    const { data } = apiResponse;
    const formattedData = data.map((eachUser) => ({
      id: eachUser.id,
      name: eachUser.name,
      profileImgUrl: eachUser.profile_image_url,
      price: eachUser.price,
      description: eachUser.description,
    }));
    return <ProductItem projectDetails={formattedData} />;
  };

  const renderFailureView = () => {
    const { errorMsg } = apiResponse;
    return <h1 className="errorMsg">{errorMsg}</h1>;
  };

  const renderData = () => {
    const { status } = apiResponse;
    switch (status) {
      case apiStatusConstants.inProgress:
        return renderLoadingView();
      case apiStatusConstants.success:
        return renderSuccessView();
      case apiStatusConstants.failure:
        return renderFailureView();
      default:
        return null;
    }
  };

  return <div>{renderData()}</div>;
};

export default ProductList;
