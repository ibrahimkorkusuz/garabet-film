import "./movie.css";
import { useTranslation } from "react-i18next";
import InfoBox from "../../components/infoBoxComponent/infoBox";


const Movie = () => {
  const { t } = useTranslation();

  return (
    <div id="movie-list" className="container">
      <h1>{t("MOVIE")}</h1> 
      <div className="row">
        {/* <InfoBox header="" content="" containerClassName="col-md-12" icon={{name:"movieBogulmaninAdabi", className:"", imageClassName:"img-fluid"}}></InfoBox>    */} 

        <div className="col-md-12 movie-item">    
          <img src="http://garabetfilms.com/wp-content/uploads/2023/03/Banner-Bogulmanin-Adabi-1.jpg" alt="Boğulmanın Adabı" className="img-fluid" />
          <div className="movie-info">
            <h2 className="title-bogulma">BOĞULMANIN ADABI</h2>
            <p>Otuz katlı apartman. Tek bir asansör.</p>
            <div className="movie-button mt-5">
              <button type="button" className="fragman-btn btn btn-danger" data-bs-toggle="modal" data-bs-target="#bogulmaninAdabi">Fragmanı İzle</button>
              <a href="#" className="detay-btn btn btn-light mx-2">Detay</a>
            </div> 
          </div> 
        </div>

        <div className="modal fade" id="bogulmaninAdabi" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5">Boğulmanın Adabı</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                Otuz katlı apartman. Tek bir asansör.
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/BTm3w6PaU6Y?si=wRT-WP8YCS0iHAtI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
              </div>
            </div>
          </div>
        </div>
        

        <div className="col-md-12 movie-item">    
          <img src="http://garabetfilms.com/wp-content/uploads/2023/03/Fikret-BG-1.jpg" alt="Fikret" className="img-fluid" />
          <div className="movie-info">
            <h2 className="title-kib">KİB</h2>
            <p>Bir sosyal medya fenomeni anneannesi ile şoke edici bir selfie çeker.</p>
            <div className="movie-button mt-5">
              <a href="#" className="fragman-btn btn btn-danger">Fragmanı İzle</a> 
              <a href="#" className="detay-btn btn btn-light mx-2">Detay</a>
            </div> 
          </div> 
        </div> 


        <div className="col-md-12 movie-item">    
          <img src="http://garabetfilms.com/wp-content/uploads/2023/03/Fikret-BG-1.jpg" alt="Fikret" className="img-fluid" />
          <div className="movie-info">
            <h2 className="title-yeryuzu">YERYÜZÜNDEN</h2>
            <p>Maden kasabasında yaşanan doğaüstü olayların gizemi.</p>
            <div className="movie-button mt-5">
              <a href="#" className="fragman-btn btn btn-danger">Fragmanı İzle</a> 
              <a href="#" className="detay-btn btn btn-light mx-2">Detay</a>
            </div> 
          </div> 
        </div>

        <div className="col-md-12 movie-item">    
          <img src="http://garabetfilms.com/wp-content/uploads/2023/03/Fikret-BG-1.jpg" alt="Fikret" className="img-fluid" />
          <div className="movie-info">
            <h2 className="title-sinmek">SİN'MEK</h2>
            <p>Sevil doğumgününde mantar alerjisinin üstüne gitmeye karar verir.</p>
            <div className="movie-button mt-5">
              <a href="#" className="fragman-btn btn btn-danger">Fragmanı İzle</a> 
              <a href="#" className="detay-btn btn btn-light mx-2">Detay</a>
            </div> 
          </div> 
        </div>

        <div className="col-md-12 movie-item">    
          <img src="http://garabetfilms.com/wp-content/uploads/2023/03/Fikret-BG-1.jpg" alt="Fikret" className="img-fluid" />
          <div className="movie-info">
            <h2 className="title-fikret">FİKRET</h2>
            <p>Bazı insanlar ölse de kalpleri büyümeye devam eder.</p>
            <div className="movie-button mt-5">
              <a href="#" className="fragman-btn btn btn-danger">Fragmanı İzle</a> 
              <a href="#" className="detay-btn btn btn-light mx-2">Detay</a>
            </div> 
          </div> 
        </div>
        

          
      </div>
    </div>
  );
};

export default Movie;
