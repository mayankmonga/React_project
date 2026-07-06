import "./CategoryCard.css";

function CategoryCard({ item }) {

    return(

        <div className="category-card">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
        </div>

    )

}

export default CategoryCard;
       