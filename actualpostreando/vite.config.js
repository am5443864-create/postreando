import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nosotros: resolve(__dirname, 'nosotros.html'),
        franquicias: resolve(__dirname, 'franquicias.html'),
        especialidades: resolve(__dirname, 'especialidades.html'),
        contacto: resolve(__dirname, 'contacto.html'),
        catalogo_pasteles: resolve(__dirname, 'catalogo_pasteles.html'),
        catalogo_frappes: resolve(__dirname, 'catalogo_frappes.html'),
        catalogo_tartas: resolve(__dirname, 'catalogo_tartas.html')
      }
    }
  }
});
