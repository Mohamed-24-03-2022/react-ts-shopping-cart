import { ReactElement } from 'react';
import { BsTrash } from 'react-icons/bs';
import { laptop } from './data';

type bucketType = {
  item: laptop;
  quantity: number;
};
type cartProps = {
  buckets: bucketType[];
  setBucketsOfParent: (buckets: bucketType[]) => void;
};
type QuantityChangeType = {
  (e: React.ChangeEvent<HTMLInputElement>, targetedBucket: bucketType): void;
};

const Cart = ({ buckets, setBucketsOfParent }: cartProps) => {
  const handleDelete = (laptop: laptop): void => {
    const filteredArray = buckets.filter((bucket) => bucket.item !== laptop);
    setBucketsOfParent(filteredArray);
  };

  const handleQuantityChange: QuantityChangeType = (e, targetedBucket) => {
    const input = e.target;
    const newQuantity: number = Number(input.value);
    const newBucket = {
      ...targetedBucket,
      quantity: newQuantity,
    };

    buckets.forEach((bucket, i) => {
      if (bucket.item.name === targetedBucket.item.name) {
        const shallowCopy = [...buckets];
        shallowCopy.splice(i, 1, newBucket);
        setBucketsOfParent([...shallowCopy]);
      }
    });
  };

  return (
    <div className="flex flex-col p-20 space-y-20 items-center min-h-screen">
      <div className="cart-heading text-6xl font-bold self-start">
        <h1>Cart</h1>
      </div>

      {/*
      


      
       */}

      <table className="GeneratedTable hidden sm:table ">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {buckets.map(
            (bucket: bucketType, i: number): ReactElement => (
              <tr key={i}>
                <td className="w-32">
                  <td>
                    <img
                      src={bucket.item.img}
                      alt="laptop-img"
                      className="laptop-img"
                    />
                  </td>
                  <td>
                    <p className="w-32">{bucket.item.name}</p>
                  </td>
                </td>

                <td className="price">
                  <p>${bucket.item.price}</p>
                </td>
                <td className="quantity">
                  <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    value={bucket.quantity || 1}
                    min="1"
                    onChange={(e) => handleQuantityChange(e, bucket)}
                  />
                </td>
                <td className="subtotal">
                  <p>${bucket.item.price * bucket.quantity}</p>
                </td>
                <td className="remove">
                  <button onClick={() => handleDelete(bucket.item)}>
                    <BsTrash className="text-xl mx-auto" />
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>

      <div className='block sm:hidden'>
        {buckets.map(
          (bucket: bucketType, i: number): ReactElement => (
            <div
              key={i}
              className="flex flex-col justify-center items-start space-y-8"
            >
              <div className="product w-[200px] flex justify-center items-center">
                <div>
                  <p className="font-bold w-[80px]"> Product: </p>
                </div>
                <div className="text-center">
                  <img
                    src={bucket.item.img}
                    alt="laptop-img"
                    className="laptop-img p-2"
                  />
                  <p>{bucket.item.name}</p>
                </div>
              </div>
              <div className="price flex">
                <p className="font-bold w-[80px]">Price:</p>
                <p> ${bucket.item.price}</p>
              </div>
              <div className="quantity flex items-center">
                <p className="font-bold w-[80px]">Quantity:</p>
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  value={bucket.quantity || 1}
                  min="1"
                  onChange={(e) => handleQuantityChange(e, bucket)}
                />
              </div>
              <div className="subtotal flex">
                <p className="font-bold w-[80px]">Subtotal:</p>
                <p>$ {bucket.item.price * bucket.quantity}</p>
              </div>
              <div className="remove self-center">
                <button onClick={() => handleDelete(bucket.item)}>
                  <BsTrash className="text-xl mx-auto" />
                </button>
              </div>
            </div>
          )
        )}
      </div>

      {/*





      
       */}

      <div className="checkout md:w-2/4 flex flex-col items-center space-y-4 p-4 border-solid border-2 rounded-sm">
        <p className="font-bold">Cart Total</p>
        <div className="total flex space-x-4">
          <p>Total</p>
          <p>
            $
            {buckets.reduce(
              (prev: number, current: bucketType): number =>
                prev + current.quantity * current.item.price,
              0
            )}
          </p>
        </div>
        <hr className="border-solid bg-blackLight w-2/4" />
        <button className="min-w-max text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
