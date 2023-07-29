import React from 'react'

const Create = () => {
    return (
        <div class="bg-white-bg">
            <form>
                <div class="min-h-screen md:px-20 pt-6">
                    <div class=" bg-white rounded-md px-6 py-10 max-w-2xl mx-auto">
                        <h1 class="text-center text-4xl font-bold text-gray-500 mb-10">新規投稿</h1>
                        <div class="space-y-4">
                            <div>
                                <label for="title" class="text-lx">チャレンジ:</label>
                                <input type="text" placeholder="title" id="title" class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
                            </div>
                            <div>
                                <label for="description" class="block mb-2 text-lg font-serif">本文:</label>
                                <textarea id="description" cols="30" rows="15" placeholder="ここに入力.." class="w-full font-serif  p-4 text-gray-600 bg-gray-100 outline-none rounded-md"></textarea>
                            </div>
                            {/* Open the modal using ID.showModal() method */}
                            <button className="btn" onClick={() => window.my_modal_5.showModal()}>open modal</button>
                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                <form method="dialog" className="modal-box">
                                    <h3 className="font-bold text-lg">Hello!</h3>
                                    <p className="py-4">Press ESC key or click the button below to close</p>
                                    <div className="modal-action">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </div>
                                </form>
                            </dialog>
                            <button class=" px-6 py-4 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  ">ADD POST</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Create
