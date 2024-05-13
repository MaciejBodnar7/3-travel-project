import App from "./App.jsx"
import data from "./data.js"

// prettier-ignore
export default function AppData() {
  const postArr = data.map(item => {
    return (
    <App 
      key={item.id} 
      {...item} 
    /> 
   )
  })
  return (
    <main className="mt-16">
      {postArr}
    </main>
  )
}
