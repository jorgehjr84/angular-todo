import { Component } from '@angular/core';
import { TodoComponent } from './todo.component'

@Component({
  selector: 'app-root',
  template: `
    <todo></todo>
  `,
  providers: [TodoComponent],
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
}



// @Component({
//     selector: 'my-app',
//     template: `
//         <zippy title="Who can see my stuff?">
//             List of people who can see my stuff
//         </zippy>
//         <zippy title="Who can contact me?">
//             List of people who can contact me
//         </zippy>

//         `,
//     directives: [CoursesComponent, AuthorsComponent, FavoriteComponent, LikeComponent, VoterComponent, TweetComponent, ZippyComponent]
// })
