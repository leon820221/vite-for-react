import { useState, useEffect, useReducer, useMemo, useContext, use } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
import Students from './components/Students'

function App() {
  const [stu, setStu] = useState([])
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setErr('')
        const res = await fetch('http://localhost:3000')
        if (res.status === 200) {
          const stuData = await res.json()
          setStu(stuData)
        } else {
          throw new Error('123')
        }
      }
      catch (e) {
        setErr(e.message)
      }
      finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="container my-3">
      {!loading && !err && <Students stu={stu} />}
      {!loading && err && <p>{err}</p>}
      {loading && <p>数据正在加载中...</p>}
    </div>
  )
}

export default App
