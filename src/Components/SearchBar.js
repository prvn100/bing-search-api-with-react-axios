import { React, useState } from "react";
import axios from 'axios';
// import TextField from "@mui/material/TextField";
import "../App.css";

function BingSearch ()  {
    const [query, setQuery] = useState("");
    const [results,setResults] = useState([]);

    const search = async () =>
    {
        try
        {
            const response = await axios.get('https://api.serphouse.com/serp/live?q=${query}',{
                headers:
                {
                    "accept": "application/json",
                    "content-type": "application/json",
                    "authorization": "Bearer zaplyHg9Ip9wqBVsPVXEd88IhIXmWSKCeioRPCq5RnNWj3BCBAWZiRnhF77t" // my bing api key
                    }
                });
            setResults(response.data.results.results.organic);
        }
        catch(error)
        {
            console.error(error);
        }
    };


  return (
    <div className="main">
      <h1>Bing Search API with React</h1>
      <div className="search">
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={search}>Search</button>

        <ul>
            {results.map((result,index) => (
                
                <li key={index}>
                    <a href={result.link} target="_blank" rel="noreferrer">{result.title}</a>
                    <p>Site:{result.site_title}</p> 
                    <p>Position:{result.position}</p> 
                    <p>Snippet extension:{result.snippet_extension}</p>                     
                </li>
            ))}
        </ul>
    </div>
        {/* <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        /> */}
     
      {/* <SearchResults /> */}
    </div>
  );
}

export default BingSearch;