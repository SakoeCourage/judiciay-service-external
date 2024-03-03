import React from 'react'
import QueryItem, { IQueryProp } from './queryitem'

export const Queries: IQueryProp[] = [
  {
    title: "Application Query",
    content: "New random Query to respond to",
    createdAt: "2024/04/13"
  },
  {
    title: "Application Query",
    content: "Another random Query to respond to",
    createdAt: "2024/04/13"
  },
  {
    title: "Application Query",
    content: "Another random Query to respond to",
    createdAt: "2024/04/13"
  },
  {
    title: "Application Query",
    content: "Another random Query to respond to",
    createdAt: "2024/04/13"
  },
  {
    title: "Application Query",
    content: "Another random Query to respond to",
    createdAt: "2024/04/13"
  },
  {
    title: "Application Query",
    content: "Another random Query to respond to",
    createdAt: "2024/04/13"
  },
  {
    title: "Application Query",
    content: "Another random Query to respond to",
    createdAt: "2024/04/13"
  },
  {
    title: "Application Query",
    content: "Another random Query to respond to",
    createdAt: "2024/04/13"
  },
  {
    title: "Application Query",
    content: "Another random Query to respond to",
    createdAt: "2024/04/13"
  },
  {
    title: "Application Query",
    content: "Another random Query to respond to",
    createdAt: "2024/04/13"
  },
  {
    title: "Application Query",
    content: "Another random Query to respond to",
    createdAt: "2024/04/13"
  }
]

function Querylist({queries}:{queries: IQueryProp[]}) {
  return (
    <div className='flex flex-col gap-3 query-list'>
      {queries.map((query, i) => <QueryItem
        {...query}
        key={i} />)}
    </div>
  )
}

export default Querylist