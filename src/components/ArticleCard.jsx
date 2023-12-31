import { timeDiffToCurrentDate } from "../utils/utils";
import { Link } from "react-router-dom";
import Voting from "./Voting";
import CommentsCounter from "./CommentsCounter";

const ArticleCard = ({ article }) => {
  return (
    <article className="flex flex-col max-w-[650px] justify-center rounded-md border-solid border-x-0 md:mx-3 md:border-2 border-grey overflow-hidden w-full shadow-md">
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
          <h3 className="capitalize text-20 font-bold">{article.topic}</h3>
          <p className="m-2 text-14">
            Created {`${timeDiffToCurrentDate(article.created_at)} ago`}
          </p>
        </div>
        <Link to={`/articles/${article.article_id}`}>
          <div className="flex items-center flex-col">
            <h2 className="ml-2 text-18 font-semibold mb-4 opacity-90 group-hover:opacity-100 hover:text-[#d83367] transition-all">
              {article.title}
            </h2>
          </div>
        </Link>
        <div className="mt-4 flex justify-center gap-5 mb-4">
          <Voting votes={article.votes} article_id={article.article_id} />
          <Link to={`/articles/${article.article_id}`}>
            <CommentsCounter commentsAmount={article.comment_count}/>
          </Link>
        </div>
      </section>
    </article>
  );
};

export default ArticleCard;
