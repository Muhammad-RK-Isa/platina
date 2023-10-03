export interface SubCategory {
    url: string
    label: string
}

export interface Category {
    url: string
    target: string
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
                target: "_self",
                label: "About Us"
            },
            {
                url: "/pages/contact",
                target: "_self",
                label: "Contact Us"
            },
            {
                url: "https://www.linkedin.com",
                target: "_self",
                label: "LinkedIn"
            },
            {
                url: "https://www.facebook.com/pixiewearofficial",
                target: "_blank",
                label: "Facebook"
            },
            {
                url: "https://www.instagram.com",
                target: "_blank",
                label: "Instagram"
            },
            {
                url: "https://www.youtube.com/@PixieWear",
                target: "_blank",
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
                target: "_self",
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
                target: "_self",
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
                target: "_self",
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