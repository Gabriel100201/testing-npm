#!/usr/bin/env node

import { promises as fsPromises } from 'fs';
import { join, dirname } from 'path';

const { copyFile, mkdir, readdir } = fsPromises;

async function copyFolder(src, dest) {
  try {
    await mkdir(dest, { recursive: true });
  } catch (error) {
    if (error.code !== 'EEXIST') {
      throw error;
    }
  }

  const entries = await readdir(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyFolder(srcPath, destPath);
    } else {
      await copyFile(srcPath, destPath);
    }
  }
}

// Obtener la ruta del archivo actual y luego obtener el directorio base
const currentFileUrl = import.meta.url;
const currentDir = dirname(currentFileUrl.replace(/^file:\/\/\//, ''));

const projectName = process.argv[2] || 'my-custom-app';
const projectPath = join(process.cwd(), projectName);
const baseFolderPath = join(currentDir, '../dist/base');

try {
  await copyFolder(baseFolderPath, projectPath);
  console.log(`Proyecto "${projectName}" creado exitosamente en ${projectPath}`);
} catch (error) {
  console.error('Error al copiar la carpeta:', error);
}