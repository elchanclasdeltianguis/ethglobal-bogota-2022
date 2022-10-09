import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import ProductsGallery from "../components/Products/ProductsGallery";

const ProductsPage: NextPage = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Products Gallery</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="flex flex-col items-center gap-y-16">
          <h1 className="text-6xl font-display">Products Gallery</h1>
          <ProductsGallery />
        </div>
      </Layout>
    </>
  );
};

export default ProductsPage;
