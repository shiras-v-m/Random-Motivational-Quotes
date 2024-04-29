import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
function App() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    getQuote()
  }, [])


  const nextQuote = () => {
    setLoading(true)
    getQuote()
  }
  const getQuote = () => {
    axios.get("https://api.adviceslip.com/advice").then((response) => {
      const { advice } = response.data.slip
      console.log(advice);
      setQuote(advice)
      setLoading(false)
    })
      .catch((error) => {
        setLoading(false)
        console.log(error);
      })
  }
  return (
    <>
      <div className="app">
        <div className="card">
          {
            loading && <div className="loading"></div>}
          <div className="quoteContainer">
            {!loading && <h2>{quote}</h2>}
          </div>

          <button disabled={loading} onClick={nextQuote} className={` ${loading ? 'disableBtn' : 'button'}`}>
            {
              loading && <div className="loading"></div>}
            {!loading && <span>Motivate me🔥</span>}
          </button>
        </div>
      </div>
      <div className="copyright">
        <span>❤️ shiras VM</span>
      </div>
    </>
  )
}

export default App
