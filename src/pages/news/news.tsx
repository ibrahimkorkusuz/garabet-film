import "./news.css";
import { useTranslation } from "react-i18next";
import InfoBox from "../../components/infoBoxComponent/infoBox";
import { useEffect, useState } from "react";
import { render } from "@testing-library/react";

const News = () => {
  const { t } = useTranslation();
  const [modalID, setModalID]=useState("none");
  
  function newsOnClick(modalID:string){
//TODO: lightbox açılacak.
setModalID(modalID);  
  }
  useEffect(()=>{console.log(modalID)},[modalID]);

  return (
  <>
    <div className="news container content-body">

      <div className="row">
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage27", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("news27")}></InfoBox>    
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage26", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("news26")}></InfoBox>
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage25", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("news25")}></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage24", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("news24")}></InfoBox>        
      </div>
      
      <div className="row mt-2">
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage23", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("news23")}></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage22", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("news22")}></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage21", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("news21")}></InfoBox>  
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage20", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("news20")}></InfoBox>  
      </div>

      <div className="row mt-2">
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage19", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("news19")}></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage18", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("news18")}></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage17", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("news17")}></InfoBox>  
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage16", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("news16")}></InfoBox>  
      </div>

      <div className="row mt-2">
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage15", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("news15")}></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage14", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("news14")}></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage13", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("news13")}></InfoBox>  
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage12", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("news12")}></InfoBox>  
      </div>

      <div className="row mt-2">
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage11", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("news11")}></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage10", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("news10")}></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage9", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("news9")}></InfoBox>  
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage8", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("news8")}></InfoBox>  
      </div>

      <div className="row mt-2">
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage7", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("news7")}></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage6", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("news6")}></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage5", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("news5")}></InfoBox>  
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage4", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("news4")}></InfoBox>  
      </div>

      <div className="row mt-2">
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage3", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("news3")}></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage2", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("news2")}></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3" icon={{name:"bultenImage1", imageClassName:"img-fluid"}} onClick={()=>newsOnClick("news1")}></InfoBox>  
      </div>

      {/* News 27 Detay Content */}
      {modalID==="news27" ? 
      (<div className="modal fade show block" id="news27" aria-hidden="false">
        <div className="modal-dialog modal-detay-dialog">
          <div className="modal-content modal-detay-content">
            <div className="modal-header modal-detay">
              <h2>{t("newsTitle27")}</h2>
              <button type="button" className="btn-close" onClick={()=>{setModalID("none")}} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>{t("newsDetay27")}</p>
            </div>
          </div>
        </div>
      </div>) :modalID==="news26"?

     ( 
      <div className="modal fade show block" id="news26" aria-hidden="false">
        <div className="modal-dialog modal-detay-dialog">
          <div className="modal-content modal-detay-content">
            <div className="modal-header modal-detay">
              <h2>{t("newsTitle26")}</h2>
              <button type="button" className="btn-close" onClick={()=>{setModalID("none")}} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>{t("newsDetay26")}</p>
            </div>
          </div>
        </div>
      </div> ):modalID==="news25"?

      (<div className="modal fade show block" id="news25" aria-hidden="false">
      <div className="modal-dialog modal-detay-dialog">
        <div className="modal-content modal-detay-content">
          <div className="modal-header modal-detay">
            <h2>{t("newsTitle25")}</h2>
            <button type="button" className="btn-close" onClick={()=>{setModalID("none")}} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>{t("newsDetay25")}</p>
          </div>
        </div>
      </div>
      </div> ):modalID==="news24"?

      (
      <div className="modal fade show block" id="news24" aria-hidden="false">
      <div className="modal-dialog modal-detay-dialog">
        <div className="modal-content modal-detay-content">
          <div className="modal-header modal-detay">
            <h2>{t("newsTitle24")}</h2>
            <button type="button" className="btn-close" onClick={()=>{setModalID("none")}} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>{t("newsDetay24")}</p>
          </div>
        </div>
      </div>
      </div>):modalID==="news23"?

      (<div className="modal fade show block" id="news23" aria-hidden="false">
      <div className="modal-dialog modal-detay-dialog">
        <div className="modal-content modal-detay-content">
          <div className="modal-header modal-detay">
            <h2>{t("newsTitle23")}</h2>
            <button type="button" className="btn-close" onClick={()=>{setModalID("none")}} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>{t("newsDetay23")}</p>
          </div>
        </div>
      </div>
      </div>  ):modalID==="news22"?
      (
      <div className="modal fade show block" id="news22" aria-hidden="false">
      <div className="modal-dialog modal-detay-dialog">
        <div className="modal-content modal-detay-content">
          <div className="modal-header modal-detay">
            <h2>{t("newsTitle22")}</h2>
            <button type="button" className="btn-close" onClick={()=>{setModalID("none")}} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>{t("newsDetay22")}</p>
          </div>
        </div>
      </div>
      </div>  ):modalID==="news21"?
      (<div className="modal fade show block" id="news21" aria-hidden="false">
      <div className="modal-dialog modal-detay-dialog">
        <div className="modal-content modal-detay-content">
          <div className="modal-header modal-detay">
            <h2>{t("newsTitle21")}</h2>
            <button type="button" className="btn-close" onClick={()=>{setModalID("none")}} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>{t("newsDetay21")}</p>
          </div>
        </div>
      </div>
      </div> ):modalID==="news20"?
      (<div className="modal fade show block" id="news20" aria-hidden="false">
      <div className="modal-dialog modal-detay-dialog">
        <div className="modal-content modal-detay-content">
          <div className="modal-header modal-detay">
            <h2>{t("newsTitle20")}</h2>
            <button type="button" className="btn-close" onClick={()=>{setModalID("none")}} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>{t("newsDetay20")}</p>
          </div>
        </div>
      </div>
      </div>) :modalID==="news19"?
      (<div className="modal fade show block" id="news19" aria-hidden="false">
      <div className="modal-dialog modal-detay-dialog">
        <div className="modal-content modal-detay-content">
          <div className="modal-header modal-detay">
            <h2>{t("newsTitle19")}</h2>
            <button type="button" className="btn-close" onClick={()=>{setModalID("none")}} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>{t("newsDetay19")}</p>
          </div>
        </div>
      </div>
      </div> ):modalID==="news18"?
      ( <div className="modal fade show block" id="news18" aria-hidden="false">
      <div className="modal-dialog modal-detay-dialog">
        <div className="modal-content modal-detay-content">
          <div className="modal-header modal-detay">
            <h2>{t("newsTitle18")}</h2>
            <button type="button" className="btn-close" onClick={()=>{setModalID("none")}} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>{t("newsDetay18")}</p>
          </div>
        </div>
      </div>
      </div> ):modalID==="news17"?
      (<div className="modal fade show block" id="news17" aria-hidden="false">
      <div className="modal-dialog modal-detay-dialog">
        <div className="modal-content modal-detay-content">
          <div className="modal-header modal-detay">
            <h2>{t("newsTitle17")}</h2>
            <button type="button" className="btn-close" onClick={()=>{setModalID("none")}} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>{t("newsDetay17")}</p>
          </div>
        </div>
      </div>
      </div> ):modalID==="news16"?
      (<div className="modal fade show block" id="news16" aria-hidden="false">
      <div className="modal-dialog modal-detay-dialog">
        <div className="modal-content modal-detay-content">
          <div className="modal-header modal-detay">
            <h2>{t("newsTitle16")}</h2>
            <button type="button" className="btn-close" onClick={()=>{setModalID("none")}} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>{t("newsDetay16")}</p>
          </div>
        </div>
      </div>
      </div> ):modalID==="news15"?
      (<div className="modal fade show block" id="news15" aria-hidden="false">
      <div className="modal-dialog modal-detay-dialog">
        <div className="modal-content modal-detay-content">
          <div className="modal-header modal-detay">
            <h2>{t("newsTitle15")}</h2>
            <button type="button" className="btn-close" onClick={()=>{setModalID("none")}} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>{t("newsDetay15")}</p>
          </div>
        </div>
      </div>
      </div>) :modalID==="news14"?
      ( <div className="modal fade show block" id="news14" aria-hidden="false">
      <div className="modal-dialog modal-detay-dialog">
        <div className="modal-content modal-detay-content">
          <div className="modal-header modal-detay">
            <h2>{t("newsTitle14")}</h2>
            <button type="button" className="btn-close" onClick={()=>{setModalID("none")}} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>{t("newsDetay14")}</p>
          </div>
        </div>
      </div>
      </div> ):modalID==="news13"?
      (<div className="modal fade show block" id="news13" aria-hidden="false">
      <div className="modal-dialog modal-detay-dialog">
        <div className="modal-content modal-detay-content">
          <div className="modal-header modal-detay">
            <h2>{t("newsTitle13")}</h2>
            <button type="button" className="btn-close" onClick={()=>{setModalID("none")}} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>{t("newsDetay13")}</p>
          </div>
        </div>
      </div>
      </div> ):modalID==="news12"?
      ( <div className="modal fade show block" id="news12" aria-hidden="false">
      <div className="modal-dialog modal-detay-dialog">
        <div className="modal-content modal-detay-content">
          <div className="modal-header modal-detay">
            <h2>{t("newsTitle12")}</h2>
            <button type="button" className="btn-close" onClick={()=>{setModalID("none")}} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>{t("newsDetay12")}</p>
          </div>
        </div>
      </div>
      </div> ):modalID==="news11"?
      (<div className="modal fade show block" id="news11" aria-hidden="false">
      <div className="modal-dialog modal-detay-dialog">
        <div className="modal-content modal-detay-content">
          <div className="modal-header modal-detay">
            <h2>{t("newsTitle11")}</h2>
            <button type="button" className="btn-close" onClick={()=>{setModalID("none")}} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>{t("newsDetay11")}</p>
          </div>
        </div>
      </div>
      </div> ):modalID==="news10"?
      ( <div className="modal fade show block" id="news10" aria-hidden="false">
      <div className="modal-dialog modal-detay-dialog">
        <div className="modal-content modal-detay-content">
          <div className="modal-header modal-detay">
            <h2>{t("newsTitle10")}</h2>
            <button type="button" className="btn-close" onClick={()=>{setModalID("none")}} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>{t("newsDetay10")}</p>
          </div>
        </div>
      </div>
      </div> ):modalID==="news9"?
      (<div className="modal fade show block" id="news9" aria-hidden="false">
      <div className="modal-dialog modal-detay-dialog">
        <div className="modal-content modal-detay-content">
          <div className="modal-header modal-detay">
            <h2>{t("newsTitle9")}</h2>
            <button type="button" className="btn-close" onClick={()=>{setModalID("none")}} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>{t("newsDetay9")}</p>
          </div>
        </div>
      </div>
      </div> ):modalID==="news8"?(
      <div className="modal fade show block" id="news8" aria-hidden="false">
      <div className="modal-dialog modal-detay-dialog">
        <div className="modal-content modal-detay-content">
          <div className="modal-header modal-detay">
            <h2>{t("newsTitle8")}</h2>
            <button type="button" className="btn-close" onClick={()=>{setModalID("none")}} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>{t("newsDetay8")}</p>
          </div>
        </div>
      </div>
      </div>):modalID==="news7"?
      (<div className="modal fade show block" id="news7" aria-hidden="false">
      <div className="modal-dialog modal-detay-dialog">
        <div className="modal-content modal-detay-content">
          <div className="modal-header modal-detay">
            <h2>{t("newsTitle7")}</h2>
            <button type="button" className="btn-close" onClick={()=>{setModalID("none")}} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>{t("newsDetay7")}</p>
          </div>
        </div>
      </div>
      </div>) :modalID==="news6"?
      (<div className="modal fade show block" id="news6" aria-hidden="false">
      <div className="modal-dialog modal-detay-dialog">
        <div className="modal-content modal-detay-content">
          <div className="modal-header modal-detay">
            <h2>{t("newsTitle6")}</h2>
            <button type="button" className="btn-close" onClick={()=>{setModalID("none")}} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>{t("newsDetay6")}</p>
          </div>
        </div>
      </div>
      </div> ) :modalID==="news5"?
      (  <div className="modal fade show block" id="news5" aria-hidden="false">
      <div className="modal-dialog modal-detay-dialog">
        <div className="modal-content modal-detay-content">
          <div className="modal-header modal-detay">
            <h2>{t("newsTitle5")}</h2>
            <button type="button" className="btn-close" onClick={()=>{setModalID("none")}} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>{t("newsDetay5")}</p>
          </div>
        </div>
      </div>
      </div> )
      :modalID==="news4"?
      ( <div className="modal fade show block" id="news4" aria-hidden="false">
      <div className="modal-dialog modal-detay-dialog">
        <div className="modal-content modal-detay-content">
          <div className="modal-header modal-detay">
            <h2>{t("newsTitle4")}</h2>
            <button type="button" className="btn-close" onClick={()=>{setModalID("none")}} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>{t("newsDetay4")}</p>
          </div>
        </div>
      </div>
      </div> ):modalID==="news3"?
      (<div className="modal fade show block" id="news3" aria-hidden="false">
      <div className="modal-dialog modal-detay-dialog">
        <div className="modal-content modal-detay-content">
          <div className="modal-header modal-detay">
            <h2>{t("newsTitle3")}</h2>
            <button type="button" className="btn-close" onClick={()=>{setModalID("none")}} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>{t("newsDetay3")}</p>
          </div>
        </div>
      </div>
      </div> ):modalID==="news2"?
      ( <div className="modal fade show block" id="news2" aria-hidden="false">
      <div className="modal-dialog modal-detay-dialog">
        <div className="modal-content modal-detay-content">
          <div className="modal-header modal-detay">
            <h2>{t("newsTitle2")}</h2>
            <button type="button" className="btn-close" onClick={()=>{setModalID("none")}} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>{t("newsDetay2")}</p>
          </div>
        </div>
      </div>
      </div> ):modalID==="news1"?
      (<div className="modal fade show block" id="news1" aria-hidden="false">
      <div className="modal-dialog modal-detay-dialog">
        <div className="modal-content modal-detay-content">
          <div className="modal-header modal-detay">
            <h2>{t("newsTitle1")}</h2>
            <button type="button" className="btn-close" onClick={()=>{setModalID("none")}} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>{t("newsDetay1")}</p>
          </div>
        </div>
      </div>
      </div> ):<div></div>}

    </div>
  </>
  );
};

export default News;
