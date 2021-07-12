import { useState } from "react";
import "./App.css";

function App() {
  const [background, setbackground] = useState({
    bgColor: "heading",
    code: "",
    font: "",
    fontCode: "",
    color: "",
    colorCode: "",
  });

  const changetoBlue = () => {
    setbackground({
      ...background,
      bgColor: "bgBlue",
      code: "background-color: blue;",
    });
  };
  const changetoGreen = () => {
    setbackground({
      ...background,
      bgColor: "bgGreen",
      code: "background-color: green;",
    });
  };
  const changetoRed = () => {
    setbackground({
      ...background,
      bgColor: "bgRed",
      code: "background-color: red;",
    });
  };

  return (
    <div className="app">
      <section
        className={`${background.color} ${background.font} ${background.bgColor}`}
      >
        <h1>Change text and generate Code!</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel iste
          ipsa quis distinctio error, dolorem molestias maxime praesentium?
          Labore sint ducimus voluptate eaque modi rerum fugiat aspernatur velit
          iste aperiam. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Vel iste ipsa quis distinctio error, dolorem molestias maxime
          praesentium? Labore sint ducimus voluptate eaque modi rerum fugiat
          aspernatur velit iste aperiam.Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Vel iste ipsa quis distinctio error, dolorem
          molestias maxime praesentium? Labore sint ducimus voluptate eaque modi
          rerum fugiat aspernatur velit iste aperiam.Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Vel iste ipsa quis distinctio error,
          dolorem molestias maxime praesentium? Labore sint ducimus voluptate
          eaque modi rerum fugiat aspernatur velit iste aperiam.
        </p>
      </section>

      <section className="main">
        <div className="btnGroup">
          <div className="bgButton">
            <lavel>Background Color : </lavel>
            <button onClick={changetoBlue} className="btn blue">
              Blue
            </button>
            <button onClick={changetoGreen} className="btn green">
              Green
            </button>
            <button onClick={changetoRed} className="btn red">
              Red
            </button>
          </div>
          <div className="bgButton">
            <lavel>Font Family : </lavel>
            <button
              onClick={() =>
                setbackground({
                  ...background,
                  font: "fontUbantu",
                  fontCode: "font-family:'Ubuntu';",
                })
              }
              className="btnFont"
            >
              UBANTU
            </button>
            <button
              onClick={() =>
                setbackground({
                  ...background,
                  font: "fontRoboto",
                  fontCode: "font-family:'Roboto';",
                })
              }
              className="btnFont"
            >
              ROBOTO
            </button>
            <button
              onClick={() =>
                setbackground({
                  ...background,
                  font: "fontCourir",
                  fontCode: "font-family:'Courier New';",
                })
              }
              className="btnFont"
            >
              COURIER NEW
            </button>
          </div>
          <div className="bgButton">
            <lavel>Font Family : </lavel>
            <button
              onClick={() =>
                setbackground({
                  ...background,
                  color: "colorCyan",
                  colorCode: "color: cyan;",
                })
              }
              className="btnColor cyan"
            >
              CYAN
            </button>
            <button
              onClick={() =>
                setbackground({
                  ...background,
                  color: "colorPurple",
                  colorCode: "color: purple;",
                })
              }
              className="btnColor purpel"
            >
              PURPLE
            </button>
            <button
              onClick={() =>
                setbackground({
                  ...background,
                  color: "colorBlack",
                  colorCode: " color: black;",
                })
              }
              className="btnColor black"
            >
              BLACK
            </button>
          </div>
          <div>
            <button
              onClick={() =>
                setbackground({
                  bgColor: "heading",
                  code: "",
                  font: "",
                  fontCode: "",
                  color: "",
                  colorCode: "",
                })
              }
              className="btnReset"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="code">
          <lavel>Code</lavel>
          <textarea
            value={background.code + background.fontCode + background.colorCode}
          ></textarea>
        </div>
      </section>
    </div>
  );
}

export default App;
