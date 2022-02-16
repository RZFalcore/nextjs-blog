import Layout from "../../components/layout";
import { getAllPostsIds, getPostData } from "../../lib/posts";

export async function getStaticPaths() {
  const paths = getAllPostsIds();
  return { paths, fallback: false };
}

export default function Post({ pageData }) {
  const { id, title, date } = pageData;
  return (
    <Layout>
      {title}
      <br />
      {id}
      <br />
      {date}
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const pageData = getPostData(params.id);
  return { props: { pageData } };
}
