// components/ProductCard/ProductCard.tsx
"use client";

import { JSX, useState } from "react";
import { ProductCardProps } from "@/types/product";
import styles from "./ProductCard.module.css";
import Image from "next/image";
import { Camera, Heart, Star } from "lucide-react";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [imageError, setImageError] = useState<boolean>(false);

  const handleLike = (): void => {
    setIsLiked(!isLiked);
  };

  const handleImageLoad = (): void => {
    setImageLoaded(true);
  };

  const handleImageError = (): void => {
    setImageError(true);
    setImageLoaded(true);
  };

  const renderStars = (rating: number): JSX.Element[] => {
    const stars: JSX.Element[] = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star size={14} className={styles.star} fill="currentColor" key={i} />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span
          key="half"
          className={styles.starHalf}
          role="img"
          aria-label="Half star"
        >
          ★
        </span>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span
          key={`empty-${i}`}
          className={styles.starEmpty}
          role="img"
          aria-label="Empty star"
        >
          ☆
        </span>
      );
    }

    return stars;
  };

  // Create SEO-friendly image alt text
  const imageAlt = `${product.title} - ${product.category} product image`;

  return (
    <article
      className={styles.productCard}
      itemScope
      itemType="https://schema.org/Product"
    >
      <div className={styles.imageContainer}>
        {!imageLoaded && !imageError && (
          <div
            className={styles.imagePlaceholder}
            aria-label="Loading product image"
          >
            <div className={styles.placeholderSpinner}></div>
            <span>Loading...</span>
          </div>
        )}

        {imageError ? (
          <div
            className={styles.imageError}
            role="img"
            aria-label="Image failed to load"
          >
            <Camera size={32} className={styles.cameraIcon} />
            <p>Image unavailable</p>
          </div>
        ) : (
          <Image
            src={product.image}
            alt={imageAlt}
            width={300}
            height={300}
            onLoad={handleImageLoad}
            className={styles.productImage}
            onError={handleImageError}
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            priority={false}
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAAAAAAAAAAAAAAAAAAAACv/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAVAQEBAAAAAAAAAAAAAAAAAAAFBv/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJ0AHlf/2Q=="
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        )}

        <button
          className={`${styles.likeButton} ${isLiked ? styles.liked : ""}`}
          onClick={handleLike}
          aria-label={
            isLiked
              ? `Remove ${product.title} from favorites`
              : `Add ${product.title} to favorites`
          }
          type="button"
        >
          <Heart
            size={16}
            className={isLiked ? styles.heartFilled : styles.heartEmpty}
            fill={isLiked ? "currentColor" : "none"}
          />
        </button>
      </div>

      <div className={styles.productInfo}>
        <h3 className={styles.productTitle} itemProp="name">
          {product.title}
        </h3>

        <p className={styles.productDescription}>
          Sign in or Create an account to see pricing
        </p>

        <div className={styles.productMeta}>
          <div
            className={styles.rating}
            itemProp="aggregateRating"
            itemScope
            itemType="https://schema.org/AggregateRating"
          >
            <div
              className={styles.stars}
              aria-label={`Rating: ${product.rating.rate} out of 5 stars`}
            >
              {renderStars(product.rating.rate)}
            </div>
            <span
              className={styles.ratingCount}
              aria-label={`${product.rating.count} reviews`}
            >
              ({product.rating.count})
            </span>
            <meta
              itemProp="ratingValue"
              content={product.rating.rate.toString()}
            />
            <meta
              itemProp="reviewCount"
              content={product.rating.count.toString()}
            />
          </div>
        </div>

        {/* Hidden structured data */}
        <meta itemProp="category" content={product.category} />
        <meta itemProp="description" content={product.description} />
      </div>
    </article>
  );
};

export default ProductCard;
