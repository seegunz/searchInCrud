import React, { useRef, useState } from 'react'

export default function App() {
  const input = useRef()
  const [list, setList] = useState([])
  const [query, setQuery] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setList([...list, input.current.value])
    input.current.value = ''
  }

  const filterList = list.filter(prev=>{
    return prev.toLowerCase().includes(query.toLocaleLowerCase())
  })

  return (
    <div>
      <h1>Search Box</h1>
      <input type="search" placeholder='search list' value={query} onChange={e=>setQuery(e.target.value)} />

      <br /><br />

      <form onSubmit={handleSubmit}>
        <input ref={input} />
        <button type="submit">submit</button>
      </form>

      <section>{filterList.map((items, i) => <p key={i}>{items}</p>)}</section>
    </div>
  )
}
