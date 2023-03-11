"use strict";

function LikeButton() {
  async function fetchData() {
    await fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }
  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <button onClick={() => setLiked(true)}>
      <Hello />
    </button>
  );
}
function Hello() {
  return <div className="tarangWrapper"></div>;
}
const rootNode = document.getElementById("tarangroot");
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(LikeButton));
