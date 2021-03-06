import React, { Fragment } from "react";
import ApplicationProcess from "../components/application-process";
import PrimaryButton from "../components/button";
import SecondaryButton from "../components/button";
import HiringPartners from "../components/hiring-partners";
import FlashBar from "../components/flash-bar";
import FAQ from "../components/faq";
import Alumni from "../components/alumni";
import ReadyTo from "../components/readyTo";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Mentors from "../components/mentors";
import CareerTracks from "../components/career-tracks";
import TechTracks from "../components/tech-tracks";
import TracksMatrix from "../components/tracks-matrix";
import { Link } from "gatsby";

import { faqData, processData } from "../api/data";

export default function LearnPage() {
  return (
  <Fragment>
  <FlashBar />
    <Layout seoTitle="Bridge Career Tracks">     
      <Hero 
        className="inner"
        headline="Choose your own path"
        firstDesc="Go at your own pace with our explorer path courses or a career levelup program."
        secondDesc="50% of deposits are allocated for the bridge <a href='/fund'>scholarship fund</a>. 50% is reserved for <a href='#plan-comparison'>rebates</a>."
      >
        <p>
        <PrimaryButton className="btn btn-primary" to="#tech-tracks">Explore Courses</PrimaryButton>
        <SecondaryButton className="btn btn-secondary" to="#career-tracks">See Career Tracks</SecondaryButton>
        </p>

      </Hero>

     <TechTracks
        headline="Tech Explorer Courses"
        desc="All courses are go at your own pace."
        category="tech"
        endSlice={null}
      />

 

      <CareerTracks
        headline="Career LevelUp Tracks"
        desc="Complete our part-time in 6 months @ 20hrs/week. Full-time program completed in 3 months @ 40hrs/week."
        category='career'
        endSlice={null}
      />



      <ApplicationProcess
        headline="How to join"
        desc="Fast-track your personal learning & development by joining our community."
        data={processData}
      />

      <TracksMatrix 
        className="container"
      />

      <HiringPartners
        headline="Featured Technology Partners"
        desc="Our technology partners provide training materials, beta developer tools and access to real problems & projects."
        endSlice={null}
      />

      <ReadyTo headline="Interested in becoming a technology partner?">
        <PrimaryButton className="btn btn-primary" to="https://apply.bridge.academy/b/axv6ye/view">
         Join the Waitlist
        </PrimaryButton>
      </ReadyTo>

      <FAQ data={faqData} />

      <Alumni />


      <Mentors />

      <ReadyTo headline="Want to become a mentor?">
        <PrimaryButton className="btn btn-primary" to="https://apply.bridge.academy/b/zjvgu7/view">
          Apply Now
        </PrimaryButton>
      </ReadyTo>
    </Layout>
  </Fragment>

  );
}
