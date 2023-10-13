// pages/ourprocess.tsx
import { NextApiRequest } from 'next';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';

const OurProcess = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  useEffect(() => {
    const $ = require('jquery');
    require('jquery-ui');

    $(".step").click(function (this: HTMLLIElement) {
      $(this).addClass("active").prevAll().addClass("active");
      $(this).nextAll().removeClass("active");
    });

    $(".step01").click(function () {
      $("#line-progress").css("width", "3%");
      $(".discovery").addClass("active").siblings().removeClass("active");
    });

    $(".step02").click(function () {
      $("#line-progress").css("width", "25%");
      $(".strategy").addClass("active").siblings().removeClass("active");
    });

    $(".step03").click(function () {
      $("#line-progress").css("width", "50%");
      $(".creative").addClass("active").siblings().removeClass("active");
    });

    $(".step04").click(function () {
      $("#line-progress").css("width", "75%");
      $(".production").addClass("active").siblings().removeClass("active");
    });

    $(".step05").click(function () {
      $("#line-progress").css("width", "100%");
      $(".analysis").addClass("active").siblings().removeClass("active");
    });
  }, []);

  return (
    <>
      <Head>
        <title>Our Process</title>
      </Head>
      <h1 className="text-center text-3xl font-semibold mt-12 uppercase">Our Process</h1>
      <div className="process_wrapper">
        <div id="progres_bar_container">
          <ul>
            <li className={`step step01 ${activeStep === 1 ? 'active' : ''}`}><div className="step-inner">HOME WORK</div></li>
            <li className={`step step02 ${activeStep === 2 ? 'active' : ''}`}><div className="step-inner">RESPONSIVE PART</div></li>
            <li className={`step step03 ${activeStep === 3 ? 'active' : ''}`}><div className="step-inner">Creative cREATIONS</div></li>
            <li className={`step step04 ${activeStep === 4 ? 'active' : ''}`}><div className="step-inner">TESTIMONIALS PART</div></li>
            <li className={`step step05 ${activeStep === 5 ? 'active' : ''}`}><div className="step-inner">OUR LOCATIONS</div></li>
          </ul>
          <div id="line">
            <div id="line-progress" style={{ width: `${(activeStep - 1) * 25 + 3}%` }}></div>
          </div>
        </div>

        <div id="progress-content-section">
          <div className={`section-content discovery ${activeStep === 1 ? 'active' : ''}`}>
            <h2>HOME SECTION</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque justo, consequat non fermentum ac, tempor eu turpis. Proin nulla eros, placerat non ipsum ut, dapibus ullamcorper ex. Nulla in dapibus lorem. Suspendisse vitae velit ac ante consequat placerat ut sed eros. Nullam porttitor mattis mi, id fringilla ex consequat eu. Praesent pulvinar tincidunt leo et condimentum. Maecenas volutpat turpis at felis egestas malesuada. Phasellus sem odio, venenatis at ex a, lacinia suscipit orci.</p>
          </div>
          {/* Tambahkan konten untuk langkah-langkah lain di sini */}
        </div>
      </div>
    </>
  );
};

export default OurProcess;
