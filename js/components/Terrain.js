
class Terrain  {
    constructor( name ) {
        this.tile = '<div  class="'+name+'"></div> ';
    }

    //setObjectSize(x,y){

    // }
    //SetObjectPosition();
    //SetObjectClass();


    generateTerrain(x,y){
        let terrainContent =  '<div class="terrain" style="width:'+(x*15)+'px;">';
        for (let a = 1; a <= y; a++) {
            terrainContent+= '<div class="terrainRow" style="width:'+(x*15)+'px;">';
            for (let i = 1; i <= x; i++) {
                
            terrainContent+=this.tile;
            }
            terrainContent+= '</div>'
         } 
         return terrainContent+ '</div>';
    }
  
}

export default Terrain;



// let container = document.getElementsByTagName("container")[0];

//    for (let i = 0; i < 400; i++) {
//       container.innerHTML+=`<div style="width: 5px; height: 5px;   border: 1px solid red;"></div>`;
//        console.log(i);
       
//    }

