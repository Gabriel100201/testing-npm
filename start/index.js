import fsExtra from 'fs-extra';
import { join } from 'path';

const projectName = process.argv[2] || 'my-custom-app';

const projectPath = join(process.cwd(), projectName);

// Crear directorio del proyecto
fsExtra.mkdirSync(projectPath);

// Copiar contenido de la carpeta "base" al nuevo directorio
const baseFolderPath = join(__dirname, 'base');
fsExtra.copySync(baseFolderPath, projectPath);

console.log(`Proyecto "${projectName}" creado exitosamente en ${projectPath}`);

