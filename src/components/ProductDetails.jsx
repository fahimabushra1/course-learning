import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const course = useLoaderData();
    console.log(course)
    const {_id,title,image,instructor,description,price} = course
    return (
        <div className="flex justify-center items-center my-16 p-4">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src= {image} alt="Courses" /></figure>
  <div className="card-body">
    <h3 className="card-title text-[#16a34a]">{title}</h3>
    <p className="text-[#475569]">ID No: {_id}</p>
    <p className="text-xl">Description:</p>
    <p className="text-[#16a34a]">{description}</p>
    <p className="text-xl">Instructor:</p>
    <p className="text-[#16a34a]">{instructor}</p>
    <p className="text-xl">Price:</p>
    <p className="text-[#16a34a]">{price}$</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary mt-4">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductDetails;