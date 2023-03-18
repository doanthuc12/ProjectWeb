import React from "react";
import Styles from "./NoteCommon.module.css";

const NoteCommon: React.FC<IPropsNoteCommon> = (props) => {
  const { title, list } = props;

  return (
    <div className={Styles.container}>
      <h3 className={Styles.title}> {title}</h3>
      <ul className={Styles.list}>
        {list.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default NoteCommon;
