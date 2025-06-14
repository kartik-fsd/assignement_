export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

export type Category = string;

export interface FilterState {
    selectedCategory: string;
    sortBy: 'recommended' | 'price-low' | 'price-high' | 'rating';
    showFilters: boolean;
}

export interface ProductCardProps {
    product: Product;
}

export interface SidebarProps {
    categories: Category[];
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
}

export interface ProductGridProps {
    initialProducts: Product[];
    categories: Category[];
}