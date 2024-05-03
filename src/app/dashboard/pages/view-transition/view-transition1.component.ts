import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/title/title.component';

@Component({
	standalone: true,
	imports: [CommonModule, TitleComponent],
	styles: ``,
	template: `
		<app-title title="View Transtion 1" />
		<section class="flex justify-start">
			<img srcset="https://picsum.photos/id/237/200/300" alt="Picsum" width="200" height="300" />
			<div class="bg-blue-500 w-56 h-56"></div>
		</section>
	`,
})
export default class ViewTransitionComponent {}
