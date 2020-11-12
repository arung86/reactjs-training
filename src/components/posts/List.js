import React from "react";

export default function List({ list }) {
  return (
    <div>
      {list.map((item) => (
        <div style={Styles.item} key={item.id}>
          <h3>Title: {item.title}</h3>
          <p>Body: {item.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

const Styles = {
  item: {
    textAlign: "left",
  },
};
