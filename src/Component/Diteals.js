import React, { useEffect, useState, useContext } from "react";
import Sidebar from "./Sidebar";
// Axios
import axios from "axios";
// react router dom
import { useParams } from "react-router-dom";
// context
import { CartContext } from "../context/ContextCart";
// function
import { quntityCounter } from "../functions/QuntityCounter";
import { isInProduct } from "../functions/isInProduct";

const Diteals = () => {
  const params = useParams();
  const id = params.id - 1;

  const [productD, setProductD] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      const result = await axios.get(
        `https://react-api-23b25-default-rtdb.firebaseio.com/-N4wt8S-bN89-EtqpKyQ/phone/${id}/.json`
      );
      console.log(result);
      setProductD(result.data);
    };

    getApi();
  }, []);

  const datas = [
    {
      title: "Review",
      dis: productD.Check,
      id: 1,
    },
    {
      title: "Designing",
      dis: productD.designing,
      id: 2,
    },
    {
      title: "Battery",
      dis: productD.battery,
      id: 3,
    },
    {
      title: "Camera",
      dis: productD.camera,
      id: 4,
    },
  ];

  const [click, setClick] = useState(false);

  const toggle = (index) => {
    if (click === index) {
      return setClick(null);
    }

    setClick(index);
  };

  const { state, dispatch } = useContext(CartContext);

  return (
    <>
      {productD.length !== 0 ? (
        <div>
          <div className="py-2 px-5 md:px-8 w-full flex flex-col gap-y-4 bg-white rounded-lg md:mb-5 pb-5">
            <div className="w-full flex flex-col md:flex md:flex-row items-center justify-center lg:bg-gray-100 mt-8 rounded-lg">
              <div className="w-80 md:h-[500px]  flex items-center justify-center">
                <img
                  className="mr-0 md:mr-20"
                  src={productD.image}
                  alt="product"
                />
              </div>
              <div className="w-80 md:h-[500px]  flex flex-col items-center md:items-start justify-center">
                <div className="flex flex-col">
                  <span className="font-medium text-slate-800 text-[19px] mid:text-xl">
                    {productD.title}
                  </span>
                  <span className="text-gray-300 ">{productD.brand}</span>
                </div>
                <div className="flex mt-10 items-center justify-center">
                  <span>Color Selection :</span>
                </div>
                <div className="mt-10 flex flex-col md:items-start items-center justify-center">
                  <span className="text-sm font-normal">Product Features</span>
                  <diV className="flex font-light text-slate-800 text-xs mt-2">
                    <span className="w-1 h-1 rounded-full bg-orange-600 mr-1 mt-1"></span>
                    Internal memory:
                  </diV>
                  <span className="font-light text-sm md:ml-2 mt-1">
                    {productD.memory}
                  </span>
                  <diV className="flex font-light text-xs mt-2">
                    <span className="w-1 h-1 rounded-full bg-orange-600 mr-1 mt-1"></span>
                    Screen Size:
                  </diV>
                  <span className="font-light text-sm md:ml-2 mt-1">
                    {productD.size}
                  </span>
                  <diV className="flex font-light text-xs mt-2">
                    <span className="w-1 h-1 rounded-full bg-orange-600 mr-1 mt-1"></span>
                    Networks:
                  </diV>
                  <span className="font-light text-sm md:ml-2 mt-1">
                    {productD.network}
                  </span>
                </div>
              </div>
              <div className="w-80 h-[500px] flex items-center px-5 md:px-0 ">
                <div className="w-full h-[360px] bg-gray-200 rounded-lg p-4 relative">
                  <div className="flex flex-col items-center justify-center mt-5">
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 stroke-slate-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                      <span className="block font-normal text-sm ml-2">
                        Seller
                      </span>
                    </div>
                    <span className="text-sm font-light ml-1 mt-1">
                      {" "}
                      {productD.seller}
                    </span>
                  </div>

                  <div className="flex flex-col items-center justify-center mt-5">
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 stroke-slate-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
                        />
                      </svg>
                      <span className="block font-normal text-sm ml-2">
                        Warranty
                      </span>
                    </div>
                    <span className="text-sm font-light ml-1 mt-1">
                      {productD.warranty}
                    </span>
                  </div>

                  <div className="flex flex-col items-center justify-center mt-5">
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 stroke-slate-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                        />
                      </svg>
                      <span className="block font-normal text-sm ml-2">
                        Posted by
                      </span>
                    </div>
                    <span className="text-sm font-light ml-1 mt-1">
                      {productD.send}
                    </span>
                  </div>

                  <div className="flex flex-col items-center justify-center w-full mt-10">
                    <span className="text-3xl text-orange-700 ml-2">
                      €{productD.price}
                    </span>
                    <div className="flex flex-row items-center justify-center w-60 h-10 mt-4">
                      {quntityCounter(state, productD.id) > 1 && (
                        <button
                          onClick={() =>
                            dispatch({ type: "DOWN", payload: productD })
                          }
                          className="bg-orange-400 rounded-lg w-24 h-10 text-orange-50 flex items-center justify-center mr-4"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                            />
                          </svg>
                        </button>
                      )}
                      {quntityCounter(state, productD.id) === 1 && (
                        <button
                          onClick={() =>
                            dispatch({ type: "REMOVE", payload: productD })
                          }
                          className="bg-orange-400 rounded-lg w-24 h-10 text-orange-50 flex items-center justify-center mr-4"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </button>
                      )}
                      {
                        <span className="text-slate-800 font-light">
                          {quntityCounter(state, productD.id)}
                        </span>
                      }
                      {isInProduct(state, productD.id) ? (
                        <button
                          onClick={() =>
                            dispatch({ type: "UP", payload: productD })
                          }
                          className="bg-orange-400 rounded-lg w-24 h-10 text-orange-50 flex items-center justify-center ml-4"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
                            />
                          </svg>
                        </button>
                      ) : (
                        <button
                          onClick={() =>
                            dispatch({ type: "ADD", payload: productD })
                          }
                          className="bg-orange-400 rounded-lg w-60 h-10 text-orange-50 flex items-center justify-center transition-all duration-500 "
                        >
                          Add to Cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {datas.map((data, index) => (
                <div
                  key={data.id}
                  className=" mb-10 mt-10 w-full flex flex-col justify-center md:px-20 py-5 "
                >
                  <span className="text-3xl font-medium">{data.title}</span>
                  <div
                    className={
                      click === index
                        ? "mt-8 text-lg font-light overflow-hidden text-ellipsis whitespace-normal"
                        : "mt-8 text-lg font-light overflow-hidden text-ellipsis whitespace-nowrap"
                    }
                  >
                    {data.dis}
                  </div>
                  <button
                    onClick={() => toggle(index)}
                    className="text-orange-500 flex items-center justify-start"
                  >
                    {click === index ? "... Fewer" : "more ..."}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center h-[80vh] relative top-[290px]">
          <svg
            role="status"
            class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-300 fill-orange-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      )}
    </>
  );
};

export default Diteals;
