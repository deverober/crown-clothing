import './categories.styles.scss'
import CategoryItem from '../category-item/category-component-item';

const Categories = ({ categories }) => {
    return (
        <div className="categories-container">
            {
                categories.map((category) => {
                    return (
                        <CategoryItem key={category.id} {...category} />
                    )
                })
            }
        </div>
    );
}

export default Categories