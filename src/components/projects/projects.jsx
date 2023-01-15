import "./projects.css";

const Members = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">Recent Projects</h1>

      <div className="member member-1">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">Syringe Healthcare</h1>
          <h3 className="position">React.js</h3>
          <h4 className="about">
            A responsive website for E-Healthcare System to make sure 
            that the patients are getting the right medication at the right time.
            Website was created through REACT Javascript using TailwindCSS.
          </h4>
          <a href="https://github.com/alyanquddoos111/Syringe" className="contact-member">
              <span>Github Link</span>
            </a>
          
        </div>
      </div>


      <div className="member member-2">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">Travel Photography Website</h1>
          <h3 className="position">React.js</h3>
          <h4 className="about">
            A responsive website for Photographers who like to travel around.
            Website was created through REACT Javascript using
            React Hooks and React Routers.
          </h4>
          <a href="https://github.com/alyanquddoos111/Photogee" className="contact-member">
              <span>Github Link</span>
            </a>
          
        </div>
      </div>

      <div className="member member-3">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">AirTimes</h1>
          <h3 className="position">ASP .Net (Web forms)</h3>
          <h4 className="about">
            Website created for the purpose of Article writing. It was built using C# with
            MySQL at the backend and HTML/CSS/Bootstrap at the front-end. It allows Editors to
            write and read blogs while users nly have access to reading the blogs. Admin panel is there to 
            overview the editors and the users.
          </h4>
          <a href="https://github.com/alyanquddoos111/AirTimes" className="contact-member">
            <span>Github Link</span>
          </a>
        </div>
      </div>

    </div>
  );
};

export default Members;
