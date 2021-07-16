import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {
  version = 'Angular ' + VERSION.major;
  constructor() {}

  ngOnInit() {}
}
