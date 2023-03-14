"use strict";

function App() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  let temp = [];
  const imageArray = [
    {
      team: "CETUS",
      url: "./assets/cetus.jpeg",
    },
    {
      team: "LUPUS",
      url: "./assets/lupus.png",
    },
    {
      team: "PEGASUS",
      url: "./assets/pegasus.jpg",
    },
    {
      team: "TAURUS",
      url: "./assets/taurus.jpeg",
    },
  ];
  async function fetchData() {
    await fetch(
      "https://expressjs-prisma-production-1d33.up.railway.app/events/getScores"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.score.length < 1) {
          setData([]);
        } else {
          temp = data.score;
          temp.sort((a, b) => {
            return b._sum.score - a._sum.score;
          });
          setData(temp);
          setLoading(false);
        }
      });
  }
  React.useEffect(() => {
    fetchData();
  }, []);
  function imageRetriever(team) {
    return imageArray.filter((img) => img.team === team)[0].url;
  }
  if (loading) return Loadingscreen;
  else {
    return (
      <div className="tilangWrapper">
        <a href="https://iedc.cce.edu.in">
          <button className="backbutton">BACK</button>
        </a>
        <div className="tilangInnerWrapper">
          <div className="tilangInnerTop">
            <Teamcard
              badge={"./assets/second.png"}
              name={data[1].team}
              points={data.length === 0 ? 0 : data[1]._sum.score}
              image={imageRetriever(data[1].team)}
            />
            <Teamcard
              badge={"./assets/first.png"}
              name={data[0].team}
              points={data.length === 0 ? 0 : data[0]._sum.score}
              image={imageRetriever(data[0].team)}
            />
            <Teamcard
              badge={"./assets/third.png"}
              name={data[2].team}
              points={data.length === 0 ? 0 : data[2]._sum.score}
              image={imageRetriever(data[2].team)}
            />
          </div>
          <div className="tilangInnerBottom">
            {data.map((data) => (
              <Tablesingle
                name={data.team}
                points={data._sum.score}
                image={imageRetriever(data.team)}
              />
            ))}
          </div>
        </div>
        <footer>
          <div>
            <img src="./assets/iedc.png" alt="" />
            <img src="./assets/cross.png" alt="" />
            <img src="./assets/iedc.png" alt="" />
          </div>
          <div>
            <small>TILANG 2023</small>
          </div>
        </footer>
      </div>
    );
  }
}
function Tablesingle({ image, name, points }) {
  return (
    <div className="tableTuple">
      <div>
        <img src={image} alt="" />
        <span>{name}</span>
      </div>
      <span>{points}</span>
    </div>
  );
}
function Teamcard({ image, name, points, badge }) {
  return (
    <div className="teamcardWrapper">
      <img src={image} alt="" className="logo" />
      <div>
        <span>{name}</span>
        <span>{points}</span>
      </div>
      <img src={badge} alt="" className="badge" />
    </div>
  );
}
function Loadingscreen() {
  return <div>loading</div>;
}
const rootNode = document.getElementById("tilangroot");
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App));
