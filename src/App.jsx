import "./App.css"

export default function App(props) {
  return (
    <>
      <div className="card flex gap-6 mx-auto my-10 pb-10 text-gray-900 items-center">
        <div className="img-main w-full h-full rounded-xl bg-slate-200">
          <img className="img-main w-full h-full rounded-xl" src={props.imageUrl} alt="" />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center h-10">
            <img className="w-fit h-6" src="../public/pin.svg" alt="" />
            <p className="location text-lg tracking-widest ml-2">{props.location}</p>
            <a href={props.googleMapsUrl}>
              <p className="google underline ml-6">View on Google Maps</p>
            </a>
          </div>
          <h2 className="text-3xl tracking-wide font-bold">{props.title}</h2>
          <p className="font-bold mt-6">
            {props.startDate} - {props.endDate}
          </p>
          <p className="mt-2">{props.description}</p>
        </div>
      </div>
    </>
  )
}
