import React, { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import laptops, { laptop } from './data';

type bucketType = {
  item: laptop;
  quantity: number;
};
type eventHandler = {
  (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, item: laptop): void;
};
type ShopProps = {
  buckets: bucketType[];
  setBucketsOfParent: (buckets: bucketType[]) => void;
};

const ShopPage = ({ buckets, setBucketsOfParent }: ShopProps) => {
  //
  // pagination logic
  const [laptopPerPage] = useState<number>(6);
  const [page, setPage] = useState<number>(1);

  const totalLaptops: number = laptops.length;
  const pagesNumber: number = Math.ceil(totalLaptops / laptopPerPage);

  const indexOfFirstLaptop: number = (page - 1) * laptopPerPage;
  const indexOfLastLaptop: number = page * laptopPerPage;
  const laptopsOnPage: laptop[] = laptops.slice(
    indexOfFirstLaptop,
    indexOfLastLaptop
  );

  const paginate = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const pagesNumberArr: number[] = [];
  for (let i = 0; i < pagesNumber; i++) {
    pagesNumberArr.push(i + 1);
  }

  //
  // adding items logic
  const addItem: eventHandler = (e, item) => {
    const target = e.target as HTMLButtonElement;
    const parent = target.parentElement as HTMLElement;
    const input = parent.children[1] as HTMLInputElement;

    buckets.forEach((bucket, i) => {
      if (bucket.item.name === item.name) {
        const newQuantity = bucket.quantity + Number(input.value);
        const shallowCopy = [...buckets];
        shallowCopy.splice(i, 1);

        setBucketsOfParent([
          ...shallowCopy,
          {
            item: item,
            quantity: newQuantity,
          },
        ]);
      }
    });

    for (let i = 0; i < buckets.length; i++) {
      if (buckets[i].item === item) return;
    }

    setBucketsOfParent([
      ...buckets,
      {
        item: item,
        quantity: Number(input.value),
      },
    ]);
  };

  return (
    <>
      <div className="shopping-cart max-w-max mt-2 mx-4 p-1 sticky top-10 left-full text-blackLight scale-75 sm:scale-100 bg-[#ffffff80]">
        <Link to="/cart" className="flex items-center justify-center">
          <p>
            {buckets.reduce((prev: number, current: bucketType): number => {
              return prev + current.quantity;
            }, 0)}
          </p>
          <AiOutlineShoppingCart className="text-5xl" />
        </Link>
      </div>

      <div className="cards-container grid p-10 sm:p-20 space-y-14 bg-white">
        {laptopsOnPage.map(
          (laptop: laptop, i: number): ReactElement => (
            <div
              key={i}
              className="card flex flex-col justify-end items-center font-bold gap-2"
            >
              <div className="img-container h-full md:w-80 hover:scale-110 transition-transform">
                <img src={laptop.img} alt="laptop-img" className="min-w-[280px] max-w-[280px] sm:w-full" />
              </div>
              <div className="product-info space-y-1 text-center">
                <p>{laptop.name}</p>
                <p>${laptop.price}</p>
              </div>
              <div>
                <button
                  onClick={(e) => addItem(e, laptop)}
                  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-2 mr-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  add to cart
                </button>
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  defaultValue="1"
                  min="1"
                />
              </div>
            </div>
          )
        )}
      </div>

      <div className="pagination w-full flex justify-center items-center p-4">
        <ul className="pagination flex justify-end items-center ">
          {pagesNumberArr.reverse().map((pageNum) => (
            <li
              onClick={() => {
                paginate(pageNum);
              }}
              key={pageNum}
              className=" flex justify-center items-center page-item border-2 ml-1 hover:scale-95 hover:border-black  hover:text-black"
            >
              <Link to="/shop" className="page-link">
                {pageNum}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ShopPage;
