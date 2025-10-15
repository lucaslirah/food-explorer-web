import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { Container, Banner } from "../Home/styles.js";
import { Section } from "../../components/Section";
import { DishCard } from "../../components/DishCard";

import { useDishes } from "../../hooks/dishes.jsx";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import bannerMacarons from "../../assets/banner-macarons.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export function Home() {
  const { dishes, fetchDishes } = useDishes();

  const [meals, setMeals] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const mealsDishes = dishes.filter((dish) => dish.type == "meal");
    const dessertsDishes = dishes.filter((dish) => dish.type == "dessert");
    const drinksDishes = dishes.filter((dish) => dish.type == "drink");

    setMeals(mealsDishes);
    setDesserts(dessertsDishes);
    setDrinks(drinksDishes);
  }, [dishes]);

  useEffect(() => {
    fetchDishes();
  }, []);

  return (
    <Container>
      <Header />
      <main>
        <Banner>
          <div className="rec_banner">
            <div>
              <h1>Sabores inigualáveis</h1>
              <span>
                Sinta o cuidado do preparo com ingredientes selecionados
              </span>
            </div>
          </div>
          <img src={bannerMacarons} className="img-banner" />
        </Banner>

        {meals.length > 0 && (
          <Section title="Refeições">
            <Swiper
              // install Swiper modules
              // modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={10}
              slidesPerView={3.5}
              navigation
            >
              <SwiperSlide className="slide_item">
                <DishCard />
              </SwiperSlide>
              {meals.map((meal) => (
                <SwiperSlide className="slide_item" key={String(meal.id)}>
                  <DishCard key={String(meal.id)} data={meal} />
                </SwiperSlide>
              ))}
              <SwiperSlide className="slide_item">
                <DishCard />
              </SwiperSlide>
            </Swiper>
          </Section>
        )}

        {desserts.length > 0 && (
          <Section title="Sobremesas">
            <Swiper
              // install Swiper modules
              // modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={10}
              slidesPerView={3.5}
              navigation
            >
              <SwiperSlide className="slide_item">
                <DishCard />
              </SwiperSlide>
              {desserts.map((dessert) => (
                <SwiperSlide className="slide_item" key={String(dessert.id)}>
                  <DishCard key={String(dessert.id)} data={dessert} />
                </SwiperSlide>
              ))}
              <SwiperSlide className="slide_item">
                <DishCard />
              </SwiperSlide>
            </Swiper>
          </Section>
        )}

        {drinks.length > 0 && (
          <Section title="Bebidas">
            <Swiper
              // install Swiper modules
              // modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={5}
              slidesPerView={3.5}
              navigation
            >
              <SwiperSlide className="slide_item">
                <DishCard />
              </SwiperSlide>

              {drinks.map((drink) => (
                <SwiperSlide className="slide_item" key={String(drink.id)}>
                  <DishCard key={String(drink.id)} data={drink} />
                </SwiperSlide>
              ))}

              <SwiperSlide className="slide_item">
                <DishCard />
              </SwiperSlide>
            </Swiper>
          </Section>
        )}
      </main>
      <Footer />
    </Container>
  );
}
