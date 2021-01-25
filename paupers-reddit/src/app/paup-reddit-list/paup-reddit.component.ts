import { Component, OnInit } from '@angular/core';
import { PaupersService } from '../paupers.service'

@Component({
  selector: 'app-paup-reddit',
  templateUrl: './paup-reddit.component.html',
  styleUrls: ['./paup-reddit.component.css'], 
  providers: [PaupersService]
})
export class PaupRedditComponent implements OnInit {

  constructor(public paupersService: PaupersService) { }

  ngOnInit(): void {
    this.paupersService.getPaupersReddit(); 
  }

}
