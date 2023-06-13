import React from "react";

const Gallery = () => {
  const CopyClipBoard = text => {
    try {
      navigator.clipboard.writeText(text);
      alert("클립보드에 복사되었습니다.");
    } catch (error) {
      alert("클립보드 복사에 실패하였습니다.");
    }
  };
  return (
    <div className="gallery">
      <button
        id="copybtn1"
        onClick={() => CopyClipBoard("https://i.pinimg.com/564x/b5/eb/5d/b5eb5da172b302e215ddb1b884e914ee.jpg")}
        title="주소 복사"
      >
        <img src="https://i.pinimg.com/564x/b5/eb/5d/b5eb5da172b302e215ddb1b884e914ee.jpg" alt="" />
      </button>
      <button
        id="copybtn2"
        onClick={() => CopyClipBoard("https://i.pinimg.com/564x/f9/51/03/f951037f761c361eecce5a678b5d545b.jpg")}
        title="주소 복사"
      >
        <img src="https://i.pinimg.com/564x/f9/51/03/f951037f761c361eecce5a678b5d545b.jpg" alt="" />
      </button>
      <button
        id="copybtn3"
        onClick={() => CopyClipBoard("https://i.pinimg.com/564x/29/27/28/2927288c5e4cac78fd18d4bafdbffce6.jpg")}
        title="주소 복사"
      >
        <img src="https://i.pinimg.com/564x/29/27/28/2927288c5e4cac78fd18d4bafdbffce6.jpg" alt="" />
      </button>
      <button
        id="copybtn4"
        onClick={() => CopyClipBoard("https://i.pinimg.com/564x/59/d8/65/59d865e67d778bafa2c8ff27df2cb1a9.jpg")}
        title="주소 복사"
      >
        <img src="https://i.pinimg.com/564x/59/d8/65/59d865e67d778bafa2c8ff27df2cb1a9.jpg" alt="" />
      </button>
      <button
        id="copybtn5"
        onClick={() => CopyClipBoard("https://i.pinimg.com/736x/76/90/6e/76906e5b8d665381079bf79d70156a5e.jpg")}
        title="주소 복사"
      >
        <img src="https://i.pinimg.com/736x/76/90/6e/76906e5b8d665381079bf79d70156a5e.jpg" alt="" />
      </button>
      <button
        id="copybtn6"
        onClick={() => CopyClipBoard("https://i.pinimg.com/736x/68/fa/25/68fa2579d95d9359505796049ed36c30.jpg")}
        title="주소 복사"
      >
        <img src="https://i.pinimg.com/736x/68/fa/25/68fa2579d95d9359505796049ed36c30.jpg" alt="" />
      </button>
      <button
        id="copybtn7"
        onClick={() => CopyClipBoard("https://i.pinimg.com/564x/c7/7a/18/c77a18693ef2fd3a1a3d352ffacc2ac3.jpg")}
        title="주소 복사"
      >
        <img src="https://i.pinimg.com/564x/c7/7a/18/c77a18693ef2fd3a1a3d352ffacc2ac3.jpg" alt="" />
      </button>
      <button
        id="copybtn8"
        onClick={() => CopyClipBoard("https://i.pinimg.com/736x/1f/e1/ac/1fe1ac75be73556327856666915acc66.jpg")}
        title="주소 복사"
      >
        <img src="https://i.pinimg.com/736x/1f/e1/ac/1fe1ac75be73556327856666915acc66.jpg" alt="" />
      </button>
      <button
        id="copybtn9"
        onClick={() => CopyClipBoard("https://i.pinimg.com/564x/1d/b5/2c/1db52c4ec785b9f2c4ef849301781bab.jpg")}
        title="주소 복사"
      >
        <img src="https://i.pinimg.com/564x/1d/b5/2c/1db52c4ec785b9f2c4ef849301781bab.jpg" alt="" />
      </button>
      <button
        id="copybtn10"
        onClick={() => CopyClipBoard("https://i.pinimg.com/736x/10/4f/f2/104ff297e9f9bd8cdfc810b5a8ddfdf6.jpg")}
        title="주소 복사"
      >
        <img src="https://i.pinimg.com/736x/10/4f/f2/104ff297e9f9bd8cdfc810b5a8ddfdf6.jpg" alt="" />
      </button>
    </div>
  );
};

export default Gallery;
