import { useState } from "react";
import { BiLeftArrowCircle } from "react-icons/bi";
import { BiRightArrowCircle } from "react-icons/bi";

import styles from "../../styles/Home.module.scss";

const NEWS_DATA = [
  {
    id: 1,
    title: "Title 1",
    content: "content 1",
  },
  {
    id: 2,
    title: "Title 2",
    content: "content 2",
  },
  {
    id: 3,
    title: "Title 3",
    content: "content 3",
  },
  {
    id: 4,
    title: "Title 4",
    content: "content 4",
  },
  {
    id: 5,
    title: "Title 5",
    content: "content 5",
  },
  {
    id: 6,
    title: "Title 6",
    content: "content 6",
  },
  {
    id: 7,
    title: "Title 7",
    content: "content 7",
  },
  {
    id: 8,
    title: "Title 8",
    content: "content 8",
  },
];

const OurLatestNews = () => {
  const defaultShownNewsIDs = [1, 2, 3, 4];
  const [shownNewsIDs, setShownNewsIDs] = useState(defaultShownNewsIDs);
  const currentNews = shownNewsIDs.map((id) =>
    NEWS_DATA.find((element) => element.id === id)
  );

  const onNewsNavigate = (direction = "forward") => {
    const firstShownIndex = NEWS_DATA.findIndex(
      (newsElement) => newsElement.id === currentNews[0].id
    );

    const lastShownIndex = NEWS_DATA.findIndex(
      (newsElement) => newsElement.id === currentNews[currentNews.length - 1].id
    );

    const lastIndex = NEWS_DATA.length - 1;
    if (direction === "forward") {
      if (lastShownIndex === lastIndex) {
        const newShownIDs = [
          shownNewsIDs[1],
          shownNewsIDs[2],
          shownNewsIDs[3],
          NEWS_DATA[0].id,
        ];
        setShownNewsIDs(newShownIDs);
      } else {
        setShownNewsIDs((prevState) => {
          const lastElementIndex =
            NEWS_DATA.findIndex((element) => element.id === prevState[3]) + 1;
          const lastElement = NEWS_DATA[lastElementIndex].id;
          return [prevState[1], prevState[2], prevState[3], lastElement];
        });
      }
    } else {
      if (firstShownIndex === 0) {
        const newShownIDs = [
          NEWS_DATA[lastIndex].id,
          shownNewsIDs[0],
          shownNewsIDs[1],
          shownNewsIDs[2],
        ];
        setShownNewsIDs(newShownIDs);
      } else {
        setShownNewsIDs((prevState) => {
          const firstIndex =
            NEWS_DATA.findIndex((element) => element.id === prevState[0]) - 1;
          const firstElement = NEWS_DATA[firstIndex].id;
          return [firstElement, prevState[0], prevState[1], prevState[2]];
        });
      }
    }
  };

  const NewsItem = ({ item }) => {
    return (
      <div className={styles.newsItem}>
        <h4>{item.title}</h4>
        <div>{item.content}</div>
      </div>
    );
  };
  return (
    <div className={styles.ourLatestNews}>
      <div className={`${styles.arrow} ${styles.leftArrow}`}>
        <BiLeftArrowCircle
          size={60}
          onClick={() => onNewsNavigate("backward")}
        />
      </div>
      <div className="tfp-title">OUR LATEST NEWS</div>

      <div className={styles.newsContainer}>
        {currentNews.map((news) => (
          <NewsItem item={news} />
        ))}
      </div>

      <div className={`${styles.arrow} ${styles.rightArrow}`}>
        <BiRightArrowCircle
          size={60}
          onClick={() => onNewsNavigate("forward")}
        />
      </div>
    </div>
  );
};

export default OurLatestNews;
