import React from 'react'

export default function imageList(props) {
   const images = props.images.map(({description, urls, id}) => {
        return <img key={id} alt={description} src={urls.regular} />
    })
  return (
    <div>{images}</div>
  )
}
