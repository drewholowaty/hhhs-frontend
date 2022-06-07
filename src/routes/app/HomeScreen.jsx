import React, { useState, useEffect } from 'react';

function HomeScreen() {
    const [data, setData] = useState({ hits: [] });
    useEffect(() => {
        async function fetchData() {
            // You can await here
            const response = await fetch('https://yb67zyc3bj.execute-api.us-east-2.amazonaws.com/prod');
            setData(response.data);
        }
        fetchData();
    
      }, []);
    console.log(data);
    return (
        <h1>hello home</h1>

    );
}
  
export default HomeScreen;