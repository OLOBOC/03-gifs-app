import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';



interface MenuOption {//esto es para definir la estructura de los objetos que se van a usar en el menu
  icon: string;
  label: string;
  router: string;
  subLabel: string;
}

@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.component.html',
})
export class SideMenuOptionsComponent {

  menuOptions: MenuOption[] = [
    //esto son los objetos que se van a usar en el menu
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      router: '/dashboard/trending',
      subLabel: 'gifs populares',
    },
    {
      icon: 'fa-solid fa-mangnifying-glass',
      label: 'Buscador',
      router: '/dashboard/search',
      subLabel: 'Buscar gifs',
    },
    {
      icon: 'fa-solid fa-mangnifying-glass',
      label: 'Tus gifs',
      router: '/dashboard/gifs',
      subLabel: 'Solo de prueba no tocar',
    },

  ]
}
