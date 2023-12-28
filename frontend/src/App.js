import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logout } from "./slices/authSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const expirationTime = localStorage.getItem("expirationTime");
    if (expirationTime) {
      const currentTime = new Date().getTime();
      if (currentTime > expirationTime) {
        dispatch(logout());
        // TODO : We can maybe redirect to login screen here. Will see in future if needed
      }
    }
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
      <Header />
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
