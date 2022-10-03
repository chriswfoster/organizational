import React from "react";
import { useRoutes } from "react-router-dom";
import MenuButton from "../components/Layout/MenuButton";
import Home from "../components/Routes/Home";
import Lists from "../components/Routes/Lists";
import Notes from "../components/Routes/Notes";
import NoteView from "../components/Routes/Notes/NoteView";

import { NoteProvider } from "./contexts/noteCategoryContext";

export default () => {
  return (
    <div>
      <MenuButton />
      <div>
        {useRoutes([
          { path: "/", exact: true, element: <Home /> },
          {
            path: "/Notes",
            exact: true,
            element: (
              <NoteProvider>
                <Notes />
              </NoteProvider>
            ),
          },
          {
            path: "/Note/:categoryId",
            exact: true,
            element: (
              <NoteProvider>
                <NoteView />
              </NoteProvider>
            ),
          },
          { path: "/Lists", exact: true, element: <Lists /> },
        ])}
      </div>
    </div>
  );
};
