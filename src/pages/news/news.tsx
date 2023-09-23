import "./news.css";
import { useTranslation } from "react-i18next";
import InfoBox from "../../components/infoBoxComponent/infoBox";

const News = () => {
  const { t } = useTranslation();
  
  function newsOnClick(content:string){
//TODO: lightbox açılacak.
alert(content);
  }

  return (
  <>
    <h1>{t("NEWS")}</h1>;
    <div className="container news">

      <div className="row">
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage27", className:"deneme", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>
        {/* <div className="col-md-3">
          <a href="#"><img className="img-fluid" src="http://garabetfilms.com/wp-content/uploads/2023/03/27.jpeg" /></a>
        </div> */}
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage26", className:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage25", className:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage24", className:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>        
      </div>
      
      <div className="row mt-4">
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage23", className:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage22", className:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage21", className:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>  
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage20", className:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>  
      </div>

      <div className="row mt-4">
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage19", className:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage18", className:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage17", className:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>  
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage16", className:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>  
      </div>

      <div className="row mt-4">
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage15", className:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage14", className:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage13", className:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>  
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage12", className:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>  
      </div>

      <div className="row mt-4">
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage11", className:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage10", className:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage9", className:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>  
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage8", className:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>  
      </div>

      <div className="row mt-4">
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage7", className:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage6", className:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage5", className:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>  
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage4", className:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>  
      </div>

      <div className="row mt-4">
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage3", className:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage2", className:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage1", className:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>  
      </div>
    </div>
  </>
  );
};

export default News;
