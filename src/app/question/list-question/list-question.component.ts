import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { Question } from 'src/entity/Question';
import { MatTableDataSource, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Level } from 'src/entity/Level';
import { Category } from 'src/entity/Category';
import { Tag } from 'src/entity/Tag';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TypeQuestion } from 'src/entity/TypeQuestion';


@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.css']
})
export class ListQuestionComponent implements OnInit {

  //save data json
  listQuestion: any[];
  listLvl: Level[];
  listCategory: Category[];
  listTag: Tag[];
  listType: TypeQuestion[];
  quesiton: Question[] = [];

  //tag mesage sucess
  success = false;

  //message udpate multi
  message: string;

  //selection
  levelSelected: string = "1";
  categorySelected: string = "2";
  tagSelected: string = "1";

  tagFrm: FormGroup;
  searchText: string;

  displayedColumns: string[] = ['select', 'category', 'create_by', 'date', 'level', 'content', 'tag', 'action'];
  dataSource = new MatTableDataSource<Question>(this.listQuestion);
  selection = new SelectionModel<Question>(true, []);

  size:number = 2;
  sumQuestion: number;
  currentPage: number = 0;
  numberofpages: number = 0;
  numberofpagesSearch: number = 0;

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private service: ServiceService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'category': return item.questionCategory.categoryName;
        case 'create_by': return item.userQuestion.fullName;
        case 'date': return item.dateCreated;
        case 'level': return item.questionLevel.levelName;
        case 'content': return item.content;
        case 'tag': return item.questionTag.tagName;
        default: return item[property];
      }
    };
    this.dataSource.sort = this.sort;
    //  tag class and validate
    this.tagFrm = this.fb.group({
      tag_name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(225)]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(225)]],
      status: ['', [Validators.required]]
    });
    this.loadListQuestion(this.numberofpages.toString(), this.size.toString());
    this.service.getQuestionSum().subscribe(
      sum => {
        this.sumQuestion = Number(sum.headers.get('SumQuestion')),
          this.numberofpages = Math.trunc((this.sumQuestion) / (this.size))
      }
    );
    this.service.getType().subscribe(
      type => this.listType = type
    );
    this.service.getAllLvl().subscribe(
      lvl => this.listLvl = lvl
    );
    this.service.getAllCategory().subscribe(
      category => this.listCategory = category
    );
    this.service.getAllTag().subscribe(
      tag => this.listTag = tag
    );
  }
  loadListQuestion(p: string, s: string) {
    this.service.getQuestions(p, s).subscribe(
      lquestion => {
        this.listQuestion = lquestion;
        this.dataSource.data = this.listQuestion;
        console.log("pages:"+this.numberofpages+ "---size: "+this.size+ "--- curentPage:"+this.currentPage);
      }
    );
  }
  /** function search by content question*/
  contentQuestion: string;
  countSearch: number;
  searchByContent(contentQuestion) {
    if (contentQuestion == undefined) {
      contentQuestion = "";
    }
    console.log(this.contentQuestion);
    this.service.countSearchQuestion(contentQuestion).subscribe(
      count => {
        this.countSearch = Number(count.headers.get('CountSearchQuestion')),
        console.log(this.currentPage+"   "+this.numberofpagesSearch);
      }
    );
    console.log("pages:"+this.numberofpages+ "---size: "+this.size+ "--- curentPage:"+this.currentPage);

    this.contentQuestion = contentQuestion;
    this.service.searchQuestionByContent(contentQuestion, this.numberofpages.toString(), this.size.toString()).subscribe(
      lquestionbyContent => {
        this.listQuestion = lquestionbyContent;
        this.dataSource.data = this.listQuestion;
        console.table(this.listQuestion);
      }
    );
  }

  loadPopupUpdate() {
    this.message = "";
    this.selection.selected.forEach(element => {
      console.log(element.id)
    });
  }

  updateMuiltiQestion() {
    if (this.selection.selected.length == 0) {
      this.message = "No records have been selected yet!";
    } else {
      this.selection.selected.forEach(element => {
        element.questionLevel.id = this.levelSelected;
        element.questionCategory.id = Number(this.categorySelected);
        element.questionTag.id = this.tagSelected;
        // this.service.updateMutilQuestion(element).subscribe(
        //   update => this.quesiton.push(update)
        // );

        this.service.updateMutilQuestion1(element).subscribe(success => {
          console.log(success);
        }, error => {
          console.log(error);
        });
        console.log(element);
      });
      location.reload();
    }
  }

  choisePage() {
    this.currentPage = 0;
    if (this.contentQuestion != undefined) {
      this.searchByContent(this.contentQuestion);
    } else {
      this.loadListQuestion(this.currentPage.toString(), this.size.toString());
    }
    this.selection = new SelectionModel<Question>(true, []);
    this.numberOfPage();
  }

  setPage(page: number) {
    this.numberOfPage();
    this.currentPage = page;
    if (this.contentQuestion != undefined) {
      this.searchByContent(this.contentQuestion);
    } else {
      this.loadListQuestion(page.toString(), this.size.toString());
    }
    this.selection = new SelectionModel<Question>(true, []);
  }
  numberOfPage(): number {
    this.numberofpages = Math.trunc((this.sumQuestion) / (this.size));
    return this.numberofpages;
  }
  // numberPageSearch():number{
  //   // this.numberPageSearch = Math.trunc((this.countSearch) / (this.size));
  //   return this.numberPageSearch;
  // }
}
