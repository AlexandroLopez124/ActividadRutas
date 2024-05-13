import React from 'react';
import {
	Link,
	Outlet,
	useLocation,
	useNavigate,
} from 'react-router-dom';

export const Navbar = () => {
	const { state } = useLocation();
	const navigate = useNavigate();

	console.log(state);

	const onLogout = () => {
		navigate('/login', {
			replace: true,
		});
	};

	const onTiendaClick = () => {
		navigate('/tienda', {
			replace: true,
			state: {
				logged: true,
			},
		});
	  };

	const onCarritoClick = () => {
		navigate('/carrito', {
			replace: true,
			state: {
				logged: true,
			},
		});
	  };

	  const onPeliculaClick = () => {
		navigate('/peliculas', {
			replace: true,
			state: {
				logged: true,
			},
		});
	  };





	return (
		<>
			<header>
				<h1>
					<Link to='/'>Logo</Link>
				</h1>

				{state?.logged ? (
					<div className='user'>
						<span className='username'>{state?.name}</span>
						<button className='btn-logout' onClick={onLogout}>
							Cerrar sesión
						</button>
						<button className='btn-carding' onClick={onTiendaClick}>
							Tienda
						</button>
						<button className='btn-carding' onClick={onCarritoClick}>
							Carrito
						</button>
						<button className='btn-carding' onClick={onPeliculaClick}>
							Peliculas
						</button>
					</div>
				) : (
					<nav>
						<Link to='/login'>Iniciar sesión</Link>
						<Link to='/register'>Registrarse</Link>
						<Link to='/configuracion'>Configuracion</Link>
						<Link to='/acerca'>Acerca de</Link>
						<Link to='/discord'>Discord</Link>

					</nav>
				)}
			</header>

			<Outlet />
		</>
	);
};
