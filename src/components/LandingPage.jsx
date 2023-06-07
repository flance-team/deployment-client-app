"use client";
import Head from "next/head";
import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { PrimaryFeatures } from "@/app/components/PrimaryFeatures";
import { SecondaryFeatures } from "@/app/components/SecondaryFeatures";
import { CallToAction } from "@/app/components/CallToAction";
import { Testimonials } from "@/app/components/Testimonials";
import { Faqs } from "@/app/components/Faqs";
import { Footer } from "@/app/components/Footer";
import { useRouter } from "next/navigation";

const LandingPage = () => {
  const router = useRouter();
  if (localStorage.getItem("role") === "employer") {
    router.push("/EmployerHome");
  }
  if (localStorage.getItem("role") === "user") {
    router.push("/UserHome");
  }

  return (
    <>
      <Head>
        <title>Flance - where freelancer meets employer</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Faqs />
      </main>
      <Footer />
    </>
  );
};
export default LandingPage;
