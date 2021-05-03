




import { Component, OnInit, Input } from '@angular/core';
import { global } from '../../services/global';
import { Article } from '../../models/article';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  private url: string;
  @Input() articles: Array<Article>;

  constructor() {
      this.url = global.urlLocal;
  }

  ngOnInit() {
  }

}
