
export default function About() {
  return (
    <>
      <div className="container my-3">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                About me
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Hello My name is Saif and I've created this project using react. I have a basic knowledge of react js like sending props to other files and the use of useState hook for handling event and routing as well in function based component. I will continue my react js journey in future. For now my goal is to learn node js so i can call myself a Full stack web developer...
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
