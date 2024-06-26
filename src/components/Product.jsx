import toast from "react-hot-toast";
import { Link } from "react-router-dom";



const Product = ({product, onDelete}) => {
    console.log(product)
    const {_id,title,price}= product;

    const handleDelete = async () =>{
      await fetch(`https://course-learning-server-riha.vercel.app/courses/${_id}`,{
          method: "DELETE",
        })
          .then((res) =>res.json())
          .then((data) =>{
              console.log(data)
              toast.success('product deleted')
              onDelete(_id)
          })
        }
    return (
        <div>
         <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Glasses" /></figure>
  <div className="card-body">
    <h2 className="card-title">Courses!</h2>
    <p>Title: {title}</p>
    <p>Price: {price}</p>
    <div className="card-actions justify-end">
      <button className="mr-2 bg-[#97CE68] p-2 rounded"><Link to={`/courses/${_id}`}>Detail</Link></button>
      <button className="mr-2 bg-[#1DABB8] p-2 rounded"><Link to={`/courses/edit-product/${_id}`}>Edit</Link></button>
      <button onClick={handleDelete} className="bg-[#E01931] p-2 rounded">Delete</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Product;