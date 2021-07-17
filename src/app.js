import express from 'express'
import morgan from 'morgan'
import authRoutes from './routes/auth.routes'
import rolesRoutes from './routes/rol.routes'
import clientesRoutes from './routes/cliente.routes'
import empleadosRoutes from './routes/empleado.routes'
import userRoutes from './routes/user.routes'
import personRoutes from './routes/persona.routes'
import comprasRoutes from './routes/compra.routes'
import ventasRoutes from './routes/venta.routes'
import salidaRoutes from './routes/salida.routes'
import preciosRoutes from './routes/precio.routes'
import cisternasRoutes from './routes/cisterna.routes'
import accesosRoutes from './routes/accesos.routes'
import cargosRoutes from './routes/cargo.routes'
import detalleSalidasRoutes from './routes/detalle_salida.routes'
import gastosRoutes from './routes/gasto.routes'
import zonasRoutes from './routes/zona.routes'
import productosRoutes from './routes/producto.routes'
import reporteSalidasRoutes from './routes/reporte.salidas.routes'
import observacionRoutes from './routes/observacion.routes'
import deudaRoutes from './routes/deuda.routes'
import proveedorRoutes from './routes/proveedor.routes'
const app = express();
var cors = require('cors');
app.use(express.json());
app.use(cors());

app.use(morgan('dev'));

app.get('/', function (req, res, next) {
    res.send('Bienvenido al sistema grifo...!');
  });
 
app.use('/api/auth/roles', rolesRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/auth/users', userRoutes);
app.use('/api/auth/persons',personRoutes);
app.use('/api/auth/clientes',clientesRoutes);
app.use('/api/auth/empleados',empleadosRoutes);
app.use('/api/auth/compras',comprasRoutes);
app.use('/api/auth/ventas',ventasRoutes);
app.use('/api/auth/salidas',salidaRoutes);
app.use('/api/auth/precios',preciosRoutes);
app.use('/api/auth/cisternas',cisternasRoutes);
app.use('/api/auth/accesos',accesosRoutes);
app.use('/api/auth/cargos',cargosRoutes);
app.use('/api/auth/detalleSalidas',detalleSalidasRoutes);
app.use('/api/auth/gastos',gastosRoutes);
app.use('/api/auth/zonas',zonasRoutes);
app.use('/api/auth/salidas/reportes',reporteSalidasRoutes);
app.use('/api/auth/productos',productosRoutes);
app.use('/api/auth/obs',observacionRoutes);
app.use('/api/auth/deudas',deudaRoutes);
app.use('/api/auth/proveedores',proveedorRoutes);

export default app;