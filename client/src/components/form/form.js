import FileInputComponent from "react-file-input-previews-base64";
import { useState } from "react";
const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    description: "",
    tag: "",
    Image: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(postData);
  };
  const rest = () => {
    console.log("hi");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="creator"
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
          value={postData.creator}
          className="px-5 py-5 w-full border-blue-500 border-2 mb-4"
        />
        <input
          type="text"
          name="title"
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          value={postData.title}
          className="px-5 py-5 w-full border-blue-500 border-2 mb-4"
        />
        <textarea
          name="description"
          onChange={(e) =>
            setPostData({ ...postData, description: e.target.value })
          }
          className="px-5 py-5 w-full border-blue-500 border-2 mb-4"
        >
          {postData.description}
        </textarea>
        <input
          type="text"
          name="tag"
          onChange={(e) => setPostData({ ...postData, tag: e.target.value })}
          value={postData.tag}
          className="px-5 py-5 w-full border-blue-500 border-2 mb-4"
        />
        <FileInputComponent
          labelText="Select file"
          labelStyle={{ fontSize: 14 }}
          multiple={false}
          callbackconst={(file_arr) => {
            console.log(file_arr);
          }}
          accept="image/*"
        />
        <div className="flex flex-wrap mt-4">
          <button
            type="submit"
            className="px-6 py-2 rounded-full leading-3  bg-blue-700 text-white "
          >
            submit
          </button>

          <button
            type="rest"
            onClick={rest}
            className=" ml-4 border rounded-full  px-6 py-2 bg-red-700 text-white"
          >
            rest
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
