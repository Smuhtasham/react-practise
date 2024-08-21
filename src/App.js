import React from 'react'
import { useGetAllPostQuery } from './Services/Post'

const App = () => {

const apiData = useGetAllPostQuery();
console.log(apiData)
if(apiData.isLoading) return <div>Loading....</div>
if(apiData.isError) return <div>Error Occured......</div>
  return (
    <>
    {apiData.data.results.map((data)=>
    <div>{data.name.first}</div>
    )}
    </>
  )
}

export default App