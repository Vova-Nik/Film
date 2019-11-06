'use strict';

function filmOnClick(idd, ev){
        films.forEach(function(entry) {
            if(("squod"+entry.id)===idd){
                console.log(entry.name);
                //document.getElementById("infoline").innerHTML = entry.ToNiceString();
                 document.getElementById("name_en").innerHTML = entry.name;
                 document.getElementById("year").innerHTML = entry.year;
                 document.getElementById("idb").innerHTML = "Rating " + entry.idb;
                 var tmp = " ";
                 switch(current_lang) {
                        case "en":
                             document.getElementById("name_loc").innerHTML = " ";
                            break;
                        case "pl":
                            tmp = entry.name_pl;
                            if(tmp === undefined){tmp=" ";}             
                            document.getElementById("name_loc").innerHTML = tmp;
                            break;
                        case "ua":
                           tmp = entry.name_ua;
                            if(tmp === undefined){tmp=" ";}             
                            document.getElementById("name_loc").innerHTML = tmp;
                            break;
                        case "ru":
                            tmp = entry.name_ru;
                            if(tmp === undefined){tmp=" ";}             
                            document.getElementById("name_loc").innerHTML = tmp;
                            break;
                        default:
                             current_lang ="en";
                             document.getElementById("name_loc").innerHTML = "";
                     }  
                 
                 
                return(true);
        }
        });
 return(false);       
}

class Lang{
    constructor(){
        this.current_lang ="en";
        document.getElementById("choose_lang_btn_en").addEventListener("click", this.set_en);
        document.getElementById("choose_lang_btn_pl").addEventListener("click", this.set_pl);
        document.getElementById("choose_lang_btn_ua").addEventListener("click", this.set_ua);
        document.getElementById("choose_lang_btn_ru").addEventListener("click", this.set_ru);
        this.set_en();
        this.selcolor = "#000070";
    }
    
    set_en(){
        current_lang ="en";
        document.getElementById("choose_lang_btn_en").style.backgroundColor = "#0000a0";
        document.getElementById("choose_lang_btn_pl").style.backgroundColor = "#000000";
        document.getElementById("choose_lang_btn_ua").style.backgroundColor = "#000000";
        document.getElementById("choose_lang_btn_ru").style.backgroundColor = "#000000";
 
    }
    set_pl(){
        current_lang ="pl";
        document.getElementById("choose_lang_btn_pl").style.backgroundColor = "#000090";
        document.getElementById("choose_lang_btn_ua").style.backgroundColor = "#000000";
        document.getElementById("choose_lang_btn_ru").style.backgroundColor = "#000000";
    }
    set_ua(){
        current_lang ="ua";
        document.getElementById("choose_lang_btn_ua").style.backgroundColor = "#000090";
        document.getElementById("choose_lang_btn_pl").style.backgroundColor = "#000000";
        document.getElementById("choose_lang_btn_ru").style.backgroundColor = "#000000";
    }
    set_ru(){
        current_lang ="ru";
        document.getElementById("choose_lang_btn_ru").style.backgroundColor = "#000090";
        document.getElementById("choose_lang_btn_pl").style.backgroundColor = "#000000";
        document.getElementById("choose_lang_btn_ua").style.backgroundColor = "#000000";

    }
    get_lang(){
        return(this.current_lang);
    }

}

class Point{
				constructor(x,y,r) {
					this.x = x;
					this.y = y;
					this.rez = r;
                                        }
				}

class Pole{
	constructor(){

             //this.scrw = Math.floor(screen.width / 8);
            this.scrw = Math.floor(document.body.clientWidth/8);
            this.scrh = Math.floor(screen.height / 8);
            console.log("width_ofscreen_8 = " + this.scrw + "\n");
            console.log("heigh_ofscreen_8 = " + this.scrh + "\n");
            this.scrwplus = this.scrw + 100;
            this.scrhplus = this.scrh + 100;
            this.pole_arr = new Array();
            this.add_row(this.scrh+maxIDB);
            this.ptx=0; // x coord for place seeking
            this.pty=0; // y coord for place seeking
            //this.showPole();
            this.poleLen=0;
	}
        
        reload(){

             //this.scrw = Math.floor(screen.width / 8);
            this.scrw = Math.floor(document.body.clientWidth/8);
            this.scrh = Math.floor(screen.height / 8);
            console.log("width_ofscreen_8 = " + this.scrw + "\n");
            console.log("heigh_ofscreen_8 = " + this.scrh + "\n");
            this.scrwplus = this.scrw + 100;
            this.scrhplus = this.scrh + 100;
           // this.pole_arr = new Array();
            //this.add_row(this.scrh+maxIDB);
            this.ptx=0; // x coord for place seeking
            this.pty=0; // y coord for place seeking
            //this.showPole();
            //this.poleLen=0;
            for(var i=0; i<this.poleLen;i++){
                    this.pole_arr[i].fill(0);
                    for (var j = this.scrw; j < this.scrwplus; j++) {
                            this.pole_arr[this.poleLen][j]=1;
                     }
                 }
            
	}

