import React, { FormEvent, useState } from "react";
import { database } from "../../../..";
import { ref, set, push } from "firebase/database";
import { useUploadFile } from "react-firebase-hooks/storage";
import { storageRef } from "../../../..";
import { ref as storRef } from "firebase/storage";

const SetItemPage: React.FC = () => {
  const [uploadFile, uploading, snapshot, error] = useUploadFile();
  const [files, setFiles] = useState<Array<File | undefined>>([]);
  const [inputFiles, setInputFiles] = useState<number>(1);

  const addItem = async (e: any) => {
    e.preventDefault();
    const items = [...e.target.children].filter((item: any) => item.name);
    console.log(items);

    if (files.length > 0) {
      files.forEach(async (file, i: number) => {
        if (file) {
          const stor = storRef(storageRef, `images/${file.name}`);
          const result = await uploadFile(stor, file, {
            contentType: file.type,
          });
        }
      });
      let data = items.reduce(
        (data: any, item: any) => ({ ...data, [item.name]: item.value }),
        {}
      );
      const names = files.map((item) => item?.name);
      data = {
        ...data,
        image: names,
      };
      const productListRef = ref(database, "products");
      const newProductRef = push(productListRef);
      set(newProductRef, {
        ...data,
      });
      setFiles([]);
      setInputFiles(1);
      items.forEach(item => item.value = '');
    }
  };

  return (
    <div>
      <form action="" onSubmit={addItem}>
        <input type="text" name="title" id="" />
        <textarea name="description" id=""></textarea>
        <input type="number" name="price" id="" />
        <div>
          {[...Array<any>(inputFiles)].map((item, i) => (
            <div key={i.toString()}>
              <input
                type="file"
                onChange={(e) => {
                  const file = e.target.files ? e.target.files[0] : undefined;
                  setFiles([...files, file]);
                }}
              />
            </div>
          ))}
          <button onClick={() => setInputFiles(inputFiles + 1)}>
            Add file
          </button>
        </div>

        <button type="submit">Добавить</button>
      </form>
    </div>
  );
};

export default SetItemPage;
