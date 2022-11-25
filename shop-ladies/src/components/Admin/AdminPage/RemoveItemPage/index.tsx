import { ref, remove, child } from "firebase/database";
import React from "react";
import { useList } from "react-firebase-hooks/database";
import { database } from "../../../..";
// @ts-ignore
import style from "./removepage.module.css";

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
      <div className={style.header}>
        <div className={style.title}>Title</div>
        <div className={style.desc}>Description</div>
      </div>
      {snapshot?.map((item) => {
        const data = item.val()
        return (
          <div className={style.item} key={item.key}>
            <div className={style.title}>{data.title}</div>
            <div className={style.desc}>{data.description}</div>
            <button onClick={() => removeData(item.key)}>Remove</button>
          </div>
        );
      })}
    </main>
  );
};

export default RemoveItemPage;
