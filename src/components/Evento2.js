import estilos from "./Evento2.module.css";
function Evento2js({ video }) {
  function aparecerItem() {
    const idd2 = (document.querySelector("#msg").style.visibility = "hidden");
    const rap = (document.querySelector("#rapDoffy").style.visibility =
      "visible");
    const idd = (document.querySelector("#massa").style.visibility = "visible");

    setTimeout((msgHidden) => {
      const idd = (document.querySelector("#massa").style.visibility =
        "hidden");
    }, 3000);

    setTimeout((msg2) => {
      const idd2 = (document.querySelector("#msg").style.visibility =
        "visible");
    }, 3000);

    alert("oi");
  }

  if(video.length>=35){

    video=video.substring(0,43)
    console.log("maior q 35")

  }

  let videoConvertido =
    video.slice(0, 23) + "/embed/" + video.slice(32, 48);
  video = videoConvertido;
  console.log(video)

  return (
    <>
      <button id={estilos["btn"]} onClick={aparecerItem}>
        Me aperte!
      </button>
      <p className={estilos.msg} id="massa">
        Oie! Você me chamou e eu apareci aqui
      </p>
      <p className={estilos.msg} id="msg">
        Ela foi embora mas eu to aqui agorakk
      </p>
      <iframe
        width="560"
        height="315"
        src={video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>{" "}
    </>
  );
}

export default Evento2js;
