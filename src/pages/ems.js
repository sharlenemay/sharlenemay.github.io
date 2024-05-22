import React from "react";
import harvard from "../photos/presentation_7_harvard_tn.png";
import "./styles.css";

export default function Ems() {
  return (
    <div className="main">
      <h1>Boston University Emerging Media Studies Masters Capstone Project</h1>
      <img src={harvard} alt="harvard"></img>
      <p>Presented in 2021 at Boston University College of Communication Graduate Student Conference #ScreentimeBU</p>
      <h5>Abstract</h5>
      <p>
      This study aims at characterizing the spaces that educators have established for online discussions. Based on the theoretical frameworks of “affinity space” from education and “public sphere” from political communication, we propose that social media conversations on the topic of education have two dimensions: interest-based and political-driven. To quantitatively assess the extent of this integration, we used a combination of network analysis, content analysis, and machine learning to examine Twitter’s hashtag communities for educators. Our results indicate that it is challenging to explicitly differentiate between Twitter discussions that focus on education and learning and those that focus on policy debates, and therefore we suggest that the two spaces should be considered in tandem. We also found that while users identified as opinion leaders changed continuously, prominent users included both political actors and various educators and educational institutions. Findings of the study have important implications for educators and educational institutions who are interested in joining the conversation on Twitter.
      </p>
      <a href="https://sites.bu.edu/demsconference/2021/06/27/harvard-graduate-school-of-education/" target="_blank">
      https://sites.bu.edu/demsconference/2021/06/27/harvard-graduate-school-of-education/
      </a>
    </div>
  );
}
