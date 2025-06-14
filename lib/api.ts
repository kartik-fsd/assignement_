
import { Product, Category } from '@/types/product';

const API_BASE_URL = 'https://fakestoreapi.com';

export async function fetchProducts(): Promise<Product[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/products`, {
            next: { revalidate: 3600 } // Revalidate every hour
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const products: Product[] = await response.json();
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

export async function fetchCategories(): Promise<Category[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/products/categories`, {
            next: { revalidate: 3600 } // Revalidate every hour
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const categories: Category[] = await response.json();
        return categories;
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
}

export async function fetchProductsByCategory(category: string): Promise<Product[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/products/category/${category}`, {
            next: { revalidate: 3600 }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const products: Product[] = await response.json();
        return products;
    } catch (error) {
        console.error(`Error fetching products for category ${category}:`, error);
        return [];
    }
}

export async function fetchSingleProduct(id: number): Promise<Product | null> {
    try {
        const response = await fetch(`${API_BASE_URL}/products/${id}`, {
            next: { revalidate: 3600 }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const product: Product = await response.json();
        return product;
    } catch (error) {
        console.error(`Error fetching product ${id}:`, error);
        return null;
    }
}