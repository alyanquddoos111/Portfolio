import "./members.css";

const Members = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">Members</h1>
      <div className="member member-1">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">Alyan Quddoos</h1>
          <h3 className="position">Team Lead</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="#contact" className="contact-member">
            <span>contact</span>
          </a>
        </div>
      </div>

      <div className="member member-2">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">Faiq</h1>
          <h3 className="position">HTML/CSS Expert</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="#contact" className="contact-member">
            <span>contact</span>
          </a>
        </div>
      </div>

      <div className="member member-3">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">Bilal</h1>
          <h3 className="position">Backend and Javascript Expert</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="#contact" className="contact-member">
            <span>contact</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Members;
