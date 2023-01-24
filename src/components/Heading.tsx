export const Heading = () => {
  return (
    <div>
      <div className="p-3">
        <div className="logo"  >
          <a>
            <img src={require("../components/images/saketa-logo-horizontal.png")}  alt="" />
          </a>
          <div className="descript">
            <div style={{fontSize:"33px" ,color:"rgba(21,178,248,255)"}}>Employee Directory</div>
            <div className="description-bottom">
              <div style={{fontSize:"19px"}}>The Ultimate People Directory Experience</div>
              <div style={{fontSize:"26px",
                           textAlign:"right",   
                           marginLeft:"580px",
                           display:"flex"}}> <div style={{color:"rgba(21,178,248,255)"}}>Welcome,</div>
                           <div>Andrew Philips</div>  </div> 
            </div>
          </div>
          
        </div>

        
      </div>
    </div>
  );
};



