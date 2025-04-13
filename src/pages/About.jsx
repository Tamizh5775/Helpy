import "./About.css";
const About = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center bordering">
          <h2 className="fw-bold">About Us</h2>
          <p className="lead text-muted">
            Welcome to our platform! We are dedicated to providing the best
            services with a focus on reliability, customer satisfaction, and
            innovation.
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6 bordering">
          <h4 className="fw-semibold">Our Mission</h4>
          <p>
            Our mission is to empower individuals by providing high-quality
            solutions that make a difference. We strive to enhance the user
            experience with seamless and intuitive designs.
          </p>
        </div>
        <div className="col-md-6 bordering">
          <h4 className="fw-semibold">Our Vision</h4>
          <p>
            We envision a world where technology seamlessly integrates into
            everyday life, making tasks easier and more efficient. Innovation
            and excellence drive everything we do.
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12 text-center">
          <h4 className="fw-semibold">Meet the Team</h4>
        </div>
        <div className="col-md-4 card-body text-center bordering">
          <img
            src="1347141_edited.jpg"
            className="img-thumbnail rounded-circle"
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
            alt="Team Member"
          />
          <h5 className="mt-2">John Doe</h5>
          <p className="text-muted">Founder & CEO</p>
        </div>
        <div className="col-md-4 text-center bordering">
          <img
            src="kakashi1.jpg"
            className="img-thumbnail rounded-circle"
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
            alt="Team Member"
          />
          <h5 className="mt-2">Jane Smith</h5>
          <p className="text-muted">CTO</p>
        </div>
        <div className="col-md-4 text-center bordering">
          <img
            src="pxfuel (2).jpg"
            className="img-thumbnail rounded-circle"
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
            alt="Team Member"
          />
          <h5 className="mt-2">Mike Johnson</h5>
          <p className="text-muted">Lead Developer</p>
        </div>
      </div>
    </div>
  );
};

export default About;
