import React from "react";
import HeroSection from "@/components/home/HeroSection";
import FeatureSection from "@/components/home/FeatureSection";
import BreedChooser from "@/components/home/BreedChooser";
import GuidePreview from "@/components/home/GuidePreview";
import TestimonialSection from "@/components/home/TestimonialSection";
import CallToAction from "@/components/home/CallToAction";
import { Helmet } from "react-helmet";

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>PawParents - Guide for First-Time Dog Owners</title>
        <meta name="description" content="Everything you need to know about caring for your new dog. Covers breed selection, feeding, training, health, and more!" />
      </Helmet>

      <HeroSection />
      <FeatureSection />
      <BreedChooser />
      <GuidePreview />
      <CallToAction />
    </>
  );
};

export default Home;
