const plugin = require('tailwindcss/plugin')

const twColors = require('tailwindcss/colors')
const colors = {
	transparent: twColors.transparent,
	black: '#333333',
	white: twColors.white,
	secondary: '#5194c1',
	gray: '#797979',
	primary: '#5ca1ce',
	aqua: '#268697',
	'bg-color': '#efefef',
	red: '#f22865'
}
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./src/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		colors,
		extend: {
			fontSize: {
				xs: '0.82rem',
				sm: '0.98rem',
				base: '1.15rem',
				lg: '1.22rem',
				xl: '1.36rem',
				'1.5xl': '1.5rem',
				'2xl': '1.725rem',
				'3xl': '2.225rem',
				'4xl': '2.58rem',
				'5xl': '3.45rem',
				'6xl': '4.3rem',
				'7xl': '5.17rem'
			},
			backgroundImage: {
				'gradient-radial':
					'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			keyframes: {
				animationOpacity: {
					from: { opacity: 0.2 },
					to: { opacity: 1 }
				},
				fade: {
					from: { opacity: 0 },
					to: { opacity: 1 }
				},
				scaleIn: {
					'0%': {
						opacity: 0,
						transform: 'scale(0.9)'
					},
					'50%': {
						opacity: 0.3
					},
					'100%': {
						opacity: 1,
						transform: 'scale(1)'
					}
				}
			},
			animation: {
				fade: 'fade .5s ease-in-out',
				scaleIn: 'scaleIn .35s ease-in-out'
			}
		}
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
		plugin(({ addComponents, theme, addUtilities }) => {
			addComponents({
				'.btn-primary': {
					backgroundColor: twColors.black,
					color: '#fff',
					borderRadius: '0.65rem',
					transition: 'background-color .3s ease-in-out',
					'&:hover': {
						backgroundColor: '#ff0009'
					}
				},

				'.text-link': {
					textUnderlineOffset: 4,
					color: 'rgba(255, 255, 255, .9)',
					transition: 'text-decoration-color .3s ease-in-out',
					textDecorationLine: 'underline',
					textDecorationColor: 'rgba(255, 255, 255, 0.9)',
					'&:hover': {
						textDecorationColor: 'rgba(255,255,255,0.9)'
					}
				},

				'.air-block': {
					borderRadius: 10,

					backgroundColor: twColors.blue,
					color: theme('twColors.white'),
					boxShadow: theme('boxShadow.lg')
				}
			}),
				addUtilities({
					'.text-shadow': {
						textShadow: '1px 1px rgba(0,0,0,0.4)'
					},
					'.outline-border-none': {
						outline: 'none',
						border: 'none'
					},
					'.flex-center-between': {
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between'
					},
					'.image-like-bg': {
						objectPosition: 'center',
						objectFit: 'cover',
						pointerEvents: 'none'
					}
				})
		})
	]
}
