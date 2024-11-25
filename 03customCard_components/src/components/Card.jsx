const Card = ({ name = "none", img = "" }) => {
  return (
    <>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src={img}
          alt="Sarah Dayan"
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4 text-center">
          <blockquote>
            <p className="text-lg font-medium">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Officiis, rem.
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{name}</div>
            <div className="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>
    </>
  );
};

export default Card;
