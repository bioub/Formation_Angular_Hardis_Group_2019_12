import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todos = ['A', 'B', 'C'];
  todo = '';
  /*
  Exercice 1 :
  Remplacer les paragraphes <p>Acheter du pain</p>...
  par le contenu du tableau todos en utilisant *ngFor (comme dans le composant select)
  
  Exercice 2 :
  Ecouter l'événement submit du formulaire avec (submit)
  Appeler la fonction addTodo depuis le template avec le paramètre $event

  Exercice 3 :
  Comme dans le composant hello
  Mettre à jour la propriété todo en fonction du champs présent dans le form
  Compléter la fonction addTodo pour qu'elle ajouter la valeur saisie dans le tableau
  todos
  */

  addTodo(event: Event) {
    event.preventDefault();
    this.todos.push(this.todo);
  }

  constructor() { }

  ngOnInit() {
  }

}
