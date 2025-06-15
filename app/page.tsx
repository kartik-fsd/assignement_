import { Suspense } from "react";
import { Metadata } from "next";
import Header from "@/components/Header/index";
import ProductGrid from "@/components/product/productGrid";
import { fetchProducts, fetchCategories } from "@/lib/api";
import { Product, Category } from "@/types/product";
import styles from "./page.module.css";
import Footer from "@/components/Footer/Footer";

// Server-side data fetching
async function getProductsData(): Promise<{
  products: Product[];
  categories: Category[];
}> {
  try {
    const [products, categories] = await Promise.all([
      fetchProducts(),
      fetchCategories(),
    ]);

    return { products, categories };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { products: [], categories: [] };
  }
}

// Metadata for this specific page
export const metadata: Metadata = {
  title: "Discover Our Products - Premium E-commerce Store",
  description:
    "Explore our curated collection of premium products including electronics, jewelry, men's clothing, and women's clothing.",
  alternates: {
    canonical: "https://your-domain.com",
  },
};

// Loading component
function ProductsLoading() {
  return (
    <div className={styles.loading}>
      <div className={styles.loadingSpinner}></div>
      <p>Loading products...</p>
    </div>
  );
}

// Main page component (Server Component by default)
export default async function HomePage() {
  const { products, categories } = await getProductsData();

  // Structured data for products
  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Product Collection",
    description: "Premium e-commerce product catalog",
    url: "https://your-domain.com",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: products.length,
      itemListElement: products.slice(0, 10).map((product, index) => ({
        "@type": "Product",
        position: index + 1,
        name: product.title,
        image: product.image,
        offers: {
          "@type": "Offer",
          price: product.price,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: product.rating.rate,
          reviewCount: product.rating.count,
        },
      })),
    },
  };

  return (
    <>
      {/* Inject structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productStructuredData),
        }}
      />

      <div className={styles.container}>
        <Header />

        <main className={styles.main}>
          {/* Hero Section */}
          <section className={styles.hero}>
            <h1 className={styles.heroTitle}>DISCOVER OUR PRODUCTS</h1>
            <p className={styles.heroDescription}>
              Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
              scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
              dolor.
            </p>
          </section>

          {/* Products Section with Suspense for better UX */}
          <Suspense fallback={<ProductsLoading />}>
            <ProductGrid initialProducts={products} categories={categories} />
          </Suspense>
        </main>

        <Footer />
      </div>
    </>
  );
}
