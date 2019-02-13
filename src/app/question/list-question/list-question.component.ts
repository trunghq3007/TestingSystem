import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { Question } from 'src/entity/Question';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Level } from 'src/entity/Level';
import { Category } from 'src/entity/Category';
import { Tag } from 'src/entity/Tag';
import { element } from '@angular/core/src/render3';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.css']
})
export class ListQuestionComponent implements OnInit {

  listQuestion: Question[];
  listLvl: Level[];
  listCategory: Category[];
  listTag: Tag[];
  quesiton: Question[];


  message: string;
  levelSelected: string = "1";
  categorySelected: string = "null";
  tagSelected: string = "null";

  displayedColumns: string[] = ['select', 'id', 'name', 'action'];
  dataSource = new MatTableDataSource<Question>(this.listQuestion);
  selection = new SelectionModel<Question>(true, []);

  constructor(
    private service: ServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.service.getListQuestion().subscribe(
      lquestion => {
        this.listQuestion = lquestion;
        this.dataSource.data = this.listQuestion;
      }
    );
    this.service.getAllLvl().subscribe(
      lvl => this.listLvl = lvl
    );
    this.service.getAllCategory().subscribe(
      category => this.listCategory = category
    )
    this.service.getAllTag().subscribe(
      tag => this.listTag = tag
    );
  }

  /** Whether the number of selected elements matches the total number of rows. */
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

  loadPopupUpdate() {
    this.message = "";
    this.selection.selected.forEach(element => {
      console.log(element.id)
    });
  }

  updateMuiltiQestion() {
    const a: Level = new Level();
    a.id = this.levelSelected;
    const b: Category = new Category();
    b.id = this.categorySelected;
    const c: Tag = new Tag();
    c.id = this.tagSelected;
    const newQ: Question = new Question();
    newQ.questionLevel = a;
    newQ.questionCategory = b;
    newQ.questionTag = c;
    if (this.selection.selected.length == 0) {
      this.message = "No records have been selected yet!";
    } else {
      this.selection.selected.forEach(element => {
        this.service.updateMutilQuestion(newQ, element.id).subscribe(
          update => this.quesiton.push(update)
        )
      })
    }
  }
}
