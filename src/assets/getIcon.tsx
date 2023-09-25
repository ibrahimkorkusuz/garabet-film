import React from "react";

// Icons
import garabetLogo from "./icons/garabet-logo.png";
import vimeoLogo from "./icons/vimeo.png"
import facebookLogo from "./icons/facebook.png"
import instagramLogo from "./icons/instagram.png"
import twitterLogo from "./icons/twitter.png"
import linkedinLogo from "./icons/linkedin.png"
import projeGelistirme from "./images/proje-gelistirme.png"
import dagitim from "./images/dagitim.png"
import satis from "./images/satis.png"
import yapim from "./images/yapim.png"
import bulten1 from "./images/1.jpg"
import bulten2 from "./images/2-1.jpg"
import bulten3 from "./images/3-1.jpg"
import bulten4 from "./images/4-1.jpg"
import bulten5 from "./images/5-1.jpeg"
import bulten6 from "./images/6-1.jpg"
import bulten7 from "./images/7-1.jpg"
import bulten8 from "./images/8-1.jpg"
import bulten9 from "./images/9-1.jpg"
import bulten10 from "./images/10-1.jpg"
import bulten11 from "./images/11-1.jpeg"
import bulten12 from "./images/12-1.jpg"
import bulten13 from "./images/13-1.jpg"
import bulten14 from "./images/14-1.jpg"
import bulten15 from "./images/15-1.jpg"
import bulten16 from "./images/16-1.jpg"
import bulten17 from "./images/17-1.jpg"
import bulten18 from "./images/18-1.jpg"
import bulten19 from "./images/19-1.jpeg"
import bulten20 from "./images/20-1.jpg"
import bulten21 from "./images/21-1.jpg"
import bulten22 from "./images/22-1.jpg"
import bulten23 from "./images/23-1.jpg"
import bulten24 from "./images/24-1.jpg"
import bulten25 from "./images/25-1.jpeg"
import bulten26 from "./images/26-1.jpg"
import bulten27 from "./images/27.jpeg"
import abdullahUgurlu from "./images/Abdullah-Ugurlu.jpg"
import abdullahUgurluTr from "./images/Abdullah-Ugurlu-tr.jpg"
import aliAltunsoyTr from "./images/Ali-Altunsoy-tr.jpg"
import aliAltunsoy from "./images/Ali-Altunsoy.jpg"
import alpSeker from "./images/Alp-Seker.jpg"
import alpSekerTr from "./images/Alp-Seker-tr.jpg"
import bahadirOzdemir from "./images/Bahadir-Ozdemir.jpg"
import bahadirOzdemirTr from "./images/Bahadir-Ozdemir-tr.jpg"
import berfinYasar from "./images/berfin-yasar.jpg"
import berfinYasarTr from "./images/berfin-yasar-tr.jpg"
import dilanEngin from "./images/Dilan-Engin.jpg"
import dilanEnginTr from "./images/Dilan-Engin-tr.jpg"
import dilerErcan from "./images/Diler-Ercan.jpg"
import dilerErcanTr from "./images/Diler-Ercan-tr.jpg"
import eceKoyuncu from "./images/Ece-Koyuncu.jpg"
import eceKoyuncuTr from "./images/Ece-Koyuncu-tr.jpg"
import evrimEzgiYildirim from "./images/Evrim-Ezgi-Yildirim.jpg"
import evrimEzgiYildirimTr from "./images/Evrim-Ezgi-Yildirim-tr.jpg"
import hazalOrhan from "./images/hazal-orhan.jpg"
import hazalOrhanTr from "./images/hazal-orhan-tr.jpg"
import hubeybUzum from "./images/Hubeyb-Uzum.jpg"
import hubeybUzumTr from "./images/Hubeyb-Uzum-tr.jpg"
import hurriyetRahsan from "./images/Hurriyet-rahsan-sunay.jpg"
import hurriyetRahsanTr from "./images/Hurriyet-rahsan-sunay-tr.jpg"
import ilginTanay from "./images/ilgin-tanay.jpg"
import ilginTanayTr from "./images/ilgin-tanay-tr.jpg"
import oguzhanInce from "./images/Oguzhan-inceogullari.jpg"
import oguzhanInceTr from "./images/Oguzhan-inceogullari-tr.jpg"
import ozerOnder from "./images/Ozer-Onder.jpg"
import ozerOnderTr from "./images/Ozer-Onder-tr.jpg"
import saadetIsmen from "./images/Saadet-Ismen-Ozdemir.jpg"
import saadetIsmenTr from "./images/Saadet-Ismen-Ozdemir-tr.jpg"
import selenOzturk from "./images/Selen-Ozturk.jpg"
import selenOzturkTr from "./images/Selen-Ozturk-tr.jpg"
import sertacKoyuncu from "./images/Sertac-Koyuncu.jpg"
import sertacKoyuncuTr from "./images/Sertac-Koyuncu-tr.jpg"
import sevincKaratas from "./images/Sevinc-Karatas.jpg"
import sevincKaratasTr from "./images/Sevinc-Karatas-tr.jpg"
import yagmurSahin from "./images/yagmur-sahin.jpg"
import yagmurSahinTr from "./images/yagmur-sahin-tr.jpg"
import movieBogulmaninAdabi from "./images/banners/1-bogulmanin-adabi.jpg"
import movieFikret from "./images/banners/5-fikret.png"
import movieSinmek from "./images/banners/4-sinmekk.jpg"
import movieKib from "./images/banners/2-kibb.jpg"
import movieYeryuzunden from "./images/banners/3-yeryuzundenn.jpg"
import fragmanBtn from "./icons/fragman.png"
import detayBtn from "./icons/detay.png"
import homeBannerTR from "./images/anasayfaTR.jpg"
import homeBannerEN from "./images/anasayfaENG.jpg"
import prensesModel from "./images/banners/prenses-model.png"
import cinlerCirit from "./images/banners/cinler-cirit-oynarkenn.jpg"

