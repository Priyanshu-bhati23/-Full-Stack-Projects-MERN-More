'use client'
import React, { useState } from 'react'

const Page = () => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [mainTask, setMainTask] = useState([])

  const submitHandler = e => {
    e.preventDefault()
    if (!title.trim() && !desc.trim()) return
    setMainTask([...mainTask, { title, desc }])
    setTitle('')
    setDesc('')
  }

  const deleteHandler = i => {
    setMainTask(tasks => tasks.filter((_, index) => index !== i))
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10">
      <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">
          TODO APP
        </h1>

        <form onSubmit={submitHandler} className="flex mb-6">
          <input
            type="text"
            placeholder="Task Title"
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            className="flex-1 px-4 py-2 border-t border-b border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={desc}
            onChange={e => setDesc(e.target.value)}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-r-lg transition"
          >
            Add
          </button>
        </form>

        <ul>
          {mainTask.length === 0 ? (
            <li className="text-center italic text-gray-500 dark:text-gray-400 py-4">
              No Task Available
            </li>
          ) : (
            mainTask.map((t, i) => (
              <li
                key={i}
                className="flex justify-between items-center p-3 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                <div className="space-y-1">
                  <p className="font-medium text-gray-800 dark:text-gray-100">
                    {t.title}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t.desc}
                  </p>
                </div>
                <button
                  onClick={() => deleteHandler(i)}
                  className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded transition"
                >
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  )
}

export default Page