	add_row(number){
            this.poleLen = this.pole_arr.length-1;
            for(var i=0; i<=number; i++){
                this.poleLen++;
                this.pole_arr[this.poleLen] = new Array(this.scrwplus);
                this.pole_arr[this.poleLen].fill(0);
                    for (var j = this.scrw; j < this.scrwplus; j++) {
                            this.pole_arr[this.poleLen][j]=1;
                     }
           }
           this.scrh = this.poleLen;
        }

    pt_inc() {
        this.ptx++;
        if (this.ptx > this.scrw) {
            this.ptx = 0;
            this.pty++;
            if (this.pty + maxIDB >= (this.scrh)) {
                this.add_row(maxIDB);
                if (this.pole_arr.length > 2048) {
                    alert("Y size more then 2000");
                    return (false);
                }
            }
            return (true);
        }
    }

    ocheck_place(elem_wids){
     try{
                   var flag = false;
                   var x = this.ptx;
                   var y = this.pty;
                       do {
                                if(this.pole_arr[y][x] === 1) {throw 1;}
                                if(this.pole_arr[y][x+elem_wids] === 1) {throw 1;}
                                if(this.pole_arr[y+elem_wids][x+elem_wids] === 1) {throw 1;}
                                if(this.pole_arr[y][x+elem_wids] === 1) {throw 1;}
//                                for(var i=elem_wids;i>=0;i--){
//                                    for(var j=elem_wids;j>=0;j--){
//                                        if(this.pole_arr[y+j][x+i] === 1) {
//                                            throw false;;
//                                        }
//                                    }
//                                }
                                throw 0;
                   }while(true);    
               }
              catch(err){
                  console.log("err = "+ err+ "ptx = " + this.ptx + " pty = " + this.pty + " width = " + elem_wids);
                    if(err===1)flag = false;
                     else if(err===0)flag=true;
                         else alert("Catched " +err);
                         debugger;
                    }
                    
            return(flag);
    }     
        
        check_place(elem_wids){
            try{
                    if(this.pole_arr[this.pty][this.ptx] === 1){
                        return(false);
                    }
                    if(this.pole_arr[this.pty][this.ptx + elem_wids ] === 1){
                        return(false);
                    }
                    if(this.pole_arr[this.pty + elem_wids][this.ptx + elem_wids] === 1) {
                        return (false);
                    }
                    for(var i=0; i<elem_wids; i++){
                        for(var j=0; j<elem_wids; j++){
                            if(this.pole_arr[this.pty+i][this.ptx+j] === 1) {
                                return(false);
                            }
                        }
                    }
        }
    catch(err){
        alert("Check place" + err);
        //debugger;
    }
        if(elem_wids < 12){
                    if(this.pole_arr[this.pty][this.ptx + elem_wids + 20] ===1){
                        return(false);
                    }
            }
        //console.log("ptx = " + this.ptx + " pty = " + this.pty + " width = " + this.idb_num);
        return(true);
    }
    
     place(element_width){
	 this.ptx = 0; this.pty = 0;
         this.point = new Point(this.ptx,this.pty,true);
             do{
                 if(this.check_place(element_width)){
                     
                     for(var k=0; k<element_width; k++){
                         for(var l=0; l<element_width; l++){
                             this.pole_arr[this.pty+k][this.ptx + l]=1;
                         }
                     }
                     this.point.x = this.ptx;
				this.point.y = this.pty;
				this.point.rez = true;
                     return(this.point);
                 }
                 if(this.pt_inc()===false){
                     this.point.x = this.ptx;
                     this.point.y = this.pty;
                     this.point.rez = false;
                     return(this.point);
                 }
             }while(true);
         }


    showPole() {
		for(var i=0; i<(this.pole_arr.length); i++) {
			this.pole_arr[i].forEach(function(entry) {
					$("#debug").append(String(entry));
				});
		$("#debug").append("\n");
		}
            }
}
//http://vps385515.ovh.net:1820/movie/images/1515271091943.jpg
class Film{
	constructor(ii,json_data){
          try{
                this.id=json_data[ii].id;
                this.name = json_data[ii].name.en;
                this.name_pl  = json_data[ii].name.pl;
                this.name_ua  = json_data[ii].name.ua;
                this.name_ru  = json_data[ii].name.ru;
                
                this.idb =  json_data[ii].rate;
                this.img_url = 	"http://vps385515.ovh.net:1820/movie/images/" + json_data[ii].image;
                if(json_data[ii].image === "default.jpg"){
                    this.img_url = "http://www.writeawriting.com/wp-content/uploads/2012/07/movie-writing-software-movie-making.jpg";
                }
                }
          catch(err){
               alert("JSON Parse"+err);
               }
               
            if(!(+this.idb)){
                    this.idb=1; 
                    //alert("Film constructor error");
            }
            if(this.idb>10){this.idb=10;}
            if(this.idb<1){this.idb=1;}
               
	this.idb_num = Number(this.idb);
	this.idb_num = this.idb_num * 10;
	if(this.idb_num <= 45) this.idb_num = 46;
	this.idb_num = Math.floor(((this.idb_num - 45)*(this.idb_num - 45))/100);
        this.year=json_data[ii].year;
        this.actualTypes = json_data[ii].actualTypes;
        this.ptx=0; // x coord for place seeking
        this.pty=0; // y coord for place seeking
        this.squod = "squod" + this.id;
        
        //console.log(json_data);
    }

