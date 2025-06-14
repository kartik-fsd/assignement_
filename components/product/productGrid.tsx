"use client";

import { useState, useEffect } from "react";
import ProductCard from "@/components/product/productCard";
import { Product, ProductGridProps } from "@/types/product";
import styles from "./ProductGrid.module.css";
import Sidebar from "../Sidebar";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductGrid: React.FC<ProductGridProps> = ({
  initialProducts,
  categories,
}) => {
  const [products] = useState<Product[]>(initialProducts);
  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("recommended");
  const [showFilters, setShowFilters] = useState<boolean>(true);

  // Filter and sort products
  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = products.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered = [...filtered].sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      default:
        // Keep original order for recommended
        break;
    }

    setFilteredProducts(filtered);
  }, [products, selectedCategory, sortBy]);

  const handleCategoryChange = (category: string): void => {
    setSelectedCategory(category);
  };

  const handleSortChange = (sort: string): void => {
    setSortBy(sort);
  };

  const toggleFilters = (): void => {
    setShowFilters(!showFilters);
  };

  return (
    <>
      {/* Controls Section */}
      <section className={styles.controls}>
        <div className={styles.controlsLeft}>
          <span className={styles.itemCount}>
            {filteredProducts.length} ITEMS
          </span>
          <button
            className={styles.filterToggle}
            onClick={toggleFilters}
            aria-label={showFilters ? "Hide filters" : "Show filters"}
          >
            <span className={styles.filterIcon}></span>
            <span>
              {showFilters ? (
                <sub
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ChevronLeft size={14} />
                  HIDE FILTER
                </sub>
              ) : (
                <sub
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ChevronRight size={14} />
                  SHOW FILTER
                </sub>
              )}
            </span>
          </button>
        </div>

        <div className={styles.controlsRight}>
          <div className={styles.sortContainer}>
            <select
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value)}
              className={styles.sortSelect}
              aria-label="Sort products"
            >
              <option value="recommended">RECOMMENDED</option>
              <option value="price-low">PRICE: LOW TO HIGH</option>
              <option value="price-high">PRICE: HIGH TO LOW</option>
              <option value="rating">HIGHEST RATED</option>
            </select>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.content}>
        <div className={styles.contentWrapper}>
          {/* Sidebar */}
          {showFilters && (
            <Sidebar
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
            />
          )}

          {/* Products Grid */}
          <div
            className={`${styles.productsSection} ${
              !showFilters ? styles.fullWidth : ""
            }`}
          >
            <div className={styles.productsGrid}>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <div className={styles.noProducts}>
                  <h3>No products found</h3>
                  <p>Try adjusting your filters or search criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductGrid;
