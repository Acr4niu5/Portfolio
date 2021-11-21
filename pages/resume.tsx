import Bar from "../components/Bar"
import { languages, tools } from "../data/constants"

const resume = () => {
  return (
    <div className="px-6 py-2">
      {/* // education */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Degree</h5>
            <p className="font-semibold">Collage</p>
            <p className="my-3">Description</p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Software Engineer</h5>
            <p className="font-semibold">asdasd</p>
            <p className="my-3">dddd</p>
          </div>
        </div>
      </div>
      {/* // languages */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="my-3 text-2xl font-bold h5">Languages & Frameworks</div>
        <div className="my-2">
          {
            languages.map(language=><Bar data={language}/>)
          }
        </div>
        {/* // tools */}
         <div className="my-3 text-2xl font-bold h5">Tools & Software</div>
        <div className="my-2">
          {
            tools.map(tool=><Bar data={tool}/>)
          }
        </div>
      </div>
      {/* // tools */}
    </div>
  )
}

export default resume
