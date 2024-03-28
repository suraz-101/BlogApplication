import { Routes, Route } from "react-router-dom";
import { AdminLayout } from "./layouts/AdminLayout";
import { AppLayout } from "./layouts/AppLayout";
import { BlogDetail } from "./pages/admin/BlogDetail";
import { Blogs } from "./pages/admin/Blogs";
import { Blog } from "./pages/Blog";
import { BlogsList } from "./pages/BlogsList";
import { Bookmark } from "./pages/Bookmark";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
const App = () => {
  return (
    <>
      <Routes>
        {/* normal Users */}

        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/blogs">
            <Route index element={<BlogsList />} />
            <Route path=":id" element={<Blog />} />
          </Route>
          <Route path="bookmark" element={<Bookmark />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* admin  */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="blogs">
            <Route index element={<Blogs />} />
            <Route path=":id" element={<BlogDetail />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
