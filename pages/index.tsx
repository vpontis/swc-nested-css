import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <div className={"container"}>
        <div className="square" />
        <div>hi</div>
      </div>

      <style jsx>{`
        .container {
          background-color: blue;
          & .square {
            background: green;
          }
        }

        .square {
          height: 200px;
          width: 200px;
          background: red;
        }
      `}</style>
    </div>
  );
};

export default Home;
