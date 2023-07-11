import Header from "./component/Header";
import Content from "./component/Content";
import Footer from "./component/Footer";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <div className="container">
      <Header name="Ostad"></Header>
      <Header name="Assignment 6"></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
};

export default App;