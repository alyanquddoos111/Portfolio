import "./qualifications.css";

const Qualifications = () => {
  return (
    <div>
      <h1 className="quali-text">My Area Of Work</h1>
      <div className="qualifications-container">
      <div className="qualification">
          <div className="content react"></div>
          <h1>React</h1>
        </div>
        <div className="qualification">
          <div className="content html"></div>
          <h1>html</h1>
        </div>
        <div className="qualification">
          <div className="content css"></div>
          <h1>css</h1>
        </div>
        <div className="qualification">
          <div className="content javascript"></div>
          <h1>javascript</h1>
        </div>

        <div className="qualification">
          <div className="content asp"></div>
          <h1>ASP .Net</h1>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
