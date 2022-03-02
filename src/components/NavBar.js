import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  let linksArr = links.map((link) => {
    return <a key={link} href={link}>{link}</a>
  })

  return <nav>{linksArr}</nav>;
}

export default NavBar;
