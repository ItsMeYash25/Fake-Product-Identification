import { useEffect, useState } from "react";
import productContract from "../abis/product.json";
import Web3 from "web3";

const Product = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [account, setAccount] = useState("");
  const [instance, setInstance] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/product/create_product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ account, name, price }),
    });
    const json = await res.json()
    if(json.status === true){
      alert("Product added successfully")
    }
  };

  useEffect(() => {
    async function connectWeb3Metamask() {
      const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:9545");
      const accounts = await web3.eth.getAccounts();
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = await productContract.networks[networkId];
      const instance = new web3.eth.Contract(
        productContract.abi,
        deployedNetwork.address
      );
      setAccount(accounts[0]);
      setInstance(instance);
    }
    connectWeb3Metamask();
  });

  return (
    <>
      <div className="container my-5">
        <div className="card shadow rounded-0">
          {instance && (
            <>
              <h2 className="card-title text-center my-2">Product</h2>
              <hr />
              <form className="card-body" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="Name">Product Name</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="Price">Product Price</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                  />
                </div>
                <button className="btn btn-md btn-outline-dark rounded-0">
                  Add Product
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
