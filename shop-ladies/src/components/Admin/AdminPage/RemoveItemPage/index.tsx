import { ref, remove, child } from "firebase/database";
import React from "react";
import { useList } from "react-firebase-hooks/database";
import { database } from "../../../..";

const RemoveItemPage: React.FC = () => {
  const [snapshot, loading, error] = useList(ref(database, "products"));

  snapshot?.map((v) => {
    console.log(v.val());
  });

  const removeData = (key: string | null) => {
    const db = ref(database, `products/${key}`);
    remove(db);
  }

  return (
    <main>
      <div className="header">
        <div className="title">Title</div>
        <div className="description">Description</div>
      </div>
      {snapshot?.map((item) => {
        const data = item.val()
        return (<div className="item" key={item.key}>
            <div className="title">{data.title}</div>
            <div className="desc">{data.description}</div>
            <button onClick={() => removeData(item.key)}>Remove</button>
        </div>);
      })}
    </main>
  );
};

export default RemoveItemPage;
