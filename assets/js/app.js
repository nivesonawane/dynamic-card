let cl = console.log;

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

let result = ``;
let movieInfo = document.getElementById('movieInfo');


for(let i = 0;i<4;i++){
   result += `
             <div class="col-sm-6 col-lg-3">
             <div class="card mb-4">
               <figure class="movieCard">
                 <img src="${movieArr[i].poster_path}">
                  <figcaption>
                  <div class="titleInfo p-2">
                    <div class="row">
                     <div class="col-sm-10">
                      <h4>${movieArr[i].title}</h4>
                     </div>
                    <div class="col-sm-2">
                      <span class="rating">${movieArr[i].vote_average}</span>
                    </div>
                 </div>
              </div>
                </figcaption>
              <div class="overview p-3">
               <h5 class="text-center border-bottom">Overview</h5>
                 ${movieArr[i].overview}
             </div>
            </figure>
          </div>
          </div>
   `
}

movieInfo.innerHTML = result;