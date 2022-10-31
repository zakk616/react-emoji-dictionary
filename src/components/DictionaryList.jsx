import React from "react";

import DictionaryTerm from "./DictionaryTerm";
import DictionaryDefination from "./DictionaryDefination";

function DictionaryList(props) {
  return (
    <div className="term">
      <DictionaryTerm emoji={props.emoji} emoji_name={props.emoji_name} />
      <DictionaryDefination defination={props.defination} />
    </div>
  );
}

export default DictionaryList;
