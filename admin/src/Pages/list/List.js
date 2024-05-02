import React, { useEffect, useState } from "react";

export default function List() {
  const [data, setdata] = useState([]);
  const url = "http://localhost:3001";

  const getdata = async () => {
    const fetchdata = await fetch(`${url}/api/get`);
    const response = await fetchdata.json();

    setdata(response.data);
  };

  useEffect(() => {
    getdata();
  }, []);
  return (
    <div>
      <h1>i am List </h1>
      <div className="flex gap-10">
        <p>name</p>
        <p>category</p>
        <p>price</p>
        <p>description</p>
        <p>image</p>
        <div className="grid grid-cols-4">
          {data.map((datas) => (
            <div>
              <h1>{datas.name}</h1>
              <h1>{datas.price}</h1>
              <h1>{datas.description}</h1>
              <h1>{datas.category}</h1>
              <img
                className="h-[70px] w-[70px] rounded-full "
                src={`${url}/uploads/` + datas.image}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
