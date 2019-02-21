import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/semester-exam/service/api.service';
import { drawDOM, exportPDF, DrawOptions, Group } from '@progress/kendo-drawing';
import { saveAs } from '@progress/kendo-file-saver';
@Component({
   selector: 'app-report',
   templateUrl: './report.component.html',
   styleUrls: ['./report.component.css','./pdf-styles.css']
})
export class ReportComponent implements OnInit {

   @Input()
   semesterExamCode: string;
   data = Object;
   title_file : string;
   options = {
      paperSize: "A4",
      repeatHeaders: true,
      scale: 0.8,
      margin: {
         top: "80pt"
      },
   };
   @ViewChild("exportPDF", { read: ElementRef }) htmlPDF: ElementRef;
   constructor(private apiService: ApiService) { }

   ngOnInit() {
      this.getData();
   }
   getData() {
      this.apiService.getData(`semesterexam/info/${this.semesterExamCode}`).subscribe(
         result => {
            this.data = result;
            this.title_file = result.semesterExam.name;
         },
         error => {
         }
      );
   }
   onExport() {
     // this.htmlPDF.nativeElement.setAttribute("class", "show");
      drawDOM(this.htmlPDF.nativeElement, this.options).then((group: Group) => {
        // this.htmlPDF.nativeElement.setAttribute("class", "hidden");
         return exportPDF(group);
      }).then((dataUri) => {
         saveAs(dataUri, `${this.title_file}.pdf`);
      });
   }
}
