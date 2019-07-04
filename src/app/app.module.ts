import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WebglGalaxyComponent } from './webgl-galaxy/webgl-galaxy.component';
import { ProceduralCityComponent } from './procedural-city/procedural-city.component';
import { EndlessTerrainComponent } from './endless-terrain/endless-terrain.component';
import { WindmillObjMtlComponent } from './windmill-obj-mtl/windmill-obj-mtl.component';
import { LaunchitEarthComponent } from './launchit-earth/launchit-earth.component';
import { AppRoutingModule } from './app-routing.module';
import { GalleryComponent } from './gallery/gallery.component';
import { MatterJsComponent } from './matter-js/matter-js.component';
import { LabeledGridComponent } from './labeled-grid/labeled-grid.component';
import { GltfLoaderComponent } from './gltf-loader/gltf-loader.component';
import { VrSonicComponent } from './vr-sonic/vr-sonic.component';

@NgModule({
  declarations: [
    AppComponent,
    WebglGalaxyComponent,
    ProceduralCityComponent,
    EndlessTerrainComponent,
    WindmillObjMtlComponent,
    LaunchitEarthComponent,
    GalleryComponent,
    MatterJsComponent,
    LabeledGridComponent,
    GltfLoaderComponent,
    VrSonicComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
