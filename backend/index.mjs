import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import compression from "compression";
import morgan from "morgan";
import helmet from "helmet";
import routes from "./src/index.js";

dotenv.config();

const app = express();

app.set("trust proxy", 1); // Trust first proxy for production setups

// Allowed origins
const allowedOrigins = ["http://localhost:3000", process.env.FRONTEND_URL]; // Cambié BACKEND_URL a FRONTEND_URL

// Configurar CORS
app.use(
  cors({
    origin: function (origin, callback) {
      // Permitir solicitudes sin origen (Postman, servidores internos) o si el origen está en la lista permitida
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.error(`Origen no permitido por CORS: ${origin}`);
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST"],
    credentials: true, // Permitir el envío de cookies si es necesario
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());
app.use(compression());
app.use(morgan("combined"));
app.use(helmet());

// Middleware to disable caching
app.use((req, res, next) => {
  res.set(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, proxy-revalidate"
  );
  res.set("Pragma", "no-cache");
  res.set("Expires", "0");
  res.set("Surrogate-Control", "no-store");
  next();
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración de las rutas
app.use("/api", routes);

// Servir archivo estático
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
