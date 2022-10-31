import React from "react";

function DictionaryTerm(props) {
  return (
    <>
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span>{props.emoji_name}</span>
      </dt>
    </>
  );
}

export default DictionaryTerm;
