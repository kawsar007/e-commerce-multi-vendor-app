import React, { useState } from 'react'
import { BsCartPlus } from 'react-icons/bs';
import { RxCross1 } from 'react-icons/rx';

const SingleItem = ({ data }) => {
    const [value, setValue] = useState(1);
    const totalPrice = data.price * value;
    return (
        <div className="border-b p-4">
            <div className="w-full flex items-center">
                <RxCross1 className="cursor-pointer" />
                <img src="https://cdn.vox-cdn.com/thumbor/cPeVH-m_b9pScRXzpCBW-nAHSfw=/0x0:2032x1355/1400x1400/filters:focal(1016x678:1017x679)/cdn.vox-cdn.com/uploads/chorus_asset/file/22863258/akrales_210917_4760_0175.jpg" alt=""
                    className="w-[70px] h-[70px] rounded-md ml-2"
                />


                <div className="pl-[5px]">
                    <h1>{data.name}</h1>
                    <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
                        US${totalPrice}
                    </h4>
                </div>
                <div>
                    <BsCartPlus size={20} className="cursor-pointer" title="Add to cart" />
                </div>
            </div>
        </div>
    )
}

export default SingleItem
