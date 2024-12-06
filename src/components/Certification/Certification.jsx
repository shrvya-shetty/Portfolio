import React from "react";
import styles from "./Certification.module.css"; // Import the CSS file for styles
import AWS from "../../../assets/Certificate/AWS.png";
import Spring from "../../../assets/Certificate/spring.avif";
import Math from "../../../assets/Certificate/Math.jpeg";
import HI from "../../../assets/Certificate/HI.avif";
import cisco from "../../../assets/Certificate/cisco.jpg";




export const Certifications = () => {
  const certificates = [
    {
      title: "AWS Cloud Practitioner Essentials",
      image: AWS,
      description:
        "Completed the AWS Cloud Practitioner Essentials course, gaining a foundational understanding of AWS services, cloud computing concepts, security practices, and cost management.",
      link: "https://coursera.org/verify/8QF5UGH8NLS3", // Update the link as needed
    },
    {
      title: "Selenium-Selenium IDE",
      image: Spring,
      description:
        "Completed the Selenium - Selenium IDE course provided by Infosys Springboard, gaining hands-on experience in automating web applications using Selenium IDE, and learning key concepts in test automation and debugging.",
      link: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_01384274348444057623017_shared/1-2dface9b-791b-4848-ace4-f7e4dd5fe34d.pdf", // Update the link as needed
    },
    {
      title: "Machine Learning Onramp",
      image: Math,
      description:
        "Earned the Machine Learning Onramp certification from MathWorks, gaining essential skills in machine learning, such as supervised learning, data preprocessing, and model evaluation, all using MATLAB.",
      link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=1be60a0c-3247-4091-8ac4-8199f39d5cd5&", // Update the link as needed
    },
    ,
    {
      title: "SQL (Intermediate)",
      image: HI,
      description:
        "Completed the SQL (Intermediate) certification by HackerRank, enhancing skills in writing complex queries, data manipulation, and database management using advanced SQL techniques.",
      link: "https://www.hackerrank.com/certificates/277929102de2", // Update the link as needed
    },
    {
        title: "Cybersecurity Essentials course",
        image: cisco,
        description:
          "Completed the Cybersecurity Essentials course by Cisco, gaining a solid understanding of fundamental cybersecurity concepts, including network security, cyber threats, and defense strategies.",
        link: "https://www.linkedin.com/in/shravya29/details/certifications/", // Update the link as needed
      },
  ];

  return (
    <section className={styles.certificationsContainer} id="Cerification">
      <h2 className={styles.heading}>Certifications</h2>
      <div className={styles.certificationsList}>
        {certificates.map((certificate, index) => (
          <div key={index} className={styles.certificateCard}>
            <img
              src={certificate.image}
              alt={certificate.title}
              className={styles.certificateImage}
            />
            <div className={styles.certificateContent}>
              <h3 className={styles.certificateTitle}>{certificate.title}</h3>
              <p className={styles.certificateDescription}>
                {certificate.description}
              </p>
              <br></br>
              <a
                href={certificate.link}
                className={styles.knowMoreButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                Know More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
