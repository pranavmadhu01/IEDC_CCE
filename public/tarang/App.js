"use strict";

function App() {
  // async function fetchData() {
  //   await fetch("https://official-joke-api.appspot.com/random_joke")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }
  // React.useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className="tilangWrapper">
      <div className="tilangInnerWrapper">
        <div className="tilangInnerTop">
          <Teamcard
            badge={"./assets/second.png"}
            name="CETUS"
            points={200}
            image={"./assets/second.png"}
          />
          <Teamcard
            badge={"./assets/first.png"}
            name="LUPUS"
            points={300}
            image={"./assets/second.png"}
          />
          <Teamcard
            badge={"./assets/third.png"}
            name="TAURUS"
            points={100}
            image={"./assets/second.png"}
          />
        </div>
        <div className="tilangInnerBottom">
          <Tablesingle
            name="CETUS"
            points={200}
            image={"./assets/second.png"}
          />
          <Tablesingle
            name="LUPUS"
            points={300}
            image={"./assets/second.png"}
          />
          <Tablesingle
            name="PEGASUS"
            points={100}
            image={"./assets/second.png"}
          />
          <Tablesingle
            name="TAURUS"
            points={50}
            image={"./assets/second.png"}
          />
        </div>
      </div>
    </div>
  );
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
      <img src={image} alt="" className="logo"/>
      <div>
        <span>{name}</span>
        <span>{points}</span>
      </div>
      <img src={badge} alt="" className="badge" />
    </div>
  );
}
const rootNode = document.getElementById("tilangroot");
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App));
