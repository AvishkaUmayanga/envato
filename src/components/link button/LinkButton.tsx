import React from 'react'
interface buttonProps{
    btnText: string;
    btnLogo: JSX.Element;
}
const LinkButton = (props: buttonProps) => {
  return (
    <button className=" -mt-3 flex bg-black text-white max-w-fit px-5 py-3 gap-2 items-center hover:scale-105 duration-200">
      <p className=" opacity-100 font-semibold text-sm capitalize">{props.btnText}</p>
      <span className=" bg-yellow text-black p-1">
        {props.btnLogo}
      </span>
    </button>
  )
}

export default LinkButton