import Card from "../Card/Card";
import Filters from "../FilterBar/FIlters";
import Sidebar from "../SideBar/SideBar";
import style from './CardContainer.module.css'

const CardContainer = ({ currentGame }) => {
  return (
    <div className={style.container}>
      <div className={style.filter}>
        <Filters />
      </div>
      <div className={style.content}>
        <div className={style.sidebar}>
          <Sidebar />
        </div>
        <div className={style.cardContainer}>
          {currentGame.map((g) => {
            return (
              <Card
                key={g.id}
                id={g.id}
                name={g.name}
                background_image={g.background_image}
                genres={g.genres}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardContainer;