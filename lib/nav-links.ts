export interface SubCategory {
    url: string
    label: string
}

export interface Category {
    url: string
    label: string
    subCategories?: SubCategory[]
}

export interface NavLink {
    url: string
    label: string
    categories?: Category[]
}

export const navLinks: NavLink[] = [
    {
        url: '/',
        label: "Home",
    },
    {
        url: '/pages',
        label: "Pages",
        categories: [
            {
                url: "/pages/about",
                label: "About Us"
            },
            {
                url: "/pages/contact",
                label: "Contact Us"
            },
            {
                url: "www.linkedin.com",
                label: "LinkedIn"
            },
            {
                url: "https://www.facebook.com/pixiewearofficial",
                label: "Facebook"
            },
            {
                url: "www.instagram.com",
                label: "Instagram"
            },
            {
                url: "https://www.youtube.com/@PixieWear",
                label: "YouTube"
            },
        ]
    },
    {
        url: '/products',
        label: "Products",
        categories: [
            {
                url: "/products/men",
                label: "Men",
                subCategories: [
                    {
                        url: "/",
                        label: "Socks"
                    },
                    {
                        url: "/",
                        label: "Caps"
                    },
                    {
                        url: "/",
                        label: "T-shirt"
                    },
                    {
                        url: "/",
                        label: "Scarf"
                    },
                ]
            },
            {
                url: "/products/men",
                label: "Women",
                subCategories: [
                    {
                        url: "/",
                        label: "Socks"
                    },
                    {
                        url: "/",
                        label: "Winter hat"
                    },
                    {
                        url: "/",
                        label: "Neck warmer"
                    },
                    {
                        url: "/",
                        label: "Sweater"
                    },
                ]
            },
            {
                url: "/products/kids",
                label: "Kids",
                subCategories: [
                    {
                        url: "/",
                        label: "Winter hat"
                    },
                    {
                        url: "/",
                        label: "Neck warmer"
                    },
                    {
                        url: "/",
                        label: "Sweater"
                    },
                ]
            },
        ]
    },
]