    ToString(){
            return("Film class "+" id = " + this.id +", Name \"" + this.name + "\", idb_num = " + this.idb_num + ", img_url = " + this.img_url + " Year " + this.year);
    }
     ToNiceString(){

            var str_actualTypes = " ";
            var actualTypesLength = this.actualTypes.length;
            for(var i=0;i<actualTypesLength;i++){
                str_actualTypes = str_actualTypes + this.actualTypes[i]+", ";
            }
            str_actualTypes = str_actualTypes.substring(0,str_actualTypes.length-2);
             return("  <span style=\"color: yellow\"> "+ this.name + " </span>"+"<span> " + this.year+" <span> "+" <span> IDB"+ this.idb +" <span> "+" <span> "+str_actualTypes+" <span>"+" <span> " +this.id+" <span>");     
    }

    ShowInner(){
            let s = this.ToString();
            console.log(s);
    }

    show(x,y){
        //var squod = "squod" + this.id;
        var imurl = "url(\'" + this.img_url + "\')";
        var ww=this.idb_num;
        this.x_coord8=x;

        this.y_coord8=y + infoline_height8;
	$("#container").append("<div id=" + this.squod + " class=\"puzzle\" onclick=\"filmOnClick(id, event)\"></div>");
        
	document.getElementById(this.squod).style.backgroundImage = imurl;
	document.getElementById(this.squod).style.width = String(ww*8-2)+"px";
	document.getElementById(this.squod).style.height = String(ww*8-2)+"px";
	document.getElementById(this.squod).style.left = String(this.x_coord8*8+1)+"px";
	document.getElementById(this.squod).style.top = String(this.y_coord8*8+1)+"px";
        //document.getElementById(squod).innerHTML = ("<p>X = " + this.x_coord8 + "</p> <p>"+ "Y = " + this.y_coord8 "</p>" );

	return(true);
	}
        

//        shift(){
//            if((this.x_coord8 + this.idb_num + 100)>pole.scrw);
//                document.getElementById(this.squod).style.top = String(this.y_coord8*8+1)+"px";
//        }
}

/*--------------------------------------------------------------------------------------------------------*/
Array.prototype.shuffle = function( b )
	{
            var i = this.length, j, t;
            while( i ) 
            {
             j = Math.floor( ( i-- ) * Math.random() );
             t = b && typeof this[i].shuffle!=='undefined' ? this[i].shuffle() : this[i];
             this[i] = this[j];
             this[j] = t;
	 }
     return this;
};
/*---------------------------------------------------------------------------------------------------------*/
function reload(){
   $("#container").html("");
                    pole.reload();      
                    films.shuffle();
                           var point_to_place; //point
                           for (var i = 0; i < numberOfFilms; i++) {
                            point_to_place = pole.place(films[i].idb_num);
                            films[i].show(point_to_place.x, point_to_place.y);
                            //console.log("X="+point_to_place.x + "\tY=" + point_to_place.y+"\n"); 
                        } 
//     $(".puzzle").each(function(index, val){
//         console.log(val.id);
//     });
  
}
function funonload() {
           request.open("GET", "http:\/\/vps385515.ovh.net:1820\/movie\/getMovies", true);  //http://vps385515.ovh.net:1820/movie/getMovies
           request.send("null");
           request.onreadystatechange = fuOnRequestRedy;
           let lang = new Lang();
           document.getElementById("reload_btn_id").addEventListener("click", reload);
}

function fuOnRequestRedy(){
             if (request.readyState === 4){
               films_data_json = JSON.parse(request.responseText);
               console.log(films_data_json);
               numberOfFilms = films_data_json.length;
               console.log("Number of films  " + numberOfFilms + "\n");
               //numberOfFilms = 256;
                  for (var i = 0; i < numberOfFilms; i++) {
                     
                        let film = new Film(i, films_data_json);
                        films.push(film);
                        //films[i].ShowInner();
                    }   
                       films.shuffle();
                        var point_to_place; //point
                        for (var i = 0; i < numberOfFilms; i++) {
                             //pole.showPole();
                            point_to_place = pole.place(films[i].idb_num);
                            films[i].show(point_to_place.x, point_to_place.y);
                            //console.log("X="+point_to_place.x + "\tY=" + point_to_place.y+"\n"); 
                        } 
             }	
   }
                        
const maxIDB = 36;
const infoline_height8 = 4;
var films_data_json;
var pole = new Pole();
var films = new Array();
var pole_arr;
var numberOfFilms =0;
 var current_lang = "en";

//console.clear();
var request = new XMLHttpRequest();
window.onload = funonload;


