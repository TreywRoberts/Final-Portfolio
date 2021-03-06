import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faMedium,
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-container">
      <h3>Let's be social</h3>
        <a href="https://github.com/TreywRoberts"
        className="youtube social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/treywroberts/"
        className="facebook social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://treywroberts.medium.com/"
         className="twitter social">
        <FontAwesomeIcon icon={faMedium} size="2x" />
        </a>
    </div>
  );
}
