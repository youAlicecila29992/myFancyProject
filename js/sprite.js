/**
 * Einfache Sprite Klasse
 * @author Winterfeldt
 * @version 0.1
 */ 

'use strict';

class Sprite{

    /**
     * Sprite konstruieren
     * @param pfad zum bild
     */
    constructor(name){
        this.img=new Image();
        this.img.src=name;
        this.max=10;
        this.pos=0;
        this.size=23;

        this.posx = 10;
        this.posy =10;
    }

    /**
     * Quellbild holen
     * @return liefert das Bild zurück
     */ 
    getImage(){
        return this.img;
    }

    /**Quellbild setzten
     * @param Image Setzt ein neues Bild
     */
    setImage(iimage){
        this.img=iimage;
    }

    /**
     * 
     */
    setContext(icont){
        this.cont =icont;
    }

    /**
     * In ein graphisches Element malen
     * @param x Position x
     * @param y Position y
     */ 
    draw(x,y){
        //cont.drawImage(this.img,x,y);
        this.cont.drawImage(this.img,0,0,26,26,0,0,26,26);
    }
     /**
     * In ein graphisches Element animieren
     * Die Funktion drawImage nimmt folgende Parameter
     * context.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)

        img	Source image object	Sprite sheet
        sx	Source x	Frame index times frame width
        sy	Source y	0
        sw	Source width	Frame width
        sh	Source height	Frame height
        dx	Destination x	0
        dy	Destination y	0
        dw	Destination width	Frame width
        dh	Destination height	Frame height
     */ 

    update(){
      
        this.cont.drawImage(this.img,this.pos*this.size,0,this.size,26,this.posx,this.posy,this.size,26);
        this.pos=this.pos+1;
        if(this.pos>10)
            this.pos =0;
    }

}
