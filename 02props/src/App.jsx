import Cart from "./component/Cart";
function App() {
  let myObj = {
    username: "ajit",
    age: 22,
  };
  return (
    <>
      <div className="p-10 m-10 ">
        <h1 className="bg-violet-500 text-white p-4 rounded-xl">Click Me</h1>
        <div className="flex justify-evenly">
          <Cart username="yoyo" someObj={myObj} profile=" Profile" />
          <Cart username="kiko" profile="vist Profile" />
        </div>
      </div>
    </>
  );
}

export default App;
