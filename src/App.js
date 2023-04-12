import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';




const App = () => {
  const [data, setData] = useState([])
  const fetchData = () => {
    axios('https://fakestoreapi.com/products').then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        setData(res.data)
      }
    })
  }
  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div className='row  container is-widescreen'>
      {
        data.map((item, index) => {
          return (
            <div key={index} className='col-4' style={{ marginTop: '120px' }}>
              <div style={{ padding: '20px' }} >
                <h6>Title {item.title}</h6>
                <div style={{  boxSizing: 'border-box' }}>
                  <img src={item.image} style={{
                    width: '80%', height:'120px'}} />
                </div>
              </div>
              <div>
                <p>{item.description}</p>
              </div>
            </div>
          )
        })
      }


    </div>
  )
}
export default App; // u are making the App.js function public....