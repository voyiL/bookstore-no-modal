import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  @ViewChild("content") content: ElementRef;
  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  show() {
    this.modalService.open(this.content, { size: "sm" });
  }

}
