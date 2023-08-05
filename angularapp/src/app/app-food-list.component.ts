import { Component } from '@angular/core';
import { Food } from './food.interface'; // Assuming you have a separate food.interface.ts file for the Food interface

@Component({
  selector: 'app-food-list',
  templateUrl: './app-food-list.component.html',
  styleUrls: ['./app-food-list.component.css'],
})
export class AppFoodListComponent {
  foods: Food[] = [
    // Sample data
    {
      name: 'Food 1',
      calories: 100,
      imageSrc: 'path/to/image1.jpg',
    },
    {
      name: 'Food 2',
      calories: 200,
      imageSrc: 'path/to/image2.jpg',
    },
    // Add more food items as needed
  ];

  searchText: string = '';

  addToTodaysFoods(food: Food) {
    // Implement Task 4: Add the logic to add the food to today's foods list
  }
}

