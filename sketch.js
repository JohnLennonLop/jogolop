var x=90 , y=90,opcion=1,tela=0, nivel =1,escolhaFase=0, AltTriangulo=60, LargTriangulo=60, xTri=50,yTri=100,AltTriangulo2=60, LargTriangulo2=60, xTri2=150,yTri2=100, AltTriangulo3=30, LargTriangulo3=30, xTri3=270,yTri3=260,xMinbot=150,larBot=200, xMaxbot=xMinbot+larBot,yMinbot=200,altBot=60, yMaxbot=yMinbot+altBot,escolhaFase=0,img=30; 

//IMAGEM MUITO GRANDE
function preload(){
  img=loadImage('WhatsApp Image 2021-04-05 at 21.15.09.jpeg');
}
function setup(){
  createCanvas (600, 350);
}
function draw() {
  background(220);
 
  if (tela==0)
menu();
  if (tela==1){
    if(nivel==1){
    fase1();
  }
    if(nivel==2){
      fase2();
    }
  }
  if(tela==2)
    instruções();
  if(tela==3)
    créditos();
   if(tela==4){
    fimGame();
  }
} 

//CONCERTAR BUG POR AQUI
function menu(){
 rect(x,y,190,45)
  textSize(60);
    textFont('cursive');
  text('The Game',120,50);
      textSize(40);
  text('Inicio', 90,130);
  text('Instruções', 90,230);
  text('Crédito', 90,330);
}

//TROCAR FIGURAS GEOMETRICAS POR FIGURAS GEOMETRICAS 3D
function fase1(){
  textSize(28);
  fill(10);
  text('Qual a ordem correta?', 150,30);
  
  fill(100,150,0)
  triangle(xTri,yTri, xTri+LargTriangulo/2, yTri+AltTriangulo,xTri+LargTriangulo,yTri)
  
  ellipse(80,200,60,60)
   fill(10);
  triangle(xTri2,yTri, xTri2+LargTriangulo/2, yTri+AltTriangulo,xTri2+LargTriangulo,yTri);
 
  
  escolhaFase=0;
  
  BotãodeResp(100,250,250,300,70,50,1)
    fill(10);
       
 
  
  ellipse(135,275,30,30)
  
  
  
   BotãodeResp(250,350,250,300,70,50,2)
  fill(10);
    triangle(xTri3,yTri3, xTri3+LargTriangulo3/2, yTri3+AltTriangulo3,xTri3+LargTriangulo3,yTri3); 

    
  fill(100,150,0);
  BotãodeResp(400,500,250,300,70,50,3)
  square(420, 263, 30);
  
}
function instruções(){
  textSize(20);
   text('Olá jogador, leve o indicador com o mouse ate a figura que', 0 ,50)
         textSize(20);
   text('corresponde a lógica', 0,80)
    textSize(20);
   text('O game é destinado a crianças do primeiro e segundo ano', 0,110)
     text('Onde as crianças iram desenvolver seu raciocínio lógico', 0,130)
  text('Aperte Inicio no menu, e divirta-se.', 0,150)
}
function créditos(){
 
  textSize(20);
  fill(30,50,10);
   text('John Lennon Alves, aluno do BCT',0,50);
  textSize(20);
   text('desenvolvedor', 0,80);
}
function fimGame(){
  background(220);
  textSize(28);
  fill(10);
  
  
  text("Sinto Muito, Click ESC e Tente Novamente", 20, 50);
  
}
function keyPressed(){
  if(key=='ArrowUp'&& y>130){
    y=y-100
  opcion=opcion-1;
  console.log(opcion)
  }
   if(key=='ArrowDown'&& y<300){
    y=y+100
  opcion=opcion+1;
  console.log(opcion)
}
  if(key=="Enter"){
    tela=opcion;
}
if(key=="Escape"){
    tela=0;
}
 
}
function mouseClicked(){
  if(tela ==1 && nivel==1){
      if(escolhaFase ==2|| escolhaFase==3){
        tela= 4;
      }
    if(escolha==1){
      nivel=2;
    }
  }
}
function BotãodeResp(xMinbot,xMaxbot,yMinbot,yMaxbot,larBot,altBot,opcion){
  
  if(mouseX>xMinbot && mouseX< xMaxbot && mouseY>yMinbot && mouseY< yMaxbot){
    fill(250);
    if(mouseIsPressed){
        escolhaFase=opcion;
      if(opcion==1){
         fill(10);
       
 
  
  ellipse(180,200,60,60)
        textSize(50);
         fill(100,90,0);
  text('Correto, Fase 2', 160,90);
           
      }
         if(opcion==2){
        textSize(30);
         fill(90,90,0);
  text('Errado, Tente novamente', 90,90);
      }
         if(opcion==3){
        textSize(30);
         fill(90,90,0);
  text('Errado, Tente novamente', 90,90);
      }
    }
}
  else{
    noFill();
  }
  rect(xMinbot,yMinbot,larBot,altBot,15);
  textSize(26);
  fill(0);

}

//FINALIZAR FASE 2
function fase2(){
  textSize(28);
  fill(10);
  text('Qual a ordem correta?', 150,30);
  
  fill(100,150,0)
  triangle(xTri,yTri, xTri+LargTriangulo/2, yTri+AltTriangulo,xTri+LargTriangulo,yTri)
  
  ellipse(80,200,60,60)
   fill(10);
  triangle(xTri2,yTri, xTri2+LargTriangulo/2, yTri+AltTriangulo,xTri2+LargTriangulo,yTri);
 
  
  escolhaFase=0;
  
  BotãodeResp(100,250,250,300,70,50,1)
    fill(10);
       
 
  
  ellipse(135,275,30,30)
  
  
  
   BotãodeResp(250,350,250,300,70,50,2)
  fill(10);
    triangle(xTri3,yTri3, xTri3+LargTriangulo3/2, yTri3+AltTriangulo3,xTri3+LargTriangulo3,yTri3); 

    
  fill(30,150,0);
  BotãodeResp(400,500,250,300,70,50,3)
  square(420, 263, 30);
  
}

