import React, { useState, useEffect } from "react";
import axios from "axios";
import ContenedorBlogs from "../components/blogComponents/ContenedorBlogs";
import HeaderLogo from "../components/HeaderLogo";
import Blog from "../components/blogComponents/Blog";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
  Redirect,
} from "react-router-dom";

const Blogs = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  let { path } = useRouteMatch();
  //Api consumption
  const fetchData = () => {
    axios
      .get("https://server-lovat.vercel.app/db/newsApi.json")
      .then(function (result) {
        setArticles(() => {
          for (let index = 0; index < result.data.articles.length; index++) {
            result.data.articles[index].id = index;
          }
          return result.data.articles;
        });
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  //Loading state verification
  if (!loading) {
    return (
      <Router>
        <HeaderLogo seccion="Blog" />
        <div className="bg">
          <Switch>
            <Route path={`${path}/article/:id`}>
              <Blog articles={articles} />
            </Route>
            <Route path={path}>
              <ContenedorBlogs articles={articles} />
            </Route>
            <Redirect exact from="/blog" to={path} />
          </Switch>
        </div>
      </Router>
    );
  }
  return (
    <div className="spinner-grow" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Blogs;
