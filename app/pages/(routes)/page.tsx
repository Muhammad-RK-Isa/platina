import { navLinks } from "@/lib/nav-links";

const Pages = () => {
    return ( 
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
            {navLinks[1].categories?.map(({ url, label }) => (
                <div key={url} className="bg-secondary w-full h-40">
                    {label}
                </div>                
            ))}
        </div>
     );
}

export default Pages