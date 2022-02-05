import Head from "next/head";
import ApplyForm from "../components/Apply/ApplyForm";

const Apply = () => {
  return (
    <div>
      <Head>
        <title>Contact</title>
        <meta name="description" content="TFP Models Agency" />
        <link rel="icon" href="/tfp-fav-icon.png" />
      </Head>

      <ApplyForm />
    </div>
  );
};

export default Apply;
