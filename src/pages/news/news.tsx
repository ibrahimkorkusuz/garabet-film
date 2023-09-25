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
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage27", imagelassName:"deneme", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>
        {/* <div className="col-md-3">
          <a href="#"><img className="img-fluid" src="http://garabetfilms.com/wp-content/uploads/2023/03/27.jpeg" /></a>
        </div> */}
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage26", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage25", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage24", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>        
      </div>
      
      <div className="row mt-4">
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage23", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage22", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage21", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>  
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage20", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>  
      </div>

      <div className="row mt-4">
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage19", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage18", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage17", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>  
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage16", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>  
      </div>

      <div className="row mt-4">
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage15", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage14", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage13", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>  
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage12", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>  
      </div>

      <div className="row mt-4">
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage11", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage10", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage9", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>  
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage8", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>  
      </div>

      <div className="row mt-4">
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage7", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage6", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage5", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>  
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage4", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>  
      </div>

      <div className="row mt-4">
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage3", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage2", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage1", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("--test--")}></InfoBox>  
      </div>
    </div>
  </>
  );
};

export default News;
