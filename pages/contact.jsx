import Head from "next/head";
import { useEffect, useState } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Layout from "../components/Layout/Layout";
import PageTitle from "../components/PageTitle";
import styles from "../styles/Contact.module.scss";

const Contact = () => {
  const [inBrowser, setInBrowser] = useState(false);

  useEffect(() => {
    setInBrowser(true);
    return () => {
      setInBrowser(false);
    };
  }, []);
  const Map = () => {
    if (inBrowser) {
      var {
        Map,
        MapContainer,
        Marker,
        Popup,
        TileLayer,
      } = require("react-leaflet");
      return (
        <MapContainer
          style={{ width: "100%", height: "100%" }}
          center={[30.0935386, 31.3216129]}
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[30.0935386, 31.3216129]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      );
    } else return null;
  };

  const ContactItem = ({ label, contacts }) => {
    return (
      <div
        style={{ borderBottom: "solid black 3px" }}
        className="d-flex flex-column flex-lg-row my-4 justify-content-between"
      >
        <h4 className="my-3 my-lg-auto">{label}</h4>
        <div className="mx-2 mx-lg-5">
          {contacts.map((contact, index) => (
            <div key={index} className={styles.contactEmail}>
              <a href={contact.email} target="_blank" rel="noreferrer">
                {contact.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  };
  return (
    <div>
      <Head>
        <title>Contact</title>
        <meta name="description" content="TFP Models Agency" />
        <link rel="icon" href="/tfp-fav-icon.png" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
        {/* <script
          src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
          integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
          crossOrigin=""
        ></script> */}
      </Head>

      <Layout>
        <PageTitle title="CONTACT US" />

        <div>
          <ContactItem
            label="Management"
            contacts={[
              {
                label: "Shady Hany Agban (Founder & CEO)",
                email: "mailto:tfpmodelseg@gmail.com",
              },
              {
                label: "Sherif Ramez Ramzy (co-founder)",
                email: "mailto:tfpmodelseg@gmail.com",
              },
              {
                label: "David Hany Agban (co-founder)",
                email: "mailto:tfpmodelseg@gmail.com",
              },
            ]}
          />
          <ContactItem
            label="Model Scouting &amp; Placement"
            contacts={[
              {
                label:
                  "Malak Ayman Khalifa (Booking Director & Model Management)",
                email: "mailto:tfpmodelseg@gmail.com",
              },
            ]}
          />
          <ContactItem
            label="Head of Creatives &amp; Art"
            contacts={[
              {
                label: "Habiba Hesham El Shalakany",
                email: "mailto:tfpmodelseg@gmail.com",
              },
            ]}
          />
          <ContactItem
            label="Booking"
            contacts={[
              {
                label: "tfpmodelseg@gmail.com",
                email: "mailto:tfpmodelseg@gmail.com",
              },
              {
                label: "Whatsapp",
                email: "https://wa.me/201090644513",
              },
            ]}
          />
          {/* <ContactItem
            label="ACCOUNTING &amp; BACK OFFICE"
            contacts={[
              { label: "SHERIF", email: "mailto:tfpmodelseg@gmail.com" },
              { label: "SHADY", email: "mailto:tfpmodelseg@gmail.com" },
            ]}
          />
          <ContactItem
            label="(FOR ANY INQUIRIES)"
            contacts={[
              { label: "SHERIF", email: "mailto:tfpmodelseg@gmail.com" },
              { label: "SHADY", email: "mailto:tfpmodelseg@gmail.com" },
            ]}
          /> */}
        </div>

        <div style={{ height: "500px", marginBottom: "40px" }}>
          <Map />
        </div>
      </Layout>
    </div>
  );
};

export default Contact;
