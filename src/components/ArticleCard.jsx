import { timeDiffToCurrentDate } from "../utils/utils";
import { Link } from "react-router-dom";
import { useState } from "react";

const ArticleCard = ({ article }) => {
  const [adjustVote, setAdjustVote] = useState(0);
  const [currVotes, setCurrVotes] = useState(article.votes);

  const handleClick = (e) => {
    console.log(e.target.value);
  }

  return (
    <article className="flex flex-col max-w-[650px] justify-center rounded-md border-solid border-x-0 md:mx-3 md:border-2 border-grey overflow-hidden w-full">
      <section className="flex-col flex-grow group">
        <Link to={`/articles/${article.article_id}`}>
          <img
            className="self-center w-full h-48 object-center object-none"
            src={article.article_img_url}
            alt={article.title}
          />
        </Link>
        <div className="flex items-center flex-row justify-evenly mb-4">
          <p className="m-2 text-14">Posted by {article.author}</p>
          <h3 className="text-20 font-bold">{article.topic}</h3>
          <p className="m-2 text-14">
            Created {`${timeDiffToCurrentDate(article.created_at)} ago`}
          </p>
        </div>
        <Link to={`/articles/${article.article_id}`}>
          <div className="flex items-center flex-col">
            <h2 className="text-18 font-semibold mb-4 opacity-90 group-hover:opacity-100 group-hover:text-[#d83367] transition-all">
              {article.title}
            </h2>
          </div>
        </Link>
        <div className="mt-4 flex justify-center gap-5 mb-4">
          <div className="text-14 flex flex-col text-center">
            <button onClick={handleClick}>⬆️</button>
            <p>Votes</p>
            <p>{article.votes}</p>
            <button onClick={handleClick}>⬇️</button>
          </div>
          <div className="text-14 flex flex-col text-center">
            <p>Comments </p>
            <p>{article.comment_count}</p>
          </div>
        </div>
      </section>
    </article>
  );
};

export default ArticleCard;
