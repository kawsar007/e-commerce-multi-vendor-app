import React from 'react'
import { RxCross1 } from 'react-icons/rx';
import { IoBagHandleOutline } from "react-icons/io5";
import styles from '../../styles/styles';
import SingleCart from './SingleCart';
import { Link } from 'react-router-dom';

const CartComponent = ({ setOpenCart }) => {

    const cartData = [
        {
            name: "Iphone 14 pro max 356gb ssd 8gb ram",
            description: "test",
            price: 999,
        },
        {
            name: "Iphone 14 pro max 356gb ssd 8gb ram",
            description: "test",
            price: 569,
        },
        {
            name: "Iphone 14 pro max 356gb ssd 8gb ram",
            description: "test",
            price: 879,
        }
    ]
    return (
        <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
            <div className="fixed top-0 right-0 min-h-full w-[25%] bg-white flex flex-col justify-between shadow-sm">
                <div>
                    <div className="flex w-full justify-end pt-5 pr-5">
                        <RxCross1
                            size={25}
                            className="cursor-pointer"
                            onClick={() => setOpenCart(false)}
                        />
                    </div>
                    {/* Item Length */}
                    <div className={`${styles.noramlFlex} p-4`}>
                        <IoBagHandleOutline size={25} />
                        <h5 className="pl-2 text-[20px] font-[500]">
                            3 items
                        </h5>
                    </div>
                    {/* Single Items */}
                    <br />
                    <div className="w-full border-t">
                        {
                            cartData && cartData.map((item, index) => (
                                <SingleCart key={index} data={item} />
                            ))
                        }
                    </div>
                </div>
                <div className="px-5 mb-3">
                    <Link to="/checkout">
                        <div className={`h-[45px] flex items-center justify-center w-[100%] bg-[#e44343] rounded-[5px]`}>
                            <h1 className="text-[#fff] text-[18px] font-[600]">Checkout Now (USD$1090)</h1>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CartComponent;
