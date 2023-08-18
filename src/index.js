import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Post(props) {
  return (
    <div className="facebookPost">
      <div className="postHeader">
        <img className="avatar" src={props.avatarUrl} alt="Avatar" />
        <div className="userInfo">
          <h3>{props.name}</h3>
          <span className="postDate">3 July 2023</span>
        </div>
      </div>
      <p>{props.text}</p>
      <img
        className="postImage"
        src={props.imgUrl}
        alt="Post"
        width="600"
        height="400"
      />

      <div className="postButtons">
        <button>Like</button>
        <button>Comment</button>
        <button>Share</button>
      </div>
    </div>
  );
}

const postsData = [
  {
    avatarUrl: "https://images.pexels.com/photos/8090137/pexels-photo-8090137.jpeg?auto=compress&cs=tinysrgb&w=600",
    imgUrl: "https://images.pexels.com/photos/3703429/pexels-photo-3703429.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "Here's a cool thing about props: you can pass whatever you want into them.",
    name: "Talha",
  },
  {
    avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    imgUrl: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "Another interesting React post.",
    name: "Malik",
  },
  {
    avatarUrl: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=600",
    imgUrl: "https://images.pexels.com/photos/4790610/pexels-photo-4790610.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "Another interesting React post.",
    name: "Malik",
  }, {
    avatarUrl: "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=600",
    imgUrl: "https://images.pexels.com/photos/217250/pexels-photo-217250.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "Another interesting React post.",
    name: "Malik",
  },
  // Add more posts here
];

ReactDOM.render(
  <div>
    {postsData.map((post, index) => (
      <Post
        key={index}
        avatarUrl={post.avatarUrl}
        imgUrl={post.imgUrl}
        text={post.text}
        name={post.name}
      />
    ))}
  </div>,
  document.querySelector("#root")
);
