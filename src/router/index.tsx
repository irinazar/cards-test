import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main/Main";
import Post from "../pages/Post/Post";

function AppRouter(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/posts/:postId" element={<Post />} />
    </Routes>
  );
}

export default AppRouter;
