import video from"../../images/1.mp4"
export default function GetStarted() {
  return <>
     <div id="hideDiv" className="getstarted">
      
      <div id="hideDiv" className="video-container position-fixed">
        <video autoPlay muted src={video}></video>
      </div>
    </div>
  </>
}
