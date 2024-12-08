import style from "./categories.module.css";

const {category,categoryImg,categoryTitle} = style;
const Category = () => {
  return (
    <div className={category}>
      <div className="categoryImg">
        <img src="https://cdn-eu.dynamicyield.com/api/9876644/images/cfb357649428__hp-w12-22032022-h_m-men.jpg"
         alt="photo" className={categoryImg}/>
      </div>
      <h4 className={categoryTitle}>Title</h4>
    </div>
  )
};

export default Category;
