import React, { useState, useEffect } from "react";

const Dummy = () => {
  const [Data, setData] = useState({ id: 0, products: [] });

  const getData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      //   console.log(res);
      const realData = await res.json(); //converting res into json and adding the data into realData variable i use above.
      //   console.log(realData);
      setData(realData); //passing data into setData so it will be added into Data.
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []); //this empty array will run getData function only once we will reload the page or land on it.

  return (
    <>
      <section className="px-4 md:px-10 lg:px-20 pt-20 bg-gray-100 py-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-20">
        {Data.products.map((product, index) => (
          <div
            key={index}
            class="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border"
          >
            <div class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
              <img
                src={product.thumbnail}
                alt="img-blur-shadow"
                layout="fill"
              />
            </div>
            <div class="p-6">
              <h2 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {product.title}
              </h2>
              <div className="flex items-center justify-between">
                <h3 class="block text-xl font-bold antialiased leading-relaxed text-blue-gray-900">
                  ${product.price}
                </h3>
                <span class="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-1 rounded">
                  Rating {product.rating}
                </span>
                <span class="bg-green-100 text-green-800 text-sm font-semibold mr-2 px-2.5 py-1 rounded">
                  In Stock {product.stock}
                </span>
              </div>
              <div className="flex items-center justify-between pt-4">
                <span class="text-lg font-semibold text-gray-700">Brand</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {product.brand}
                </span>
              </div>
              <p class="pt-2 block text-lg antialiased font-medium leading-relaxed text-inherit h-28">
                {product.description}
              </p>
            </div>
            {/* <div class="p-6 pt-0">
              <button
                class="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
              >
                Read More
              </button>
            </div> */}
          </div>
        ))}
      </section>
    </>
  );
};

export default Dummy;
