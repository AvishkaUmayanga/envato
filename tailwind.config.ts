import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		keyframes: {
		  'custom-ping': {
		    '0%': { transform: 'scale(1)' },
		    '25%': { transform: 'scale(1.2)'},
			'50%': { transform: 'scale(1.3)'},
			'75%': { transform: 'scale(1.4)'},
		    '100%': { transform: 'scale(1.5)'},
		  },
		  'fade-bottom-top': {
          '0%': { height: '100%' }, 
          '50%': { height: '50%' }, 
          '100%': { height: '0%' }, 
          },
		},
		screens: {
		  'xmd': '865px',
		},
		animation: {
		  ping: 'ping 1.5s linear infinite',
		  'custom-ping': 'custom-ping 10s ease-in-out infinite',
		  'fade-bottom-to-top': 'fade-bottom-top 3s ease-in-out forwards ',
		},
		transformStyle: {
		  'preserve-3d': 'preserve-3d',
		},
		backgroundImage: {
		  'dotted-pattern': 'radial-gradient(rgba(0, 0, 0, 0.3) 2px, transparent 1px)', 
		  'kitchen-pattern': "url('/images/kitchen.jpg')",
  		  'interior-pattern': "url('/images/interior.jpg')",
  		  'exterior-pattern': "url('/images/exterior.jpg')",
  		  'home-pattern': "url('/images/bedroom.jpg')",
		},
		  backgroundSize: {
		  'dot-size': '30px 30px', 
		},
  		colors: {
  			yellow: '#fc0',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        '.preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
		'.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
      });
    }
  ],
};
export default config;
