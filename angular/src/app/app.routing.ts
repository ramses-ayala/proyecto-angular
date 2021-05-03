// IMPORTAR LOS MODULOS DEL ROUTING DE ANGULAR

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// IMPORTAR COMPONENTES A LOS CUALES SE QUIRE HAVER UNA PAGINA EXCLUSIVA

import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { ErrorComponent } from './components/error/error.component';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
import { ArticleNewComponent } from './components/article-new/article-new.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';

// ARREGLO DE RUTAS

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent },
    {path: 'blog', component: BlogComponent},
    {path: 'blog/articulo/:id', component: ArticleComponent},
    {path: 'blog/editar/:id', component: ArticleEditComponent},
    {path: 'blog/crear', component: ArticleNewComponent},
    {path: 'formulario', component: FormularioComponent},
    {path: 'peliculas', component: PeliculasComponent},
    {path: 'buscar/:search', component: SearchComponent},
    {path: 'pagina-de-pruebas', component: PaginaComponent},
    {path: 'pagina-de-pruebas/:nombre/:apellido', component: PaginaComponent},
    {path: '**', component: ErrorComponent}
]

// EXPORTAR EL MODULO DE RUTAS

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);