import { Routes, Route } from "react-router-dom";
import { AdminLayout } from "./layouts/AdminLayout";
import { AppLayout } from "./layouts/AppLayout";
import { About } from "./pages/About";
import { AddBlog } from "./pages/admin/AddBlog";
import { BlogDetail } from "./pages/admin/BlogDetail";
import { Blogs } from "./pages/admin/Blogs";
import { Users } from "./pages/admin/Users";
import { Blog } from "./pages/Blog";
import { BlogsList } from "./pages/BlogsList";
import { BookmarkPage } from "./pages/Bookmark";
import { ForgetPassword } from "./pages/ForgetPassword";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";
import { Register } from "./pages/Register";
import { VerifyToken } from "./pages/VerifyToken";

const App = () => {
  return (
    <>
      <Routes>
        {/* normal Users */}
        <Route>
          <Route path="/login" element={<Login />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="register" element={<Register />} />
          <Route path="/verifyToken" element={<VerifyToken />} />
        </Route>

        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/blogsList">
            <Route index element={<BlogsList />} />
            <Route path=":slug" element={<Blog />} />
          </Route>
          <Route path="bookmark" element={<BookmarkPage />} />
        </Route>

        {/* admin  */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin/blogs">
            <Route index element={<Blogs />} />
            <Route path=":id" element={<BlogDetail />} />
          </Route>
          <Route path="users" element={<Users />} />
          <Route path="addBlog" element={<AddBlog />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
