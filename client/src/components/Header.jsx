import React, { useState } from "react";
import Modal from "./Modal";

function Header() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className="flex h-24 bg-black items-center  justify-between">
        <div className="text-white text-xl ml-28">
          <h1 className="font-medium"> WELCOME TO BLOGS</h1>
        </div>
        <div className="text-white text-sm mr-28 mb-8">
          <button
            className="font-medium hover:bg-slate-700 p-4 px-5"
            type="button"
            onClick={() => setModal(true)}
          >
            ADD NEW BLOG
          </button>
        </div>
      </div>
      {modal && <Modal setModal={setModal} />}
    </>
  );
}

export default Header;
