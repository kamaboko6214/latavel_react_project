import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const [title, setTitle] = useState('')
    const [article, setArticle] = useState('')
    const navigate = useNavigate();

    const changeTitle = (e) => {
        setTitle(e.target.value)
    }

    const changeArticle = (e) => {
        setTitle(e.target.value)
    }

    const create = () => {
        const param = { title, article }
        axios.get("/sanctum/csrf-cookie").then((res) => {
            axios.post("/api/article/create", param)
                .then((res) => {
                    alert(res)
                    Navigate('/top');
                })
        })
    }

    return (
        <div class="bg-white-bg">
            <form>
                <div class="min-h-screen md:px-20 pt-6">
                    <div class=" bg-white rounded-md px-6 py-10 max-w-2xl mx-auto mb-4">
                        <h1 class="text-center text-4xl font-bold text-gray-500 mb-10">新規投稿</h1>
                        <div class="space-y-4">
                            <div>
                                <label for="title" class="text-lx">チャレンジ:</label>
                                <input name="title" type="text" placeholder="title" id="title" class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" onChange={changeTitle} />
                            </div>
                            <div>
                                <label for="description" class="block mb-2 text-lg font-serif">本文:</label>
                                <textarea name="article" id="description" cols="30" rows="15" placeholder="ここに入力.." class="w-full font-serif  p-4 text-gray-600 bg-gray-100 outline-none rounded-md" onChange={changeArticle}></textarea>
                            </div>
                            <button class=" px-6 py-4 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600" onClick={create}>ADD POST</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Create
