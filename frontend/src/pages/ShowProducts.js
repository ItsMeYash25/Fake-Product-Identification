import { useEffect, useState } from "react";
import { useQuery } from "../useQuery";
import { Link } from "react-router-dom";

const ShowProducts = () => {
  const [data, setData] = useState([{}]);
  const [address, setAccount] = useState([{}]);
  const [id, setId] = useState("");
  const query = useQuery();

  useEffect(() => {
    function walletDetail() {
      if (window.ethereum) {
        window.ethereum
          .request({ method: "eth_requestAccounts" })
          .then((result) => {
            accountHandler(result[0]);
          });
      }
    }
    function accountHandler(newAccount) {
      setAccount(newAccount);
    }
    walletDetail();
    // console.log(address)
    fetch("/api/product/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setData(data));
    setId(query.get("id"));
  }, [id, query]);

  return (
    <>
      <div className="container my-5 table-responsive">
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Verified</th>
              <th>Make Product Fake</th>
              <th>Make Product True</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {typeof data.res === "undefined" ? (
              <tr>Data is Loading Please Wait</tr>
            ) : (
              data.res.map((product) => (
                <tr key={product[0]}>
                  <td>{product[0]}</td>
                  <td>{product[1]}</td>
                  <td>{product[2]}</td>
                  <td>{product[4] === true ? "True" : "False"}</td>
                  <td>
                    <Link
                      to={"/fake?id=" + product[0] + "&owner=" + product[3]}
                    >
                      Make Fake
                    </Link>
                  </td>
                  <td>
                    <Link
                      to={"/real?id=" + product[0] + "&owner=" + product[3]}
                    >
                      Make Real
                    </Link>
                  </td>
                  <td>
                    <Link to={"/show_product?id=" + product[0]}>
                      Show Product
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ShowProducts;
