import cluster from 'cluster';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

if (cluster.isPrimary) {
    const numCPUs = os.cpus().length;

    console.log(`Número de CPUs: ${numCPUs}`);
    console.log(`PID del primary: ${process.pid}`);

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} terminado. Código de salida: ${code}, señal: ${signal}`);
        console.log('Iniciando un nuevo worker');
        cluster.fork();
    });
} else {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.resolve(__dirname, 'index.mjs');

    (async () => {
        await import(`file://${filePath}`);
    })();
}
