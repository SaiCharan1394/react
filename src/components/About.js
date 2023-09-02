import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>This is about section</h1>
      <User name={"saicharan (func)"} />
      <UserClass name={"saicharan (class)"}/>
    </div>
  );
};

export default About;
