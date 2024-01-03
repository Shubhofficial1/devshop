import { Helmet } from "react-helmet-async";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome To Devshop",
  description: "Devshop - an online marketplace build using mern stack ",
  keywords: "devshop, an online marketplace, mern stack",
};

export default Meta;