interface IIcon {
  [key: string]: any;
}

//TODO : yeni iconları buraya ekle.
const ICONS: IIcon = {
  "homeBannerTR": homeBannerTR,
  "homeBannerEN": homeBannerEN,
  "detayBtn": detayBtn,
  "fragmanBtn": fragmanBtn,
  "garabet-logo": garabetLogo,
  "vimeo-logo": vimeoLogo,
  "facebook-logo": facebookLogo,
  "twitter-logo": twitterLogo,
  "instagram-logo": instagramLogo,
  "linkedin-logo": linkedinLogo,
  "proje-gelistirme": projeGelistirme,
  "yapim": yapim,
  "satis": satis,
  "dagitim": dagitim,
  "bultenImage1": bulten1,
  "bultenImage2": bulten2,
  "bultenImage3": bulten3,
  "bultenImage4": bulten4,
  "bultenImage5": bulten5,
  "bultenImage6": bulten6,
  "bultenImage7": bulten7,
  "bultenImage8": bulten8,
  "bultenImage9": bulten9,
  "bultenImage10": bulten10,
  "bultenImage11": bulten11,
  "bultenImage12": bulten12,
  "bultenImage13": bulten13,
  "bultenImage14": bulten14,
  "bultenImage15": bulten15,
  "bultenImage16": bulten16,
  "bultenImage17": bulten17,
  "bultenImage18": bulten18,
  "bultenImage19": bulten19,
  "bultenImage20": bulten20,
  "bultenImage21": bulten21,
  "bultenImage22": bulten22,
  "bultenImage23": bulten23,
  "bultenImage24": bulten24,
  "bultenImage25": bulten25,
  "bultenImage26": bulten26,
  "bultenImage27": bulten27,
  "abdullahUgurlu": abdullahUgurlu,
  "abdullahUgurluTr": abdullahUgurluTr,
  "aliAltunsoyTr": aliAltunsoyTr,
  "aliAltunsoy": aliAltunsoy,
  "alpSeker": alpSeker,
  "alpSekerTr": alpSekerTr,
  "bahadirOzdemir": bahadirOzdemir,
  "bahadirOzdemirTr": bahadirOzdemirTr,
  "berfinYasar": berfinYasar,
  "berfinYasarTr": berfinYasarTr,
  "dilanEngin": dilanEngin,
  "dilanEnginTr": dilanEnginTr,
  "dilerErcan": dilerErcan,
  "dilerErcanTr": dilerErcanTr,
  "eceKoyuncu": eceKoyuncu,
  "eceKoyuncuTr": eceKoyuncuTr,
  "evrimEzgiYildirim": evrimEzgiYildirim,
  "evrimEzgiYildirimTr": evrimEzgiYildirimTr,
  "hazalOrhan": hazalOrhan,
  "hazalOrhanTr": hazalOrhanTr,
  "hubeybUzum": hubeybUzum,
  "hubeybUzumTr": hubeybUzumTr,
  "hurriyetRahsan": hurriyetRahsan,
  "hurriyetRahsanTr": hurriyetRahsanTr,
  "ilginTanay": ilginTanay,
  "ilginTanayTr": ilginTanayTr,
  "oguzhanInce": oguzhanInce,
  "oguzhanInceTr": oguzhanInceTr,
  "ozerOnder": ozerOnder,
  "ozerOnderTr": ozerOnderTr,
  "saadetIsmen": saadetIsmen,
  "saadetIsmenTr": saadetIsmenTr,
  "selenOzturk": selenOzturk,
  "selenOzturkTr": selenOzturkTr,
  "sertacKoyuncu": sertacKoyuncu,
  "sertacKoyuncuTr": sertacKoyuncuTr,
  "sevincKaratas": sevincKaratas,
  "sevincKaratasTr": sevincKaratasTr,
  "yagmurSahin": yagmurSahin,
  "yagmurSahinTr": yagmurSahinTr,
  "movieBogulmaninAdabi": movieBogulmaninAdabi,
  "movieFikret": movieFikret,
  "movieSinmek": movieSinmek,
  "movieKib": movieKib,
  "movieYeryuzunden": movieYeryuzunden,
  "prensesModel": prensesModel,
  "cinlerCirit": cinlerCirit

};

export default function getIcon(key: string, props: any) {
  if (!key || !ICONS[key]) {
    return React.createElement("div", null, "Missing Icon");
  }

  //TODO: svgler gelirse bu şekilde kullanılacak.
  //return React.createElement(ICONS[key], props);

  //değilse bu şekilde
  return <div className={props.className}><img className={props.imageClassName} src={ICONS[key]}/></div>;
}

export { ICONS };
