tailwind.config = {
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'white': '#FFFFFF',
            'gray': '#B3B4B7',
            'dark-purple': '#764C99',     
            'success' : '#24AE8F',  
            'primary': '#222548',                    
        },
        extend: {
            backgroundColor: {
                'primary': '#222548',                    
                'button': '#764C99',                   
                'glass': 'rgba(255, 255, 255, 0.05)',                   
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
            }
        }
    }
}