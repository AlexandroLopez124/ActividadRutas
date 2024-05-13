import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../Navbar';
import {
	HomePage,
	DashboardPage,
	LoginPage,
	RegisterPage,
	TiendaPage,
	CarritoPage,
	PeliculasPage,
	ConfiguracionPage,
	AcercaPage,
	DiscordPage,
} from '../pages';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Navbar />}>
					<Route index element={<HomePage />} />
					<Route path='login' element={<LoginPage />} />
					<Route path='register' element={<RegisterPage />} />
					<Route path='configuracion' element={<ConfiguracionPage />}/>
					<Route path='acerca' element={<AcercaPage />}/>
					<Route path='discord' element={<DiscordPage />} />
					<Route
						path='dashboard'
						element={
							<PrivateRoute>
								<DashboardPage />
							</PrivateRoute>
						}
					/>
					<Route path='tienda' 
					element={
						<PrivateRoute>
							<TiendaPage />
						</PrivateRoute>
					}
					/>
					<Route 
						path='carrito'
						element={
							<PrivateRoute>
								<CarritoPage />
							</PrivateRoute>
						}
					/>	
					<Route
						path='peliculas'
						element={
							<PrivateRoute>
								<PeliculasPage />
							</PrivateRoute>
						}
					/>
				</Route>
			</Routes>
		</>
	);
};
