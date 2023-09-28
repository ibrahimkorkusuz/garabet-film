import "./crew.css";
import { useTranslation } from "react-i18next";
import InfoBox from "../../components/infoBoxComponent/infoBox";
import Icon from "../../assets/icon";

const Crew = () => {
  const { t } = useTranslation();

  function newsOnClick(detail: any) {
    alert(detail);
  }

  return (
    <div className="container content-body">
      <div className="row">
        {/* <Icon name="golge" imageClassName="img-fluid"/>  */}
        <InfoBox header="" content="" containerClassName="col-md-3 crew" icon={{name:"berfinYasar", imageClassName:"img-fluid"}} detail={{name:"Berfin Yaşar", title:"Director"}} infoBoxDetailClassName="detail-class"></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3 crew" icon={{name:"ozerOnder", imageClassName:"img-fluid"}}detail={{name:"Özer Önder", title:"Tretment Writer"}} infoBoxDetailClassName="detail-class"></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3 crew" icon={{name:"abdullahUgurlu", imageClassName:"img-fluid",}}detail={{name:"Abdullatif Ugurlu", title:"Graphic Designer"}} infoBoxDetailClassName="detail-class"></InfoBox> 
        <InfoBox header="" content="" containerClassName="col-md-3 crew" icon={{name:"alpSeker", imageClassName:"img-fluid"}} detail={{name:"Alp Şeker", title:"Photographer"}} infoBoxDetailClassName="detail-class"></InfoBox>        
      </div>

      <div className="row">
        <InfoBox header="" content="" containerClassName="col-md-3 crew" icon={{name:"selenOzturk", imageClassName:"img-fluid"}}detail={{name:"Selen Öztürk", title:"Producer"}} infoBoxDetailClassName="detail-class"></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3 crew" icon={{name:"oguzhanInce", imageClassName:"img-fluid",}}detail={{name:"Oguzhan İnceogulları", title:"Director of Photography"}} infoBoxDetailClassName="detail-class"></InfoBox> 
        <InfoBox header="" content="" containerClassName="col-md-3 crew" icon={{name:"sevincKaratas", imageClassName:"img-fluid"}} detail={{name:"Sevinç Karataş", title:"Videographer"}} infoBoxDetailClassName="detail-class"></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3 crew" icon={{name:"dilanEngin", imageClassName:"img-fluid"}}detail={{name:"DİLAN ENGİN", title:"Dialog Writer"}} infoBoxDetailClassName="detail-class"></InfoBox>        
      </div>

      <div className="row">
       <InfoBox header="" content="" containerClassName="col-md-3 crew" icon={{name:"bahadirOzdemir", imageClassName:"img-fluid",}}detail={{name:"Bahadır ÖZDEMİR", title:"Sound Designer"}} infoBoxDetailClassName="detail-class"></InfoBox> 
       <InfoBox header="" content="" containerClassName="col-md-3 crew" icon={{name:"aliAltunsoy", imageClassName:"img-fluid"}} detail={{name:"ALİ Altunsoy", title:"Art Director"}} infoBoxDetailClassName="detail-class"></InfoBox>        
       <InfoBox header="" content="" containerClassName="col-md-3 crew" icon={{name:"hubeybUzum", imageClassName:"img-fluid"}}detail={{name:"Hübeyb Üzüm", title:"Dialogue Writer"}} infoBoxDetailClassName="detail-class"></InfoBox>        
       <InfoBox header="" content="" containerClassName="col-md-3 crew" icon={{name:"dilerErcan", imageClassName:"img-fluid",}}detail={{name:"DİLER Ercan", title:"Producer"}} infoBoxDetailClassName="detail-class"></InfoBox> 
      </div>

      <div className="row">
        <InfoBox header="" content="" containerClassName="col-md-3 crew" icon={{name:"ilginTanay", imageClassName:"img-fluid"}} detail={{name:"Ilgın Tanay", title:"2D Animation Designer"}} infoBoxDetailClassName="detail-class"></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3 crew" icon={{name:"yagmurSahin", imageClassName:"img-fluid"}}detail={{name:"YAGMUR ŞAHİN", title:"Story Writer"}} infoBoxDetailClassName="detail-class"></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3 crew" icon={{name:"hazalOrhan", imageClassName:"img-fluid",}}detail={{name:"Hazal Orhan", title:"Director of Photography"}} infoBoxDetailClassName="detail-class"></InfoBox> 
        <InfoBox header="" content="" containerClassName="col-md-3 crew" icon={{name:"hurriyetRahsan", imageClassName:"img-fluid"}} detail={{name:"Hürriyet Rahşan Sunay", title:"Accountant"}} infoBoxDetailClassName="detail-class"></InfoBox>        
      </div>

      <div className="row">
        <InfoBox header="" content="" containerClassName="col-md-3 crew" icon={{name:"eceKoyuncu", imageClassName:"img-fluid"}}detail={{name:"Ece Koyuncu", title:"Office Coordinator"}} infoBoxDetailClassName="detail-class"></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3 crew" icon={{name:"saadetIsmen", imageClassName:"img-fluid",}}detail={{name:"Saadet İşmen Özdemir", title:"Project Development"}} infoBoxDetailClassName="detail-class"></InfoBox> 
        <InfoBox header="" content="" containerClassName="col-md-3 crew" icon={{name:"sertacKoyuncu", imageClassName:"img-fluid"}} detail={{name:"Sertaç Koyuncu", title:"Director"}} infoBoxDetailClassName="detail-class"></InfoBox>        
        <InfoBox header="" content="" containerClassName="col-md-3 crew" icon={{name:"evrimEzgiYildirim", imageClassName:"img-fluid"}}detail={{name:"EVRİM EZGİ YILDIRIM", title:"Music"}} infoBoxDetailClassName="detail-class"></InfoBox>  
      </div>

    </div>
  );
};

export default Crew;
