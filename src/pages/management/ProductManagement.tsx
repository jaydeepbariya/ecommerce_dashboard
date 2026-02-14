import { ChangeEvent, FormEvent, useState } from "react";
import AdminSidebar from "../../component/AdminSidebar";

const img =
  "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/379437/12/sv01/fnd/IND/fmt/png/Skyrocket-Lite-Unisex-Running-Shoes";

const ProductManagement = () => {
  const [name, setName] = useState<string>("Puma Shoes");
  const [price, setPrice] = useState<number>(2000);
  const [stock, setStock] = useState<number>(0);
  const [photo, setPhoto] = useState<string>(img);

  const [ nameUpdate ] = useState<string>(name); // eslint-disable-line @typescript-eslint/no-unused-vars
  const [ priceUpdate ] = useState<number>(price); // eslint-disable-line @typescript-eslint/no-unused-vars
  const [ stockUpdate ] = useState<number>(stock); // eslint-disable-line @typescript-eslint/no-unused-vars
  const [ photoUpdate ] = useState<string>(photo); // eslint-disable-line @typescript-eslint/no-unused-vars
  
  const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];

    const reader: FileReader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") setPhoto(reader.result);
      };
    }
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName(nameUpdate);
    setPrice(priceUpdate);
    setStock(stockUpdate);
    setPhoto(photoUpdate);
  }

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="product-management">
        <section>
          <strong>ID - sgdfhgfj</strong>
          <img src={photo} alt="product" />
          <p>{name}</p>
          {stock > 0 ? (
            <span className="green">{stock} Available</span>
          ) : (
            <span className="red">Not Available</span>
          )}
          <h3>${price}</h3>
        </section>

        <article>
          <form onSubmit={(e)=>submitHandler(e)}>
            <h2>Manage</h2>
            <div>
              <label htmlFor="name">Name</label>
              <input
                required
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input
                required
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>
            <div>
              <label htmlFor="stock">Stock</label>
              <input
                required
                type="number"
                placeholder="Stock"
                value={stock}
                onChange={(e) => setStock(Number(e.target.value))}
              />
            </div>
            <div>
              <label htmlFor="photo">Photo</label>
              <input required type="file" onChange={changeImageHandler} />
              {photo && (
                <img
                  src={photo}
                  alt="Product Image"
                  width={100}
                  height={100}
                  style={{ margin: "auto" }}
                />
              )}
            </div>
            <button type="submit">Create</button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default ProductManagement;
