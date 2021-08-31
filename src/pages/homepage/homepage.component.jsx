import React from "react";
import "./homepage.styles.scss";

import { Header } from "../../components/header/header.component";

import Header_image from "../../assets/home-bg.gif";

const Homepage = () => (
  <div className="homepage">
    <Header Header_image={Header_image}>
      <h1
        style={{ color: "white", fontSize: "70px", fontFamily: "Fira Sans", textAlign: "center" }}
        data-aos="fade-up"
        data-aos-duration="700"
      >
        COVID-19 Impact on Digital Learning
      </h1>
      <p
        style={{ fontSize: "40px", textAlign: "center" }}
        data-aos="fade-up"
        data-aos-duration="900"
      >
        Data Analytics
      </p>
      <br></br>
      <div align="right">
        <a className="git-button" href="https://github.com/Apoorv-17/Nano_Slayer" target="_blank" rel="noopener noreferrer">
          REPOSITORY
        </a>
      </div>
    </Header>
    <div className="main-heading" data-aos="fade-up" data-aos-duration="700">
      <h1>Problem Statement</h1>
    </div>
    <div className="features">
      <div className="blocks">
        <div className="para" data-aos="slide-right" data-aos-duration="500">
          <h1>What is the Problem Statment of the Project?</h1>
          <p>
            The COVID-19 Pandemic has disrupted learning for more than 56 million students in the United States. In the Spring of 2020, most states and local governments across the U.S. closed educational institutions to stop the spread of the virus. In response, schools and teachers have attempted to reach students remotely through distance learning tools and digital platforms. Until today, concerns of the exacaberting digital divide and long-term learning loss among America’s most vulnerable learners continue to grow.
          </p>
          <div className="forScroll">
            <a href="#coins" className="scroll button">
              Learn About Platforms
            </a>
          </div>
        </div>
        <img
          src={require("../../assets/home-problem.jpg")}
          alt="why"
          data-aos="slide-left"
          data-aos-duration="500"
        />
      </div>
      {/* <div className="blocks"> */}
      {/* <img
          src={require("../../assets/home-super.jpg")}
          alt="why"
          data-aos="slide-right"
          data-aos-duration="500"
        /> */}
      <div className="para" data-aos="slide-left" data-aos-duration="500">
        <h1>What are all the challenges?</h1>
        <p>
          <ol>
            <li>What is the picture of digital connectivity and engagement in 2020?</li>
            <li>What is the effect of the COVID-19 pandemic on online and distance learning, and how might this also evolve in the future?</li>
            <li>How does student engagement with different types of education technology change over the course of the pandemic?</li>
            <li>How does student engagement with online learning platforms relate to different geography? Demographic context (e.g., race/ethnicity, ESL, learning disability)? Learning context? Socioeconomic status?</li>
            <li>Do certain state interventions, practices, or policies (e.g., stimulus, reopening, eviction moratorium) correlate with the increase or decrease online engagement</li>
          </ol>
        </p>
        <div className="forScroll"></div>
      </div>
      {/* </div> */}
      <div className="blocks">
        <div className="para" data-aos="slide-right" data-aos-duration="500">
          <h1>Why Choose this project?</h1>
          <p>
            The COVID-19 Pandemic has disrupted learning for students all over the world. The Government had no other choice but to close the schools and colleges, which adversely affected the learning of the students. In response, schools and teachers have attempted to reach students remotely through distance learning tools and digital platforms. So, we have come up with the idea to deeply analyze the impact of COVID-19 on student learning and how digital learning has played a vital role in educating students even under these circumstances.
          </p>
        </div>
        <img
          src={require("../../assets/home-why.jpg")}
          alt="why"
          data-aos="slide-left"
          data-aos-duration="500"
        />
      </div>
    </div>
    <div
      className="main-heading"
      style={{ backgroundColor: "rgb(198, 253, 196)" }}
      data-aos="fade-up"
      data-aos-duration="700"
    >
      <h1>Dataset Description</h1>
    </div>
    <div className="features-max">
      {/* <div className="blocks"> */}
      {/* <img
          src={require("../../assets/home-github.jpg")}
          alt="why"
          data-aos="slide-right"
          data-aos-duration="500"
        /> */}
      <div className="para" data-aos="slide-left" data-aos-duration="500">
        <h1>Dataset</h1>
        <p>
          We have provided a set of daily edtech engagement data from over 200 school districts in 2020, and we encourage you to leverage other publicly available data sources in your analysis. We include three basic sets of files to help you get started:
          <ul>
            <li>The <b>engagement_ data</b> folder is based on LearnPlatform’s Student Chrome Extension. The extension collects page load events of over 10K education technology products in our product library, including websites, apps, web apps, software programs, extensions, ebooks, hardwares, and services used in educational institutions. The engagement data have been aggregated at school district level, and each file represents data from one school district.</li>
            <li>The <b>products_info.csv</b> file includes information about the characteristics of the top 372 products with most users in 2020.</li>
            <li>The <b>districts_info.csv</b> file includes information about the characteristics of school districts, including data from NCES and FCC.</li>
            <li>The definitions of each column in the three data sets are detailed in the README file.</li>
            <li>In addition to the files provided, we encourage you to use other public data sources such as COVID-19 US State Policy database, KIDS Count, and KFF.</li>
          </ul>
        </p>
        {/* </div> */}
      </div>
      {/* <div className="blocks"> */}
      <div className="para" data-aos="slide-right" data-aos-duration="500">
        <h1>Data Definition</h1>
        <h2>1. Engagement Data</h2>
        <p>
          The engagement data are aggregated at school district level, and each file in the folder <b>engagement_data</b> represents data from one school district. The 4-digit file name represents <b>district_id</b> which can be used to link to district information in <b>district_info.csv</b>. The <b>lp_id</b> can be used to link to product information in <b>product_info.csv</b>.
        </p>
      </div>
      <table class="table table-hover table-bordered">
        <thead class="table-light">
          <tr>
            <th scope="col">SNo</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>time</td>
            <td>date in "YYYY-MM-DD"</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Ip_id</td>
            <td>The unique identifier of the product</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>pct_access</td>
            <td>Percentage of students in the district have at least one page-load event of a given product and on a given day</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>engagement_index</td>
            <td>Total page-load events per one thousand students of a given product and on a given day</td>
          </tr>
        </tbody>
      </table>
      <div className="para" data-aos="slide-right" data-aos-duration="500">
        <h2>2. District Information Data</h2>
        <p>
          The district file <b>districts_info.csv</b> includes information about the characteristics of school districts, including data from NCES (2018-19), FCC (Dec 2018), and Edunomics Lab. In this data set, we removed the identifiable information about the school districts. We also used an open source tool ARX (Prasser et al. 2020) to transform several data fields and reduce the risks of re-identification. For data generalization purposes some data points are released with a range where the actual value falls under. Additionally, there are many missing data marked as 'NaN' indicating that the data was suppressed to maximize anonymization of the dataset.        
        </p>
      </div>
      <table class="table table-hover table-bordered">
        <thead class="table-light">
          <tr>
            <th scope="col">SNo</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>district_id</td>
            <td>The unique identifier of the school district</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>state</td>
            <td>The state where the district resides in</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>locale</td>
            <td>NCES locale classification that categorizes U.S. territory into four types of areas: City, Suburban, Town, and Rural. See Locale Boundaries User's Manual for more information.</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>pct_black/hispanic</td>
            <td>Percentage of students in the districts identified as Black or Hispanic based on 2018-19 NCES data</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>pct_free/reduced</td>
            <td>Percentage of students in the districts eligible for free or reduced-price lunch based on 2018-19 NCES data</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>countyconnectionsratio</td>
            <td><b>ratio</b> (residential fixed high-speed connections over 200 kbps in at least one direction/households) based on the county level data from FCC From 477 (December 2018 version). See FCC data for more information.</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>pptotalraw</td>
            <td>Per-pupil total expenditure (sum of local and federal expenditure) from Edunomics Lab's National Education Resource Database on Schools (NERD$) project. The expenditure data are school-by-school, and we use the median value to represent the expenditure of a given school district.</td>
          </tr>
        </tbody>
      </table>
      <div className="para" data-aos="slide-right" data-aos-duration="500">
        <h2>3. Product Information Data</h2>
        <p>
        The product file <b>products_info.csv</b> includes information about the characteristics of the top 372 products with most users in 2020. The categories listed in this file are part of LearnPlatform's product taxonomy. Data were labeled by our team. Some products may not have labels due to being duplicate, lack of accurate url or other reasons.
        </p>
      </div>
      <table class="table table-hover table-bordered">
        <thead class="table-light">
          <tr>
            <th scope="col">SNo</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>LP ID</td>
            <td>The unique identifier of the product</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>URL</td>
            <td>Web Link to the specific product</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Product Name</td>
            <td>Name of the specific product</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Provider/Company Name</td>
            <td>Name of the product provider</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Sector(s)</td>
            <td>Sector of education where the product is used</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Primary Essential Function</td>
            <td>The basic function of the product. There are two layers of labels here. Products are first labeled as one of these three categories: LC = Learning & Curriculum, CM = Classroom Management, and SDO = School & District Operations. Each of these categories have multiple sub-categories with which the products were labeled</td>
          </tr>
        </tbody>
      </table>
    </div>
    {/* </div> */}
    <div
      className="main-heading"
      style={{ backgroundColor: "rgb(198, 253, 196)" }}
      data-aos="fade-up"
      data-aos-duration="700"
    >
      <h1>How to track our work progress ?</h1>
    </div>
    <div className="features">
      <div className="blocks">
        <img
          src={require("../../assets/home-github.jpg")}
          alt="why"
          data-aos="slide-right"
          data-aos-duration="500"
        />
        <div className="para" data-aos="slide-left" data-aos-duration="500">
          <h1>Github</h1>
          <p>
            You can easily track our progress as well as the contribution of
            each member through our github repository the link to which is
            available in the About section you can navigate to it using the
            button on your top right.
          </p>
        </div>
      </div>
      <div className="blocks">
        <div className="para" data-aos="slide-right" data-aos-duration="500">
          <h1>Why Github?</h1>
          <p>
            Github is a platform which helps us to collaborate and share our
            code with each other just as if we are coding it on the same
            machine. It helps us to easily resolve the conflicts we might have
            in our code and is an overall developer friendly website.
          </p>
        </div>
        <img
          src={require("../../assets/home-whygit.png")}
          alt="why"
          data-aos="slide-left"
          data-aos-duration="500"
        />
      </div>
    </div>
    <div
      id="coins"
      className="main-heading"
      style={{ backgroundColor: "rgb(255, 208, 208)" }}
      data-aos="fade-up"
      data-aos-duration="700"
    >
      <h1>Platforms we are gonna use ?</h1>
    </div>
    <div className="features">
      <div className="blocks">
        <img
          src={require("../../assets/home-react.jpg")}
          alt="why"
          data-aos="slide-right"
          data-aos-duration="500"
        />
        <div className="para" data-aos="slide-left" data-aos-duration="500">
          <h1>React</h1>
          <p>
            The website you are on is developed in React as we are using React
            framework for the designing of our website. React is one of the well
            known frameworks for web development which is developed by Facebook
            and has a very big community.
          </p>
        </div>
      </div>
      <div className="blocks">
        <div className="para" data-aos="slide-right" data-aos-duration="500">
          <h1>Unity.</h1>
          <p>
            For the development of the game we have decided to choose unity as
            our main framework. It is an excellent framework which also supports
            cross-platform development and is also well known and has a big
            community to back it up.
          </p>
        </div>
        <img
          src={require("../../assets/home-unity.jpg")}
          alt="why"
          data-aos="slide-left"
          data-aos-duration="500"
        />
      </div>
      <div className="blocks">
        <img
          src={require("../../assets/home-C.jpg")}
          alt="why"
          data-aos="slide-right"
          data-aos-duration="500"
        />
        <div className="para" data-aos="slide-left" data-aos-duration="500">
          <h1>C#</h1>
          <p>
            Along with unity we are going to be using C# as our programming
            language. C# will be used to design the movements and other
            interactions for out game.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Homepage;
