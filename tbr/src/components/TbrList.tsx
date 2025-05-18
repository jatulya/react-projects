import  { FC } from 'react'
import { ListProp } from '../types/interfaces'
const TbrList: FC<ListProp> = ({books} : ListProp) => {
  return (
    <div>
      <ul>
        {books.map((book, index) => (
          <li key={index}>{book.title} by {book.author}</li>
        ))}
      </ul>
    </div>
  )
}

export default TbrList
