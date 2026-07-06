import "./Categories.css";
import CategoryCard from "./CategoryCard";
import { categories } from "./CategoriesData";  

function Catergoriespreview() {
    return (
        <section className="categories-preview">

            <div className="categories-h">
            

            <div className="about-badge">
                <span>Categories Section</span>
                <div className="badge-design"></div>
            </div>

                <h2>Explore Our Collections</h2>
          
            </div>

            <div className="categories-cont">
                {categories.slice(0,3).map((item)=>(
                    <CategoryCard
                        key={item.id}
                        item={item}
                    />
                ))}

            </div>
</section>
);
}

export default Catergoriespreview;
 