import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss']
})
export class CenzorComponent implements OnInit {

   // CENZOR    
   public arrBad:any[] = [] 
   public badWordsArr:any[] = [] 
   public enterInput = ''
   public badwords = ''
   public textInput = ''
   constructor() { }

   ngOnInit(): void {
   }

   addButton():void{
       // console.log('add');
       // console.log(this.enterInput);
       this.arrBad.push(this.enterInput)
       // console.log(this.arrBad);
       for (let i = 0; i < this.arrBad.length; i++){
           this.badwords += this.arrBad[i]
           this.badwords += ' '
           this.badWordsArr.push(this.arrBad[0])
           this.arrBad = []
           this.enterInput = ''
       }
   }

   resetButton():void{
       this.badwords = ''
       this.enterInput = ''
       this.textInput = ''
   }

   cenzorButton():void{
       console.log('cenzor');
       // console.log(this.badWordsArr);
       

       if(this.textInput !== '') {
           let originalText = this.textInput;
           let textArr = originalText.split(' ');
           let cenzorTextArr:any[] = [];
           let badArr = this.badWordsArr
           textArr.forEach(function (word:string):void {
               for (let i = 0; i < badArr.length; i++) {
                   if (word !== badArr[i]) {
                       word = word;
                   }
                   else {
                       let symbolNum = word.length;
                       word = '';
                       for (let i = 0; i < symbolNum; i++) {
                           word += '*';
                       }
                   }
               }
               cenzorTextArr.push(word);
           });
           this.textInput = cenzorTextArr.join(' ');
       }
       else {
           alert ( 'Please write a text in textarea!');
       }
   }
}
