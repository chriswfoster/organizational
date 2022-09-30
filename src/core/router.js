import React from "react";
import { useRoutes } from "react-router-dom";
import MenuButton from "../components/Layout/MenuButton";
import Home from "../components/Routes/Home";
import Lists from "../components/Routes/Lists";
import Notes from "../components/Routes/Notes";
import NoteView from "../components/Routes/Notes/NoteView";

export default () => {
  return (
    <div>
      <MenuButton />
      <div>
        {useRoutes([
          { path: "/", exact: true, element: <Home /> },
          { path: "/Notes", exact: true, element: <Notes /> },
          { path: "/Note/:noteId", exact: true, element: <NoteView /> },
          { path: "/Lists", exact: true, element: <Lists /> },
        ])}
      </div>
    </div>
  );
};
