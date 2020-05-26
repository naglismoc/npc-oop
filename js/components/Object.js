

class Object  {
    constructor( name ) {
        this.name = name;
        this.id=`${this.name}_${Date.now().toString().substring(3,10)}`;
        if(name=="terrain"){
        document.getElementsByTagName('container')[0].innerHTML+=this.HTML(); 
        this.isSet=true;
        }else{
        document.getElementsByTagName('preparedDivs')[0].innerHTML+=this.HTML(); 
        this.isSet=false;
       this.setPos(0,0);
        }
        
    }
    setSize(x,y){
        this.sizeX =x;
        this.sizeY=y;
        let element =  $(`#${this.id}`); 
        element.css('width', x);
        element.css('height', y); 
    }
    setPos(x,y){
        this.pos = [x,y]
        let element =  $(`#${this.id}`); 
        let elemPrnt = $(`#${this.id}`).parent();
       // console.log(this.name+" " +this.isSet);
        
        if(this.isSet){
       if(this.sizeX+x<=elemPrnt.width() && this.sizeY+y<=elemPrnt.height() ){
        //    console.log("telpam");
            element.css('left', x);
            element.css('top', y); 
       }else{
        element.css('left', 0);
        element.css('top', 0); 
 
         
        console.log(this.name + " telpa savo teve bet negalima jo tiek smarkiai nustumti." );
        
       }
    }else{
        element.css('left', 0);
        element.css('top', 0);   
    }
  
    }
    setBackgroundColor(colorCode){
        document.getElementById(this.id).style.backgroundColor = colorCode;

    }
    HTML(){
        let pElement = `<p>(${this.name})</p>`;
        if(this.name.includes("terrain")){
            pElement = "";    
        }
        return `<div class='exLogic ${this.name}' id='${this.id}'> ${pElement}</div>`;
    }
    
    add(object){

        if(this.sizeX<object.sizeX||this.sizeY<object.sizeY){
            console.log(object.name+" yra didesnis uz "+this.name+", nededam.");
            
        }else{
        document.getElementById(this.id).appendChild(document.getElementById(object.id));
        object.isSet=true;
        }
    }
 
   
}
    export default Object;