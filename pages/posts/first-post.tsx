import Head from "next/head";
import Layout from "../../components/Layout/Layout";

const FirstPost = () => {
  return (
    <Layout home={false}>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
    </Layout>
  );
};

export default FirstPost;
