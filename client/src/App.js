import Header from "./components/header";
import Posts from "./components/posts/posts";
import Form from "./components/form/form";
const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="flex flex-wrap mt-5">
          <div className="w-full lg:w-9/12 xl:w-9/12 mb-4">
            <Posts />
          </div>
          <div className="w-full  lg:w-3/12 xl:w-3/12 mb-4">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
