import React from "react";

function Footer() {
  // const stil = { backgroundColor: "rgb(26, 26, 26)" ,position: "fixed", bottom: "0",width: "100%"};
  const stil = { backgroundColor: "rgb(26, 26, 26)"};
  const color = { color: "rgb(255, 255, 255)"};
  return (
    <footer className="bg-light text-center text-lg-start fixed-bottom">
      <div className="text-center p-2" style={stil}>
        <p style={color}>© 2023 Copyright <br /> By Lazar Grebovic</p>
      </div>
    </footer>
  );
}

export default Footer;
