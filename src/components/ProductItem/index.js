import "./index.css";

const ProductItem = (props) => {
  const { projectDetails } = props;
  const {name, projectId, imageURL, description, price } = projectDetails;
  return (
    <>
      <li className="product-item-container">
        <img
          className="product-item-image"
          src={imageURL}
          alt={`project-item${projectId}`}
        />
        <div className="product-item-details-container">
          <h1 className="product-item-title">{name}</h1>
          <p className="product-item-description">{description}</p>
          <p className="product-item-price">{price}</p>
        </div>
      </li>
    </>
  );
};

export default ProductItem;
