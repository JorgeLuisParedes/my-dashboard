import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '@interfaces/req-response';
import { TitleComponent } from '@shared/title/title.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { UsersService } from '@services/users.service';

@Component({
	standalone: true,
	imports: [CommonModule, TitleComponent],
	template: `
		<app-title title="User" />
		@if (user()) {
		<section>
			<img [srcset]="user()!.avatar" [alt]="user()!.first_name" />
			<div>
				<h3>{{ user()?.first_name }} {{ user()?.last_name }}</h3>
				<p>{{ user()?.email }}</p>
			</div>
		</section>
		} @else {
		<p>Cargando información</p>
		}
	`,
})
export default class UserComponent {
	private route = inject(ActivatedRoute);
	private userServce = inject(UsersService);

	public user = toSignal(this.route.params.pipe(switchMap(({ id }) => this.userServce.getUserById(id))));
	// constructor() {
	// 	console.log(this.route.params);
	// }
}
