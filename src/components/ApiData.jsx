import { useState } from "react";
import { useEffect } from "react"

export default function ApiData() {
    const [fetchedData, setFetchedData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=12")
        .then(response=> {
            if(!response.ok){
                throw new Error("Network error");
            }
            return response.json()
        }).then(data=> {
            setFetchedData(data);
            setLoading(false);
        })
        .catch(err=>{
            setError(err);
            setLoading(false);
        })
    }, [])

    console.log(fetchedData.results)

    loading && <div>Loading...</div>;
    error && <div>{error.message}</div>

  return (
      <ul>
          {/* {fetchedData.results.map((item)=>{
              <li>{item.name}</li>
          })} */}
      </ul>
   
  )
}
