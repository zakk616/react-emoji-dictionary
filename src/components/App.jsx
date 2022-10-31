import React from "react";
import DictionaryList from "./DictionaryList";
import emojis from "../emojipedia.js";

function App() {
  return (
    <>
      <h1>
        <span>emojipedia</span>
      </h1>
      <div className="dictionary">
        {emojis.map((emoji) => {
          return (
            <DictionaryList
              key={emoji.id}
              emoji={emoji.emoji}
              emoji_name={emoji.name}
              defination={emoji.meaning}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
