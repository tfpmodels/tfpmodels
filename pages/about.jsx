import Head from "next/head";
import Layout from "../components/Layout/Layout";
import PageTitle from "../components/PageTitle";

const About = () => {
  const aboutUsParagraph =
    "Established in 2021, TFP is a new Egyptian modeling agency aiming to revolutionize the modeling industry by representing diverse models that standout from the modeling beauty standards. \n It’s about time new faces rose to the top and broke the beauty standards by just being their unique selves and not fitting a certain beauty box. \n Our goal is to spread awareness about diversity and the importance of seeing representations specially for teens who aspire to model. We felt responsible to provide the market with models that would spread body positivity in the industry instead of creating new self-image distortions. \n TFP models don’t have to fit a certain criterion, for us there are no criteria for modeling. Being oneself is the key. We believe it’s about time people get represented enough and that beauty comes in all forms: features, heights, weights and even backgrounds. We were born to standout and embrace our differences not eliminate them and fit into little man-made boxes.";

  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="TFP Models Agency" />
        <link rel="icon" href="/tfp-fav-icon.png" />
      </Head>

      <Layout>
        <PageTitle title="ABOUT US" />

        <div>
          <div
            style={{ textAlign: "justify" }}
            className="mx-2 text-lg-start mb-4"
          >
            Established in 2021, TFP is a new Egyptian modeling agency aiming to
            revolutionize the modeling industry by representing diverse models
            that standout from the modeling beauty standards.
            <br />
            It’s about time new faces rose to the top and broke the beauty
            standards by just being their unique selves and not fitting a
            certain beauty box.
            <br />
            Our goal is to spread awareness about diversity and the importance
            of seeing representations specially for teens who aspire to model.
            We felt responsible to provide the market with models that would
            spread body positivity in the industry instead of creating new
            self-image distortions.
          </div>
          <div
            style={{ textAlign: "justify" }}
            className="mx-2 text-lg-start mb-5"
          >
            TFP models don’t have to fit a certain criterion, for us there are
            no criteria for modeling. Being oneself is the key. We believe it’s
            about time people get represented enough and that beauty comes in
            all forms: features, heights, weights and even backgrounds. We were
            born to standout and embrace our differences not eliminate them and
            fit into little man-made boxes.
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default About;
