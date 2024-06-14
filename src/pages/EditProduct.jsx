import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const EditProduct = () => {
    const course = useLoaderData();
 const{_id} = course;
  const handleSubmit= (e)=>{
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const instructor = form.instructor.value;
    const price = form.price.value;
    const description = form.description.value;
    const image = form.image.value;
    console.log(title,instructor,price,description,image);
    
const data = {title,instructor,price,description,image}

    fetch(`https://course-learning-server-riha.vercel.app/courses/${_id}`,{
      method:"PATCH",
      headers:{
        "Content-type":"application/json",
      },
      body: JSON.stringify(data)
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
      toast.success('data added successfully');
      form.reset()
    })
  }

    return (
        <div>
            <h1 className="text-center text-5xl font-bold py-4">Add Product</h1>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content">
  <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  <form onSubmit={handleSubmit} className="card-body">
       <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input type="text" name="title" placeholder="title" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Instructor</span>
          </label>
          <input type="text" name="instructor" placeholder="instructor" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input type="text" name="description" placeholder="description" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="number" name="price" placeholder="price" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="text" name="image" placeholder="image" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Update</button>
        </div>
      </form>
      </div>
  </div>
</div>
        </div>
    );
};

export default EditProduct;