import fs from 'fs'
import path from 'path'

const paths = {
    dist: path.resolve('dist', 'index.html'),
    src: path.resolve('src', 'index.html'),
}

if (fs.existsSync(paths.dist)) {
    fs.unlinkSync(paths.dist)
}

fs.copyFileSync(paths.src, paths.dist)