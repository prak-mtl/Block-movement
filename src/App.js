import React, { useState, useEffect } from "react";
import {
  DisplayCenter,
  Blankdiv,
  BlockOne,
  BlockTwo,
  OuterZone,
  InnerZone
} from "./styles";

export default function App(props) {
  const [block1, setBlock1] = useState([]);
  const [block1Color, setBlock1Color] = useState("#434343");
  const [block2, setBlock2] = useState([]);
  const [block2Color, setBlock2Color] = useState("#881b4c");
  const [mainblock, setMainblock] = useState([]);
  const [mainblockheader, setMainblockheader] = useState([]);

  function handleResize(id) {
    var eid = document.getElementById(id);
    var rect = eid.getBoundingClientRect();
    // console.log(
    //   "x",
    //   rect.x,
    //   "y",
    //   rect.y,
    //   "w",
    //   rect.width,
    //   "h",
    //   rect.height,
    //   "l",
    //   rect.left,
    //   "t",
    //   rect.top,
    //   "r",
    //   rect.right,
    //   "b",
    //   rect.bottom
    // );

    //setting position
    setPosition(id, rect);

    //setting color
    setColor(id, rect);

    //setting dimension
    setDimension(id, rect);
  }
  function setPosition(id, rect) {
    switch (id) {
      case "block1":
        setBlock1([rect.x, rect.y, rect.width, rect.height]);
        break;

      case "block2":
        setBlock2([rect.x, rect.y, rect.width, rect.height]);
        break;

      case "mainblock":
        setMainblock([rect.x, rect.y, rect.width, rect.height]);
        break;

      case "mainblockheader":
        setMainblockheader([rect.x, rect.y, rect.width, rect.height]);
        break;

      default:
        break;
    }
  }
  function setColor(id, rect) {
    if (
      rect.x > mainblockheader[0] &&
      rect.y > mainblockheader[1] &&
      rect.x < mainblockheader[0] + mainblockheader[2] &&
      rect.y < mainblockheader[1] + mainblockheader[3]
    ) {
      switch (id) {
        case "block1":
          setBlock1Color("#333faf");
          break;
        case "block2":
          setBlock2Color("#ee3faf");
          break;
        default:
          break;
      }
    } else if (
      rect.x > mainblock[0] &&
      rect.y > mainblock[1] &&
      rect.x < mainblock[0] + mainblock[2] &&
      rect.y < mainblock[1] + mainblock[3]
    ) {
      switch (id) {
        case "block1":
          setBlock1Color("#3ffeff");
          break;
        case "block2":
          setBlock2Color("#83ea32");
          break;
        default:
          break;
      }
    } else {
      switch (id) {
        case "block1":
          setBlock1Color("#434343");
          break;
        case "block2":
          setBlock2Color("#881b4c");
          break;
        default:
          break;
      }
    }
  }

  function setDimension(id, rect) {}

  useEffect(() => {
    dragElement(document.getElementById("block1"));
    dragElement(document.getElementById("block2"));
    dragElement(document.getElementById("mainblock"));

    var eid1 = document.getElementById("block1");
    var rect1 = eid1.getBoundingClientRect();
    setPosition("block1", rect1);

    var eid2 = document.getElementById("block2");
    var rect2 = eid2.getBoundingClientRect();
    setPosition("block2", rect2);

    var meid = document.getElementById("mainblock");
    var mrect = meid.getBoundingClientRect();
    setPosition("mainblock", mrect);

    var ieid = document.getElementById("mainblockheader");
    var irect = ieid.getBoundingClientRect();
    setPosition("mainblockheader", irect);
  }, []);

  function dragElement(elmnt) {
    var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;

    if (document.getElementById(elmnt.id + "header")) {
      /* if present, the header is where you move the DIV from:*/
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px"; // element's current X position
      elmnt.style.top = elmnt.offsetTop - pos2 + "px"; // element's current Y position
    }

    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

  return (
    <div>
      <BlockOne
        id="block1"
        block1Color={block1Color}
        onClick={() => handleResize("block1")}
      >
        <Blankdiv id="block1header">Click here to move block 1</Blankdiv>x = {block1[0]}{" "}
        y={block1[1]}
      </BlockOne>
      <BlockTwo
        id="block2"
        block2Color={block2Color}
        onClick={() => handleResize("block2")}
      >
        <Blankdiv id="block2header">Click here to move block 2</Blankdiv>x = {block2[0]}{" "}
        y={block2[1]}
      </BlockTwo>

      <DisplayCenter>
        <OuterZone id="mainblock" onClick={() => handleResize("mainblock")}>
          <InnerZone
            id="mainblockheader"
            onClick={() => handleResize("mainblockheader")}
          >
            x = {mainblockheader[0]} y={mainblockheader[1]}
          </InnerZone>
        </OuterZone>
      </DisplayCenter>
    </div>
  );
}
