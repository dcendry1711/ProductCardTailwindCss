tailwind.config = {
    theme: {
        extend: {
            colors: {
                paleOrange: "#ffd9a6",
                lightOrange: "#fbb03b",
                orange: "#f7931e"
            },
            fontFamily: {
                josefin: ['Josefin Sans', 'sans-serif'],
                playfair: ['Plaifair Display SC', 'serif'] 
            },
            backgroundImage: {
                mobile: ("url('bg-mobile.png')"),
                desktop: ("url('bg-desktop.png')")
            }
        }
    }
}