import "./members.css";

const Members = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">Recent Projects</h1>
      <div className="member member-1">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">Travel Photography Website</h1>
          <h3 className="position">React.js</h3>
          <h4 className="about">
            A responsive website for Photographers who like to travel around.
            Website was created through REACT Javascript using
            React Hooks and React Routers.
          </h4>
          <a href="#contact" className="contact-member">
              <span>Github Link</span>
            </a>
          
        </div>
      </div>

      <div className="member member-2">
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
          <a href="#contact" className="contact-member">
            <span>Github Link</span>
          </a>
        </div>
      </div>

      <div className="member member-3">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">Student Registeration System</h1>
          <h3 className="position">ASP .Net (Windows Form)</h3>
          <h4 className="about">
            Student Registeration System is an Windows Application created
            by using ASP .Net framework. Backend was developed using the C# 
            and MySQL database. It allows clients to perform CRUD operations 
            over the database i.e. adding, deleting, updating and reading
            student's information over the portal.
          </h4>
          <a href="#contact" className="contact-member">
            <span>Github Link</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Members;
